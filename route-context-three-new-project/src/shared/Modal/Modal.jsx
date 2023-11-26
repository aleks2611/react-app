import * as React from "react";
import Box from "@mui/material/Box";
import MuiModal from "@mui/material/Modal";
import classes from "./Modal.module.scss";

function CustomModal({ children, open = false, handleClose }) {
  return (
    <MuiModal open={open} onClose={handleClose} style={{ zIndex: 2 }}>
      <Box className={classes["modal"]}>{children}</Box>
    </MuiModal>
  );
}
export default CustomModal;
