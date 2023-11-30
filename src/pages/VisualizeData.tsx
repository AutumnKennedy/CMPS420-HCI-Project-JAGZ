import { useState } from "react";
import { ImportData } from "./ImportData/ImportData";
import "./visualizeData.css";
import { Autocomplete, TextField } from "@mui/material";
import Plot from 'react-plotly.js';
import { EdfPlot } from "./EdfPlot";
import { EdfFileDropdown } from "@/components/EdfFileDropdown/EdfFileDropdown";

const options = ["Graph", "Heat map", "Topograghy", "Etc"];

export function VisualizeData(): React.ReactElement {
  const [file, setFile] = useState<File | undefined | null>(null);
  const [selectedFile, setSelectedFile] = useState<string>("");

  const handleFileSelect = (file: string) => {
    setSelectedFile(file);
  }

  return (
    <div className="visualizeContainer">
      <div className="uploadAndSelect">
        <div className="upload">
          <ImportData file={file} setFile={setFile} />
        </div>

        <div className="fileAndSelect">
          <div>
            Uploaded File:
            {file && ` ${file.name}`}
          </div>

          {/* <Autocomplete
            fullWidth
            value={select}
            options={options}
            onChange={(e, value) => setSelect(value)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Plot Options" />
            )}
          /> */}
          <EdfFileDropdown selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
        </div>
      </div>

      <div className="viewContainer">
        <div className="view">
            <EdfPlot selectedFile={selectedFile}/>
        </div>
      </div>
    </div>
  );
}
