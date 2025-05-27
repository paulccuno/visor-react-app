import { useContext } from "react";
import AreaContext from "../../../../../contexts/AreaContext";
import LoginContext from "../../../../../contexts/LoginContext";
import "./styles.css";

export default function PlaneInfo({ }) {
  const { token } = useContext(LoginContext);
  const { areaHover } = useContext(AreaContext);
  return (
    <>
      <div className={`Plane-info ${areaHover ? "show" : ""}`}>
        <div className="Plane-info__container">
          <label className="Plane-info__label">
            Lote:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{areaHover?.lot}</span>
          </label>
          <label className="Plane-info__label">
            Area:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{areaHover.area ? `${areaHover?.area} m2` : ""}</span>
          </label>
          {!token && areaHover.disponibility > 2 || areaHover.visibilityprice === 1 ? (
            <></>
          ) : (
            <label className="Plane-info__label">
            Precio:&nbsp;&nbsp;&nbsp;
            <span>{areaHover.price ? `S/ ${areaHover?.price}` : "--"}</span>
          </label>
          )}
        </div>
      </div>
    </>
  );
}
