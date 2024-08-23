import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import CustomSelectInput from "../../../components/CustomSelectInput";
import CustomTextInput from "../../../components/CustomTextInput";

const ConnectExistingDatabase = () => {
  const databaseTypes = [
    { label: "Blazegraph", value: "blazegraph" },
    { label: "MySQL", value: "mysql" },
    { label: "PostgreSQL", value: "postgresql" },
  ];

  const handleDatabaseTypeChange = (value) => {
    console.log("Selected Database Type:", value);
  };

  return (
    <Box>
      <Typography variant="body1" gutterBottom>
        기존에 실행되고 있는 데이터베이스와 연결하기 위해 데이터베이스의 유형과
        IP, Port를 입력해주세요.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Required
      </Typography>

      <Grid container spacing={2} alignItems="center">
        {/* Database Type */}
        <Grid item xs={2}>
          <Typography variant="body1">Database Type</Typography>
        </Grid>
        <Grid item xs={10}>
          <CustomSelectInput
            label="Database Type"
            options={databaseTypes}
            selected=""
            onSelect={handleDatabaseTypeChange}
          />
        </Grid>

        {/* IP Address */}
        <Grid item xs={2}>
          <Typography variant="body1">IP Address</Typography>
        </Grid>
        <Grid item xs={10}>
          <CustomTextInput value="111.222.333.45" />
        </Grid>

        {/* Port */}
        <Grid item xs={2}>
          <Typography variant="body1">Port</Typography>
        </Grid>
        <Grid item xs={10}>
          <CustomTextInput value="9999" />
        </Grid>
      </Grid>
      <Box className="custom-modal-footer">
        <Button variant="contained" color="primary">
          Connect Database
        </Button>
      </Box>
    </Box>
  );
};

export default ConnectExistingDatabase;
