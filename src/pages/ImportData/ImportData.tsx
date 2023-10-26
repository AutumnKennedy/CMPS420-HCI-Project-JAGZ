import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import "./ImportData.css";
import { UploadFile } from "@mui/icons-material";

const acceptedFiles = ".edf, .fif";

type ImportDataProps = {
  file?: File | null;
  setFile: (arg: File | undefined | null) => void;
};

export function ImportData({ setFile }: ImportDataProps) {
  const inputFile = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const importedFile = e.target.files?.[0];

    if (importedFile) {
      if (
        importedFile.name.endsWith(".edf") ||
        importedFile.name.endsWith(".fif")
      ) {
        setFile(importedFile);
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

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const droppedFile = Array.from(event.dataTransfer.files);
    setFile(droppedFile[0]);
  };

  return (
    <div
      className="container"
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
        onChange={onFileInputChange}
        accept={acceptedFiles}
      />

      <Button onClick={onButtonClick}>
        <div className="inner">
          <UploadFile
            style={{
              display: "flex",
              height: "100px",
              width: "100px",
            }}
          />

          <div className="text"> Import File </div>
          <div> Accepted File Types: {acceptedFiles} </div>
        </div>
      </Button>
    </div>
  );
}
