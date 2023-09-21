import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export const ImportData = () => {
  return (
    <div>
      <div className="top-right">
        <h1>
          Import Data
        </h1>
      </div>
      <div className="mid-container">
      <Button variant="contained" endIcon={<AddIcon />}>
            Import .edf File
        </Button>
      </div>
    </div>
  );
}

export default ImportData;






