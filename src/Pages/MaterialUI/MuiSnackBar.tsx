import React, {useState, forwardRef} from 'react';
import { Snackbar,Button, Alert, AlertProps } from '@mui/material';

const SnackbartAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props,ref) {
        return <Alert elevation={6} ref={ref} {...props} />
    }
)

const MuiSnackBar = () => {
    const [open, setOpen] = useState(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if(reason === 'clickway'){
            return;
        }
        setOpen(false);
    }

    return (
        <>
          <Button onClick={() => setOpen(true)}>Submit</Button>
          {/* <Snackbar message="Form submitted successfilly" autoHideDuration={2000} open={open} onClose={handleClose} anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
          }}/>    */}

          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
              vertical: 'top',
              horizontal: 'center'}}>
              <SnackbartAlert onClose={handleClose} severity="success">
                  Form submitted successfully
              </SnackbartAlert>
          </Snackbar>
        </>
    );
};

export default MuiSnackBar;