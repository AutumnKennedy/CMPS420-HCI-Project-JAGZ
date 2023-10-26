import { useEffect, useState } from "react";
import { exec } from "child_process";

const pythonScript =
  "C:/Users/myfin/source/repos/CMPS420-HCI-Project-JAGZ/python/mne/savegraph.py";

export function PlotDataPage(): React.ReactElement {
  const [selectedFile, setSelectedFile] = useState<File[] | undefined>(
    undefined
  );

  const handleImportFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const importedFiles = e.target.files;
    if (!importedFiles) return;

    const files: File[] = selectedFile ? [...selectedFile] : [];

    for (var i = 0; i < importedFiles.length; i++) {
      files.push(importedFiles[i]);
    }

    setSelectedFile(files);
  };

  useEffect(() => {
    if (!selectedFile) return;

    exec(pythonScript, (error, stdout, stderr) => {
      if (error) {
        console.error(error.message);
      } else console.log(stdout);
    });
  }, [selectedFile]);

  return (
    <div>
      <input type="file" onChange={handleImportFiles} />
      {selectedFile ? (
        selectedFile.map((file, index) => {
          return <div key={index}> {file.name} </div>;
        })
      ) : (
        <div> crying </div>
      )}
    </div>
  );
}
