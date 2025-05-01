import logoOntario from "../../../../assets/images/logo-losfrutales-512x512.webp";
import logoLosFrutales from "../../../../assets/images/logo-losfrutales-400x202.webp";
import { PlaneMap } from "../../../Main/Panel/Plane";
import "./styles.css";
// import { useState, useEffect } from "react";

export default function DocumentPdf({
  lotes,
  lotesDisponibles,
  lotesSeparados,
  lotesVendidos,
}) {
  /* const [lotesDisponibles, setLotesDisponibles] = useState([]);
  const [lotesSeparados, setLotesSeparados] = useState([]);
  const [lotesVendidos, setLotesVendidos] = useState([]);

  useEffect(() => {
    setLotesDisponibles(lotes.filter((lote) => lote.disponibilidad === 1));
    setLotesSeparados(lotes.filter((lote) => lote.disponibilidad === 2));
    setLotesVendidos(lotes.filter((lote) => lote.disponibilidad > 2));
  }, [lotes]); */

  const InfoResume = ({ className = "", label, value }) => (
    <label className={`Info-resume ${className}`}>
      <span className="info-block" />
      {label}: {value}
    </label>
  );

  return (
    <>
      <div className="Document-pdf" id="document-pdf">
        <header className="Document-pdf__header">
          <img alt="logo-losfrutales" src={logoOntario} />
          <span>Reporte de Lotes - Proyecto Los Frutales</span>
          <img alt="logo-losfrutales" src={logoLosFrutales} />
        </header>
        <section className="Document-pdf__body">
          <div className="Document_pdf__info-resume">
            <InfoResume
              className="info__disponible"
              label="Lotes Disponibles"
              value={lotesDisponibles.length}
            />
            <InfoResume
              className="info__vendido"
              label="Lotes Vendidos"
              value={lotesVendidos.length}
            />
            <InfoResume
              className="info__separado"
              label="Lotes Separados"
              value={lotesSeparados.length}
            />
          </div>
          <PlaneMap />
        </section>
      </div>
    </>
  );
}
