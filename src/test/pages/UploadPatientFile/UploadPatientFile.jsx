import React from "react";
import { useNavigate } from "react-router-dom";

const UploadPatientFile = () => {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse lg:w-3/4">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Upload your files here</h1>
          <p className="py-6">Please provide required files here.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Data1</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Data2</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control mt-6">
              <button
                onClick={() => navigate("/biome-report")}
                className="btn btn-primary"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPatientFile;
