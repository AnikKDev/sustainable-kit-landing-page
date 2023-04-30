import { Outlet } from "react-router-dom";
import MicrobiomeReport from "./Report/MicrobiomeReport";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Main = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <button className="btn btn-primary" onClick={handlePrint}>
        Print this out!
      </button>
      <MicrobiomeReport ref={componentRef} />

      <Outlet />
    </div>
  );
};

export default Main;
