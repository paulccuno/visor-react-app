import { useEffect, useState } from "react";
import { useContext } from "react";
import LotesContext from "../../../../contexts/LotesContext";
import apiLosFrutales from "../../../../services/apiLosFrutales";
import "./styles.css";

const DISPONIBILITY = [
  { id: 1, disponibility: "Libre" },
  { id: 2, disponibility: "Separado" },
  { id: 3, disponibility: "Vendido" },
  //{ id: 4, disponibility: "Reservado" },
];

const VISIBILITY = [
  { id: 1, visibility: "NO" },
  { id: 2, visibility: "SI" },
];

export default function PanelInfo({
  id,
  label = "",
  value = "--",
  editable = false,
  type = false
}) {
  const [valueSelect, setValueSelect] = useState(value);
  const {lotes, setLotes } = useContext(LotesContext);

  const handleSelect = async (e) => {
    const { target } = e;
    const valueDisponibility = +target.value;
    setValueSelect(+target.value);
    const data = { id, disponibility: valueDisponibility };
    const res = await apiLosFrutales.lotes.updateDisponibilityLotes({ data });
    const _lotes = lotes;
    if (res.success) {
      const index = lotes.findIndex((lote) => lote.id === id);
      _lotes[index].disponibilidad = valueDisponibility;
      setLotes(_lotes);
    }
  };

  const handleSelectVisibility = async (e) => {
    const { target } = e;
    const valueVisibility = +target.value;
    setValueSelect(+target.value);
    const data = { id, visibility: valueVisibility };
    const res = await apiLosFrutales.lotes.updateLotesVisibility({ data });
    const _lotes = lotes;
    if (res.success) {
      const index = lotes.findIndex((lote) => lote.id === id);
      _lotes[index].visibilidad_precio = valueVisibility;
      setLotes(_lotes);
    }
  };

  useEffect(() => {
    if (!editable) return;
    setValueSelect(value);
  }, [id]);

  return (
    <>
      <div className="Panel-info">
        <label className="Panel-info__label">{label}:</label>
        {editable ? (
          <>
            {type ? (
              <select
              className={`Panel-info__value-editable`}
              onChange={handleSelect}
              data-selected={valueSelect}
              value={valueSelect}
              >
                {DISPONIBILITY.map(({ id, disponibility }) => (
                 <option key={`disponibility-${id}`} value={id}>
                    {disponibility}
                  </option>
                ))}
              </select>
            ) : (
              <select
              className={`Panel-info__value-editable`}
              onChange={handleSelectVisibility}
              data-selected={valueSelect}
              value={valueSelect}
              >
                {VISIBILITY.map(({ id, visibility }) => (
                  <option key={`visibility-${id}`} value={id}>
                    {visibility}
                  </option>
                ))}
              </select>
            )}
          </>
        ) : (
          <span className="Panel-info__value">{value || "--"}</span>
        )}
      </div>
    </>
  );
}
