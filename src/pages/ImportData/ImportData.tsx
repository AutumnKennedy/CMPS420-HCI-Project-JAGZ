import React, { useRef } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./ImportData.css";

export function ImportData() {
  const inputFile = useRef<HTMLInputElement | null>(null);

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const importedFile = e.target.files?.[0];

    if (importedFile) {
      if (
        importedFile.name.endsWith(".edf") ||
        importedFile.name.endsWith(".fif")
      ) {
        console.log("Selected .edf or .fif file:", importedFile);
      } else {
        console.error("Invalid file type. Please select a .edf file.");
      }
    }
  };

  const onButtonClick = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  return (
    <div className="importDataContainer">
      <h1>Import Data</h1>

      <div>
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={onFileInputChange}
        />

        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={onButtonClick}
        >
          Import .edf File
        </Button>
      </div>
    </div>
  );
}
