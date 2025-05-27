import "./styles.css";

import AreaContext from "../../../../../../contexts/AreaContext";
import { useContext } from "react";

const DISPONIBILITY = {
  1: "Libre",
  2: "Separado",
  3: "Vendido",
  4: "Reservado",
};

/**
 *
 * @param {string} id identificador
 * @param {string} draw atributo d de svg, se refiere a dibujo
 * @param {string} block manzana
 * @param {number} lot lote
 * @param {float} area area
 * @param {float} price precio
 * @param {float} pricexm2 precioxm2
 * @param {string} disponibility disponibilidad
 * @param {string} visibilityprice visibilidadPrecio
 * @returns
 */
export default function Area({
  id,
  draw,
  block,
  lot,
  area,
  price,
  pricexm2,
  disponibility,
  visibilityprice,
  clicked,
}) {
  const disponibilityClassName =
    DISPONIBILITY[String(disponibility).toLocaleLowerCase()];

  const { setAreaHover, setAreaSelected } = useContext(AreaContext);

  const handleClick = (e) => {
    setAreaSelected({
      id,
      block,
      lot,
      area,
      price,
      disponibility,
      visibilityprice,
    });
  };

  const handleMouseEnter = (e) => {
    setAreaHover({
      lot: id,
      area,
      price,
      disponibility,
      visibilityprice,
    });
  };

  const handleMouseLeave = (e) => {
    setAreaHover(false);
  };

  return (
    <>
      {/* <g data-tip data-for={`tool-tip-${block}-${lot}`}> */}
      <path
        className={`Area ${disponibilityClassName} ${clicked && "clicked"}`}
        strokeLinejoin="round"
        id={id}
        d={draw}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </>
  );
}
