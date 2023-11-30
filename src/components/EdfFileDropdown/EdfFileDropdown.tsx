import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';

interface EdfFileDropdownProps {
  selectedFile: string;
  setSelectedFile: (arg: string) => void;
}

interface FileList {
  files: string[];
}

export const EdfFileDropdown: React.FC<EdfFileDropdownProps> = ({ selectedFile, setSelectedFile }) => {
  const [files, setFiles] = useState<string[]>([]);

  const fetchFiles = async () => {
    const { data } = await axios.get<FileList>("http://localhost:8000/api/get-file-list/");

    setFiles(data.files);
  }

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    setSelectedFile(selectedValue);
  };

  return (
    <Select
      value={selectedFile}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Select file' }}
      defaultValue={files[0]}
    >
      <MenuItem value="" disabled>Select a file</MenuItem>
      {files.map((file, index) => (
        <MenuItem key={index} value={file}>{file}</MenuItem>
      ))}
    </Select>
  );
};