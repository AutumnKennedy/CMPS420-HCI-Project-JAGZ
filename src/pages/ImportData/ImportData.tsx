import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./ImportData.css";
import axios from "axios";
import { Api } from '../../Config';

export function ImportData() {
  const inputFile = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.name.endsWith(".edf")) {
        console.log("Selected .edf file:", file);
        setSelectedFile(file);
      } else {
        console.error("Invalid file type. Please select a .edf file.");
      }
    }
  };

  const handleApi = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

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
      console.error("No file selected.");
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
        <br />
        <br />
        <div className="centered-button">
          <Button
            variant="contained"
            onClick={handleApi}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
