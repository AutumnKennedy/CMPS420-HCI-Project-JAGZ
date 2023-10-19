import React, { useRef } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./ImportData.css";
import axios from "axios";
import { Api } from '../../Config';

export function ImportData() {
  const inputFile = useRef<HTMLInputElement | null>(null);

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      if (selectedFile.name.endsWith(".edf")) {
        console.log("Selected .edf file:", selectedFile);

        const formData = new FormData();
        formData.append("selectedFile", selectedFile);

        axios.post("http://localhost:8000/api/upload-file/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      } else {
        console.error("Invalid file type. Please select a .edf file.");
      }
    }
  };

  const onButtonClick = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  }

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
