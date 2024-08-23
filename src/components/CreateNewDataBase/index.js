import React, { useState } from "react";
import { Box, Typography, TextField, Grid, Button, Snackbar, Alert } from "@mui/material";
import CustomTextInput from "../CustomTextInput";
import CustomSelectInput from "../CustomSelectInput";

const CreateNewDatabase = () => {
  const [namespaceName, setNamespaceName] = useState("");
  const [databaseType, setDatabaseType] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // 'success' or 'error'

  const databaseTypes = [
    { label: "Blazegraph", value: "blazegraph" },
    { label: "MySQL", value: "mysql" },
    { label: "PostgreSQL", value: "postgresql" },
  ];

  const handleDatabaseTypeChange = (value) => {
    setDatabaseType(value);
  };

  const handleNamespaceChange = (event) => {
    setNamespaceName(event.target.value);
  };

  const handleSubmit = () => {
    // Validation
    if (!namespaceName) {
      setSnackbarMessage("Please fill in all required fields.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    fetch('https://2ec9-103-115-199-196.ngrok-free.app/create-database/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ namespace_name: namespaceName }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setSnackbarMessage("Namespace created successfully!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
      })
      .catch(error => {
        console.error('Error:', error);
        setSnackbarMessage("Failed to create namespace.");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box>
      <Typography variant="body2" gutterBottom>
        새로운 데이터베이스를 생성하기 위해 데이터베이스의 유형을 선택하고, 설치 경로와 Port를 입력해주세요. 추가적으로 최소/최대 메모리 사용량을 입력하면, 이에 맞게 데이터베이스가 실행됩니다.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Required
      </Typography>

      <Grid container spacing={2} alignItems="center">
        {/* Database Type */}
        <Grid item xs={4}>
          <Typography variant="body1">Database Type</Typography>
        </Grid>
        <Grid item xs={8}>
          <CustomSelectInput
            label="Database Type"
            options={databaseTypes}
            selected={databaseType}
            onSelect={handleDatabaseTypeChange}
          />
        </Grid>

        {/* Namespace Name */}
        <Grid item xs={4}>
          <Typography variant="body1">Namespace Name</Typography>
        </Grid>
        <Grid item xs={6}>
          <CustomTextInput
            placeholder="Namespace"
            value={namespaceName}
            onChange={handleNamespaceChange}
          />
        </Grid>

        {/* Port */}
        <Grid item xs={4}>
          <Typography variant="body1">Port</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField fullWidth variant="outlined" defaultValue="9999" />
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Optional
      </Typography>

      <Grid container spacing={2} alignItems="center">
        {/* Minimum Memory Usage */}
        <Grid item xs={4}>
          <Typography variant="body1">Minimum Memory Usage (-Xms)</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField fullWidth variant="outlined" defaultValue="9999" />
        </Grid>

        {/* Maximum Memory Usage */}
        <Grid item xs={4}>
          <Typography variant="body1">Maximum Memory Usage (-Xmx)</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField fullWidth variant="outlined" defaultValue="9999" />
        </Grid>
      </Grid>
      <Box className="custom-modal-footer">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Create Namespace
        </Button>
      </Box>

      {/* Snackbar for success or error message */}
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

export default CreateNewDatabase;
