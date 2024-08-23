import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent, IconButton, Snackbar, List, ListItem, Checkbox, Alert } from "@mui/material";
import { useDropzone } from 'react-dropzone';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'; // File icon from Material-UI
import CloseIcon from '@mui/icons-material/Close'; // Delete icon
import FileUploadIcon from '@mui/icons-material/Upload'; // Using FileUploadIcon as a placeholder for Export

const Upload = () => {
  const [file, setFile] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [localFiles, setLocalFiles] = useState([]); // Local files state
  const [selectedFiles, setSelectedFiles] = useState([]); // State to keep track of selected files
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  // Dropzone configuration
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.ttl', // Only accept .ttl files
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    }
  });

  const handleFileUpload = () => {
    if (!file) {
      setSnackbarMessage("Please select a file to upload.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('https://2ec9-103-115-199-196.ngrok-free.app/upload-data/', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      setSnackbarMessage("File uploaded successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      fetchDataList(); // Fetch the updated data list
    })
    .catch(error => {
      console.error('Error:', error);
      setSnackbarMessage("Failed to upload file.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    });
  };

  const fetchDataList = () => {
    fetch('https://2ec9-103-115-199-196.ngrok-free.app/display-data/?namespace=MY_NAMESPACE&query=SELECT%20?s%20?p%20?o%20WHERE%20{%20?s%20?p%20?o%20}%20LIMIT%2010')
      .then(response => response.json())
      .then(data => {
        const ttlFiles = data.results.bindings.filter(item => item.name.endsWith('.ttl'));
        setDataList(ttlFiles || []);
      })
      .catch(error => {
        console.error('Error fetching data list:', error);
        setSnackbarMessage("Failed to fetch data list.");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      });
  };

  const handleLocalFileChange = (event) => {
    const files = Array.from(event.target.files);
    const ttlFiles = files.filter(file => file.name.endsWith('.ttl'));
    setLocalFiles(ttlFiles);
  };

  const handleImportLocalFiles = () => {
    if (localFiles.length === 0) {
      setSnackbarMessage("No local files selected.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    // Append local files to the existing dataList
    setDataList(prevDataList => [
      ...prevDataList,
      ...localFiles.map(file => ({ name: file.name, size: file.size })) // Simulate server response for local files
    ]);
  };

  const handleDelete = (item) => {
    // Handle delete logic here
    console.log('Delete:', item);
    // Remove item from dataList
    setDataList(prevDataList => prevDataList.filter(file => file.name !== item.name));
  };

  const handleExport = (item) => {
    // Handle export logic here
    console.log('Export:', item);
  };

  const handleSelectFile = (fileName) => {
    setSelectedFiles(prevSelectedFiles =>
      prevSelectedFiles.includes(fileName)
        ? prevSelectedFiles.filter(name => name !== fileName)
        : [...prevSelectedFiles, fileName]
    );
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Card 
        sx={{ 
          width: '35%', // Set the width to half of the container
          marginLeft: 0, // Align card to the left
          cursor: 'pointer',
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'row',
        }}
        onClick={handleFileUpload}
        {...getRootProps()}
      >
        <CardContent sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
          <IconButton component="span" sx={{ marginRight: 2 }}>
            <InsertDriveFileIcon fontSize="large" />
          </IconButton>
          <Box>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }}>
              File Upload
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'justify' }}>
            rdf/xml, ttl, ntriples, json-ld의 파일 형식을 지원하고, 여러 파일의 선택이 가능합니다.
            </Typography>
          </Box>
        </CardContent>
        <input {...getInputProps()} style={{ display: 'none' }} />
      </Card>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-start' }}>
        <Button 
          variant="contained" 
          color="primary" 
          component="label"
          onChange={handleLocalFileChange}
        >
          Import
          <input
            type="file"
            multiple
            accept=".ttl"
            onChange={handleLocalFileChange}
            style={{ display: 'none' }}
          />
        </Button>
      </Box>

      <Box sx={{ mt: 4 }}>
        <List>
          {dataList.map((item, index) => (
            <ListItem
              key={index}
              sx={{ display: 'flex', alignItems: 'center', mb: 2, border: '1px solid #ccc', borderRadius: 1, padding: 1 }}
            >
              <Checkbox
                edge="start"
                checked={selectedFiles.includes(item.name)}
                onChange={() => handleSelectFile(item.name)}
              />
              <Box sx={{ flex: 1, marginLeft: 2 }}>
                <Typography variant="body1">
                  {item.name}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton edge="end" onClick={() => handleDelete(item)}>
                  <CloseIcon/>
                </IconButton>
                <IconButton edge="end" onClick={() => handleExport(item)}>
                  <FileUploadIcon />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>

        <List>
          {localFiles.map((file, index) => (
            <ListItem
              key={`local-${index}`}
              sx={{ display: 'flex', alignItems: 'center', mb: 2, border: '1px solid #ccc', borderRadius: 1, padding: 1 }}
            >
              <Checkbox
                edge="start"
                checked={selectedFiles.includes(file.name)}
                onChange={() => handleSelectFile(file.name)}
              />
              <Box sx={{ flex: 1, marginLeft: 2 }}>
                <Typography variant="body1">
                  {file.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {`${file.size / 1024} KB`}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton edge="end" onClick={() => handleDelete({ name: file.name })}>
                  <CloseIcon/>
                </IconButton>
                <IconButton edge="end" onClick={() => handleExport({ name: file.name })}>
                  <FileUploadIcon/>
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Snackbar for feedback */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Upload;
