import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import "./Settings.css";
import CustomModal from "../../components/CustomModal";
import CreateNewDataBase from "../../components/CreateNewDataBase";
import ConnectExistingDatabase from "./components/ConnectExistingDatabase";
import MapActiveDatabase from "./components/MapActiveDatabase";

const Settings = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [
    isConnectExistingDatabaseModalOpen,
    setIsConnectExistingDatabaseModalOpen,
  ] = useState(false);

  const [
    isCreateNewDataBaseModalOpen,
    setIsCreateNewDataBaseModalOpen,
  ] = useState(false);

  const handleConnectExistingDatabaseOpenModal = () => {
    setIsConnectExistingDatabaseModalOpen(true);
  };

  const handleCreateNewDataBaseOpenModal = () => {
    setIsCreateNewDataBaseModalOpen(true);
  };

  const handleConnectExistingDatabaseCloseModal = () => {
    setIsConnectExistingDatabaseModalOpen(false);
  };

  const handleCreateNewDataBaseCloseModal = () => {
    setIsCreateNewDataBaseModalOpen(false);
  };

  const handleConnectExistingDatabaseConfirm = () => {
    // Handle confirm logic here
    setIsConnectExistingDatabaseModalOpen(false);
  };

  const handleCreateNewDataBaseConfirm = () => {
    // Handle confirm logic here
    setIsCreateNewDataBaseModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirm = () => {
    // Add confirmation logic here
    setModalOpen(false);
  };

  const exampleData = {
    BasicInfo: [
      { key: "Database Type", value: "Blazegraph" },
      { key: "IP Address", value: "localhost" },
      { key: "Port", value: "9999" },
      { key: "Repositories", value: "1" },
    ],
    AdditionalInfo: [
      { key: "runningQueriesCount", value: "0" },
      { key: "queryStartCount", value: "1008" },
      { key: "queryErrorCount", value: "0" },
      { key: "queryDoneCount", value: "1008" },
      { key: "queryPerSecond", value: "1.0016972" },
      { key: "operatorTasksPerQuery", value: "5302.2371" },
      { key: "operatorStartCount", value: "5344655" },
      { key: "operatorHaltCount", value: "5344655" },
      { key: "operatorActiveCount", value: "0" },
      { key: "deadlineQueueSize", value: "0" },
    ],
  };
  return (
    <div className="settings-container">
      {/* First Section: Active Database Information */}
      <section className="settings-section">
        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="h6" className="section-heading">
            Active Namespace Information
          </Typography>
          <ControlPointOutlinedIcon
            className="section-icon"
            onClick={handleCreateNewDataBaseOpenModal}
          />
        </Box>
        <Card className="settings-card">
          <CardContent>
            {exampleData ? (
              <MapActiveDatabase dataBaseInfo={exampleData} />
            ) : (
              <>
                <Typography variant="body1" color="textSecondary">
                  There are no databases associated with this management tool.
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Click the button above to create a new database or connect to
                  an existing database.
                </Typography>
              </>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Second Section: Repository */}
      <section className="settings-section">
        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="h6" className="section-heading">
            Repository
          </Typography>
          <ControlPointOutlinedIcon
            className="section-icon"
            onClick={handleConnectExistingDatabaseOpenModal}
          />
        </Box>
        {/* You can add more content here for the "Repository" section */}
      </section>

      {/* Custom Modal */}
      <CustomModal
        open={isCreateNewDataBaseModalOpen}
        onClose={handleCreateNewDataBaseCloseModal}
        onConfirm={handleCreateNewDataBaseConfirm}
        title="Create a New Namespace"
      >
        <CreateNewDataBase />
      </CustomModal>

      {/* Custom Modal for Connecting Existing Database */}
      <CustomModal
        open={isConnectExistingDatabaseModalOpen}
        onClose={handleConnectExistingDatabaseCloseModal}
        onConfirm={handleConnectExistingDatabaseConfirm}
        title="Connect to an Existing Database"
      >
        <ConnectExistingDatabase />
      </CustomModal>
    </div>
  );
};

export default Settings;
