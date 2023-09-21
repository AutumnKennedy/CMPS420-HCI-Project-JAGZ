import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export const ImportData = () => {
  const inputFile = useRef<HTMLInputElement | null>(null);

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      
      if (selectedFile.name.endsWith('.edf')) {
        
        console.log('Selected .edf file:', selectedFile);
      } else {
        
        console.error('Invalid file type. Please select a .edf file.');
      }
    }
  };

  const onButtonClick = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  return (
    <div>
      <div className="top-right">
        <h1>Import Data</h1>
      </div>
      <div className="mid-container">
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: 'none' }}
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
};

export default ImportData;








