import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const MapActiveDatabase = ({ dataBaseInfo }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {/* Basic Information */}
        <Grid item xs={4}>
          <Typography variant="h6" gutterBottom>
            Basic Information
          </Typography>
          {dataBaseInfo.BasicInfo.map((info, index) => (
            <Box key={index} display="flex" justifyContent="space-between" mb={1}>
              <Typography variant="body1" fontWeight="bold">
                {info.key}
              </Typography>
              <Typography variant="body1">{info.value}</Typography>
            </Box>
          ))}
        </Grid>

        {/* Additional Information */}
        <Grid item xs={8}>
          <Typography variant="h6" gutterBottom>
            Additional Information
          </Typography>
          <Grid container spacing={2}>
            {/* First Column of Additional Information */}
            <Grid item xs={6}>
              {dataBaseInfo.AdditionalInfo.slice(0, Math.ceil(dataBaseInfo.AdditionalInfo.length / 2)).map((info, index) => (
                <Box key={index} display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body1" fontWeight="bold">
                    {info.key}
                  </Typography>
                  <Typography variant="body1">{info.value}</Typography>
                </Box>
              ))}
            </Grid>

            {/* Second Column of Additional Information */}
            <Grid item xs={6}>
              {dataBaseInfo.AdditionalInfo.slice(Math.ceil(dataBaseInfo.AdditionalInfo.length / 2)).map((info, index) => (
                <Box key={index} display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body1" fontWeight="bold">
                    {info.key}
                  </Typography>
                  <Typography variant="body1">{info.value}</Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MapActiveDatabase;
