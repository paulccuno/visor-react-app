import ZoomInIcon from "../../../../../assets/icons/ZoomInIcon";
import ZoomOutIcon from "../../../../../assets/icons/ZoomOutIcon";
import ZoomResetIcon from "../../../../../assets/icons/ZoomResetIcon";

import "./styles.css";

export default function PlaneButtons({ zoomIn, zoomOut, resetTransform }) {
  return (
    <>
      <div className="Plane-buttons">
        <button onClick={() => zoomIn()} className="button-zoom">
          <ZoomInIcon />
        </button>
        <button className="button-zoom" onClick={() => zoomOut()}>
          <ZoomOutIcon />
        </button>
        <button className="button-zoom" onClick={() => resetTransform()}>
          <ZoomResetIcon />
        </button>
      </div>
    </>
  );
}
