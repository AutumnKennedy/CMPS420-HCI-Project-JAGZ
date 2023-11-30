import { useState } from "react";
import { ImportData } from "./ImportData/ImportData";
import "./visualizeData.css";
import { Autocomplete, Button, TextField } from "@mui/material";

const options = ["Graph", "Heat map", "Topograghy", "Etc"];

export function VisualizeData(): React.ReactElement {
  const [file, setFile] = useState<File | undefined | null>(null);
  const [select, setSelect] = useState<string | null>(null);

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

          <Autocomplete
            fullWidth
            value={select}
            options={options}
            onChange={(e, value) => setSelect(value)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Plot Options" />
            )}
          />
          <br/>
          <Button variant="contained" >ICA Preprocessing</Button>
        </div>
      </div>

      <div className="viewContainer">
        <div className="view">View 1</div>
        <div className="view">View 2</div>
      </div>

      <div className="viewContainer">
        <div className="view">View 3</div>
        <div className="view">View 4</div>
      </div>
    </div>
  );
}
