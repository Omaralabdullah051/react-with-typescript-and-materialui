import {Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from "@mui/material";
import { useState } from "react";

const MuiDialog = () => {
    const [open, setOpen] =useState(false);
    return (
        <>
         <Button onClick={() => setOpen(true)}>Open dialog</Button>   
         <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="dialog-title" aria-describedby="dialog-description">
             <DialogTitle sx={{bgcolor: "#000",color:'#efefef'}} id="dialog-title">Submit the test?</DialogTitle>
             <DialogContent sx={{bgcolor: "#000"}}>
                 <DialogContentText id="dialog-description" sx={{color:'#efefef'}}>Are you sure you want to submit the test? You will not able to edit after submitting</DialogContentText>
             </DialogContent>
             <DialogActions sx={{bgcolor: "#000"}}>
                 <Button onClick={() => setOpen(false)}>Cancel</Button>
                 <Button onClick={() => setOpen(false)} autoFocus>Submit</Button>
             </DialogActions>
         </Dialog>
        </>
    );
};

export default MuiDialog;