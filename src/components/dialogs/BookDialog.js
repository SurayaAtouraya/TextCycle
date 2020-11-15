
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const BookDialog = (props) => {
    return (
        <div >
        <Dialog open={props.bookDialogIsOpen} onClose={props.closeBookDialog} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{props.bookData.name}</DialogTitle>
                <DialogContent>
                    <h1>test</h1>
                </DialogContent>
            {/* <DialogActions>
            </DialogActions> */}
        </Dialog>
        </div>
    );
    }

export default BookDialog;