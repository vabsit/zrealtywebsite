import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Box,
  DialogProps
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
  secondaryHeader?: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: DialogProps["maxWidth"];
  minHeight?: string;
  hideBackdrop?: boolean;
  hideDivider?: boolean;
  disableCloseButton?: boolean;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  title,
  children,
  secondaryHeader,
  actions,
  maxWidth = "lg",
  minHeight = "20vh",
  hideBackdrop = false,
  hideDivider = false,
  disableCloseButton = false
}) => {
  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        // Only close if not clicking backdrop or backdrop click is allowed
        if (reason !== 'backdropClick') {
          onClose();
        }
      }}
      maxWidth={maxWidth}
      fullWidth
      hideBackdrop={hideBackdrop}
      aria-labelledby="dialog-title"
      sx={{ minHeight }}
    >
      <Box 
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <DialogTitle id="dialog-title" sx={{ p: 0 }}>
            {title}
          </DialogTitle>
          {secondaryHeader}
        </Box>
        
        {!disableCloseButton && (
          <IconButton sx={{p:0}} onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <DialogContent dividers={!hideDivider}>
        {children}
      </DialogContent>

      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};

export default CustomDialog;