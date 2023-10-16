import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    if (typeof props.onAgree === "function") {
      props.onAgree(); // Call the provided onAgree function
    }
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Request Confirmation
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="Confirm change Request"
      >
        <DialogTitle>{props.DialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Frequent Room Change is not entertained, Contact your Parents before
            Changing rooms, only a few number of room changes will be provided,
            Provide with the accurate reason for leaving the room. If wrong
            information is given, an inquiry will be held, and actions will be taken. Do you agree with the terms and conditions?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button value={open} onClick={handleClose}>
            Disagree
          </Button>
          <Button value={open} onClick={handleAgree}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
