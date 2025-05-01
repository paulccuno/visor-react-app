import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useState } from "react";
import apiLosFrutales from "../../../../services/apiLosFrutales";
import DocumentPdf from "../DocumentPdf";
import pathLotes from "../../../Main/Panel/Plane/lotes.data.json";

import "./styles.css";

export default function ButtonPdf() {
  const [lotes, setLotes] = useState([]);
  const [lotesDisponibles, setLotesDisponibles] = useState([]);
  const [lotesSeparados, setLotesSeparados] = useState([]);
  const [lotesVendidos, setLotesVendidos] = useState([]);

  const handleClick = async () => {
    apiLosFrutales.lotes.getLotes().then((res) => {
      setLotes(new Array(res.data.length));
      res.data.forEach((resLote, i) => {
        pathLotes.forEach((pathLote, j) => {
          if (pathLote.id === resLote.id)
            lotes[i] = { ...resLote, path: pathLote.path };
        });
      });
      setLotes(lotes);
      setLotesDisponibles(lotes.filter((lote) => lote.disponibilidad === 1));
      setLotesSeparados(lotes.filter((lote) => lote.disponibilidad === 2));
      setLotesVendidos(lotes.filter((lote) => lote.disponibilidad > 2));
      const documentPdf = document.getElementById("document-pdf");
      html2canvas(documentPdf).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", [210, 297]);
        pdf.addImage(imgData, "JPEG", 0, 0, 210, 0);
        pdf.save("reporte-lotes-losfrutales.pdf");
      });
    });
  };
  return (
    <>
      <button className="Button-pdf" onClick={handleClick}>
        Exportar PDF
      </button>
      <div className="Pdf">
        <DocumentPdf
          lotes={lotes}
          lotesDisponibles={lotesDisponibles}
          lotesSeparados={lotesSeparados}
          lotesVendidos={lotesVendidos}
        />
      </div>
    </>
  );
}
