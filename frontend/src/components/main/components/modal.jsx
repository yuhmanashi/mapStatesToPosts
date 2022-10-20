import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField, Button } from "@mui/material";

import LoginFormContainer from '../../session/login_form_container';
import SignUpForm1Container from '../../session/signup_form_container';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      
      <Button onClick={handleOpen} variant="contained" sx={{ margin: "0.5em 1.5em",
                width: 350
              }}>Signup Instead</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="child-modal-title">Sign up Form</h2>
          <p id="child-modal-description">
            <SignUpForm1Container/>
          </p>
          <Button onClick={handleClose}>Return to Log in</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="modal-button">
      <Button onClick={handleOpen} 
      
              sx={{
                  backgroundColor: 'rgb(68,180,204)',
                  '&:hover': {
                    backgroundColor:'rgba(15,45,48,255)',
                    color: 'white'
                  }
                }}
                variant="outlined"
                disableElevation  
                >Login / Sign Up</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Log in Form</h2>
          <p id="parent-modal-description">
            <LoginFormContainer/>
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}