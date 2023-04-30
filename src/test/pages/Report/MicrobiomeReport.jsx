import ParaTitles from "../../components/ParaTitles";
import PageData from "../../components/PageData";
import GutMicrobiomeProfile from "../../components/GutMicrobiomeProfile";
import MicrobiomeProfileDetails from "../../components/MicrobiomeProfileDetails";
import TableWithChart from "../../components/TableWithChart/TableWithChart";
import Appendix from "../../components/Appendix";
import Header from "../../components/Header";
import ReportHeader from "../../components/ReportHeader";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import DownloadButton from "../../DownloadButton";
const MicrobiomeReport = () => {
  const downloadPDF = () => {
    const input = document.getElementById("pdf-container");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("report.pdf");
    });
  };
  return (
    <>
      {/* <button onClick={downloadPDF}>Download PDF</button> */}
      <div
        id="pdf-container"
        className="border-2 p-3 w-[95%] max-w-7xl mx-auto"
      >
        {/* heading */}
        <Header />
        <ReportHeader />
        {/* this might change */}
        <ParaTitles text="Other findings:" />
        {/* finding result */}
        <p>
          Your diversity values are in the realm of health and corresponds to
          values found in healthy reference cohort. We found only four keystone
          species in your profile. Your virulence protein and antimicrobial
          esistance profile corresponds to that we find our healthy reference
          cohort (for the relevant coverage and depth). Bacterial groups of your
          profile and F/B ratio may correlate to your increased chance of being
          obese. These findings are in relation to healthy profiles and if you
          experience symptoms, we highly recommend the following:
        </p>
        {/* =============== */}
        <ParaTitles text="Overall recommendation:" />
        <p>
          If you experience symptoms like blood in your stool, change in
          consistency or frequency of stools, unexplained weight loss or cramps,
          persistent nausea or vomiting, kindly consult a doctor.
        </p>
        {/* =============== */}
        <PageData />

        {/* ==================== */}
        <GutMicrobiomeProfile />
        {/* ==================== */}
        <MicrobiomeProfileDetails />
        {/* ==================== */}
        <TableWithChart />
        {/* ==================== */}
        <Appendix />
      </div>
    </>
  );
};

export default MicrobiomeReport;
