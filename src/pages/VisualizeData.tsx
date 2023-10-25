import { useState } from "react";
import { ImportData } from "./ImportData/ImportData";
import "./visualizeData.css";
import { Autocomplete, TextField } from "@mui/material";

const options = ["Graph", "Heat map", "Topograghy", "Etc"];

export function VisualizeData(): React.ReactElement {
  const [file, setFile] = useState<File | undefined | null>(null);
  const [select, setSelect] = useState<string | null>(null);

  return (
    <div className="container">
      <div className="uploadAndSelect">
        <ImportData file={file} setFile={setFile} />
        {file?.name}

        <Autocomplete
          value={select}
          options={options}
          onChange={(e, value) => setSelect(value)}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>

      <div>View</div>
    </div>
  );
}
