import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  IconButton,
  Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "../CommonButton/CustomButton";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  isLoading?: boolean;
  isDelete?: boolean;
}

const CustomConformDialog: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  message,
  confirmText = "Yes",
  cancelText = "Cancel",
  onConfirm,
  isLoading = false,
  isDelete = false
}) => {
  const handleConfirm = () => {
    onConfirm?.();
  };

  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        // Only close if not clicking backdrop or backdrop click is allowed
        if (reason !== 'backdropClick') {
          onClose();
        }
      }}
      aria-labelledby="modal-title"
      maxWidth="sm"
      fullWidth
    >
      <Box sx={{ position: "relative" }}>
        <DialogTitle sx={{ padding: 2 }} id="modal-title">
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
          
        </IconButton>
      </Box>

      <DialogContent sx={{ padding: 2 }}>
        <Box display="flex" alignItems="center" gap={3}>
          {/* Replace FeatherIcon with your actual icon component */}
          <Box>ℹ️</Box>
          <Typography variant="body1">{message}</Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ padding: 2 }}>
        <CustomButton
          variant="outlined"
          onClick={onClose}
          disabled={isLoading}
          name={cancelText}
        />
        <CustomButton
          variant="contained"
          onClick={handleConfirm}
          disabled={isLoading}
          name={confirmText}
          color={isDelete ? "error" : "primary"}
        />
      </DialogActions>
    </Dialog>
  );
};

export default CustomConformDialog;