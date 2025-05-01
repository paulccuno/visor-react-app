import Plane from "./Plane";
import PanelInfo from "./PanelInfo";

import AreaContext from "../../../contexts/AreaContext";
import LoginContext from "../../../contexts/LoginContext";
import { updateLotePrecio } from "../../../services/apiLosFrutales/lotes";
import { sendEmail } from "../../../services/apiLosFrutales/email";

import "./styles.css";
import { useContext, useState } from "react";

const DISPONIBILITY = {
  1: "Libre",
  2: "Separado",
  3: "Vendido",
  //4: "Reservado",
};

export default function Panel() {
  const [areaHover, setAreaHover] = useState(false);
  const [areaSelected, setAreaSelected] = useState(false);

  const { token } = useContext(LoginContext);

  const handleUpdatePrice = async () => {
    if (!areaSelected) {
      console.error('No se ha seleccionado un lote.');
      return;
    }
  
  // Abrir ventana emergente para que el usuario ingrese el nuevo precio
  let newPrice = prompt(`Ingrese el nuevo precio para el lote Mz: ${areaSelected.block}, Lote: ${areaSelected.lot}`, areaSelected.price);

  // Verificar si el usuario ingresó un precio válido
  if (newPrice === null || newPrice.trim() === '' || isNaN(newPrice) || parseFloat(newPrice) <= 0) {
    console.error('No se ha ingresado un nuevo precio válido.');
    window.alert('Por favor, ingrese un precio válido mayor a 0.');
    return;
  }

  // Convertir el precio a número
  newPrice = parseFloat(newPrice);
  
  try {
    const res = await updateLotePrecio({
      data: {
        id: areaSelected.id,
        precio: newPrice
      }
    });

    if (res.success) {
      window.alert('¡Precio actualizado exitosamente!');
      window.location.reload();
    }
  } catch (error) {
    console.error('Error al actualizar el precio del lote:', error);
    window.alert('Ha ocurrido un error al actualizar el precio. Por favor, inténtalo de nuevo.');
  }
};

const handleEmailSend = async () => {
  if (!areaSelected) {
    console.error('No se ha seleccionado un área.');
    return;
  }

  try {
    const response = await sendEmail({
      data: {
        destinatario: 'rensy.vizcarra@almarenconstructora.com',
        asunto: 'LOS FRUTALES | Alerta de Reservación de Lote',
        mensaje: `
          Notificación de Reservación de lote.

          Información del lote:
          Mz: ${areaSelected.block}
          Lote: ${areaSelected.lot}
          Área: ${areaSelected.area ? `${areaSelected.area} m2` : 'No disponible'}
          Precio: ${areaSelected.price ? `S/ ${areaSelected.price}` : 'No disponible'}
          Estado: ${DISPONIBILITY[areaSelected.disponibility] || 'No disponible'}

          No responder a este correo.
        `
      }
    });

    console.log(response);
    window.alert('¡Reservación enviada!');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    window.alert('Ha ocurrido un error al enviar el correo electrónico. Por favor, inténtalo de nuevo.');
  }
};

return (
  <>
    <AreaContext.Provider
      value={{
        areaHover,
        setAreaHover,
        areaSelected,
        setAreaSelected,
      }}
    >
      <div className="Panel">
        <div className="Panel-container">
          <Plane />
          <footer className="Panel__footer">
            <PanelInfo
              id={areaSelected?.id}
              label="Lote"
              value={`${areaSelected?.block}-${areaSelected?.lot}`}
            />
            <PanelInfo
              id={areaSelected?.id}
              label="Área"
              value={areaSelected?.area ? `${areaSelected?.area} m2` : null}
            />
            <PanelInfo
              id={areaSelected?.id}
              label="Precio"
              value={
                (!token && areaSelected?.disponibility > 2) || areaSelected.visibilityprice === 1
                  ? "--"
                  : areaSelected?.price
                  ? `S/ ${areaSelected?.price}`
                  : null
              }
            />

            {token && areaSelected?.disponibility == 1 ?
              <button className="button-login" onClick={handleUpdatePrice}>
                ✎
              </button> : <></>
            }

            {token ? (
              <PanelInfo
                id={areaSelected?.id}
                label="Estado"
                value={areaSelected?.disponibility || "--"}
                editable
                type
              />
            ) : (
              <PanelInfo
                id={areaSelected?.id}
                label="Estado"
                value={
                  areaSelected?.disponibility > 2
                    ? DISPONIBILITY[3]
                    : DISPONIBILITY[areaSelected?.disponibility] || "--"
                }
              />
            )}

            {token ? (
              <PanelInfo
                id={areaSelected?.id}
                label="Mostrar precio"
                value={areaSelected.visibilityprice}
                editable
              />
            ) : (
              <></>
            )}            

            {areaSelected?.disponibility == 1 ?
              <button className="button-login" onClick={handleEmailSend}>
                RESERVAR
              </button> : <></>

            }

          </footer>
        </div>
      </div>
    </AreaContext.Provider>
  </>
);
}
