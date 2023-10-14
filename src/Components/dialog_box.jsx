import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = useState(false);
  const [agreeVal, setAgreeVal] = useState(false); // Initialize agreeVal as false

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    setAgreeVal(true); // Set agreeVal to true when "Agree" button is clicked
    handleClose(); // Close the dialog
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
            Hey hello This is a Filler Contents   
            Hey hello This is a Filler Contents 
            Hey hello This is a Filler Contents 
            Hey hello This is a Filler Contents 
            Hey hello This is a Filler Contents 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button value = {open} onClick={handleClose}>Disagree</Button>
          <Button value = {agreeVal} onClick={handleAgree}>Agree</Button> {/* Call handleAgree when "Agree" is clicked */}
        </DialogActions>
      </Dialog>
      {/* Pass agreeVal as a prop directly */}
      {props.children(agreeVal)}
    </div>
  );
}
