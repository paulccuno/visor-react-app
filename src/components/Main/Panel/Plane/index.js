import "./styles.css";
import Map from "./Map";
import pathLotes from "./lotes.data.json";
import planeLosFrutales from "../../../../assets/images/planes-los-frutales-v2_4646x3756.webp";

import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import PlaneButtons from "./PlaneButtons";
import PlaneInfo from "./PlaneInfo";
import { useContext, useEffect } from "react";
import apiLosFrutales from "../../../../services/apiLosFrutales";
import LotesContext from "../../../../contexts/LotesContext";
import { useState } from "react";

export const PlaneMap = ({ lotesMapp }) => {
  const { lotes, setLotes } = useContext(LotesContext);
  const [lotesMap, setLotesMap] = useState(lotesMapp);

  useEffect(() => {
    apiLosFrutales.lotes.getLotes().then((res) => {

      setLotes(new Array(res.data.length));
      res.data.forEach((resLote, i) => {
        pathLotes.forEach((pathLote, j) => {
          if (pathLote.id === resLote.id)
            lotes[i] = { ...resLote, path: pathLote.path };
        });
      });
      setLotes(lotes);
      setLotesMap(lotes);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <div className="Plane">
        <img
          className="plane-losfrutales"
          alt="Plano Proyecto Los Frutales"
          src={planeLosFrutales}
          useMap="#lotes-losfrutales"
        />
        <Map lotesMap={lotesMap} />
      </div>
    </>
  );
};

export default function Plane() {
  return (
    <>
      <TransformWrapper
        initialScale={1.1}
        initialPositionX={100}
        initialPositionY={-100}
        centerOnInit={true}
        minScale={0.80}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <PlaneButtons
              zoomIn={zoomIn}
              zoomOut={zoomOut}
              resetTransform={resetTransform}
            />
            <PlaneInfo />
            <TransformComponent>
              <PlaneMap />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </>
  );
}
