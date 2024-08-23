import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./CustomModal.css"; // Import the CSS file

const CustomModal = ({ open, onClose, onConfirm, children, title }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="custom-modal">
        {/* Modal Header */}
        <Box className="custom-modal-header">
          <Typography variant="h6">{title}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Modal Content */}
        <Box className="custom-modal-content">{children}</Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
