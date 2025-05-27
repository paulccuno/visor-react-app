import "./styles.css";
import Area from "./Area";
import { useContext } from "react";
import AreaContext from "../../../../../contexts/AreaContext";

export default function Map({ lotesMap = [] }) {
  const { areaSelected } = useContext(AreaContext);

  return (
    <>
      <svg className="Map" id="lotes-losfrutales" viewBox="0 0 4096 3316">
        {lotesMap.map(
          ({ id, path, mz, lote, area, precio, precioxm2, disponibilidad, visibilidad_precio }) => (
            <Area
              key={id}
              id={id}
              draw={path}
              block={mz}
              lot={lote}
              area={area}
              price={precio}
              pricexm2={precioxm2}
              disponibility={disponibilidad}
              visibilityprice={visibilidad_precio}
              clicked={id === areaSelected.id && true}
            />
          )
        )}
      </svg>
    </>
  );
}
