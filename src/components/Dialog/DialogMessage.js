import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const DialogMessage = (props) => {
  return(
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="dialog-message-title"
        aria-describedby="dialog-message-description"
      >
         <DialogTitle id="dialog-message-title" sx = {{fontFamily: 'headerFont', fontWeight: 900, color: 'custom.darkgrey'}}>
          {props.messageTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-message-description" sx = {{fontFamily: 'bodyFont', fontWeight: 400, color: 'custom.darkgrey'}}>
            {props.message}
          </DialogContentText>
          <DialogContentText id="dialog-message-description" sx = {{fontFamily: 'bodyFont', fontWeight: 400, color: 'custom.darkgrey'}}>
            Click OK to continue.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick = {props.handleClose} variant = 'contained'>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogMessage;
