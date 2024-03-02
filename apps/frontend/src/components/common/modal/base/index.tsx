import { memo, PropsWithChildren } from "react";
// components
import { Box, IconButton, Modal, SxProps } from "@mui/material";
// icons
import CloseIcon from "@mui/icons-material/Close";

export interface BaseModalProps {
  open: boolean;
  onClose(): void;
  disableBackdropClick?: boolean;
  disablePaperPadding?: boolean;
  additionalSx?: SxProps;
  containerAdditionalSx?: SxProps;
}

function Base({
  open,
  children,
  disableBackdropClick = false,
  containerAdditionalSx,
  additionalSx,
  onClose
}: PropsWithChildren<BaseModalProps>) {
  if (!open) return null;

  return (
    <Modal sx={containerAdditionalSx} open={open} {...(!disableBackdropClick && { onClose })} disableAutoFocus>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <Box
          sx={{
            maxHeight: "90vh",
            maxWidth: "90vw",
            overflow: "auto",
            ...additionalSx
          }}
        >
          {children}
        </Box>
        <IconButton title="Close" sx={{ position: "absolute", right: 0, top: 0, zIndex: 999 }} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Modal>
  );
}

export default memo(Base);
