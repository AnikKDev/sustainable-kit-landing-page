import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import MicrobiomeReport from "./pages/Report/MicrobiomeReport";

const DownloadButton = () => {
  const containerRef = useRef();

  const handleDownload = () => {
    // Calculate the height of the temporary container element
    const height = containerRef.current.offsetHeight;

    // Create a new instance of jsPDF
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [1000, height],
    });

    // Use html2canvas to capture a screenshot of the container element
    html2canvas(containerRef.current, { scale: 1 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Add the image data to the PDF
      pdf.addImage(imgData, "PNG", 0, 0, 1000, height);

      // Download the PDF
      pdf.save("report.pdf");
    });
  };

  return (
    <div>
      <button onClick={handleDownload}>Download PDF</button>
      <div ref={containerRef}>
        <MicrobiomeReport />
      </div>
    </div>
  );
};
export default DownloadButton;
