import React from 'react'
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { ExtendButtonBase, ButtonTypeMap} from '@mui/material';
import { GenericDialogTitle } from './GenericDialogTitle';
import { TransitionProps } from '@mui/material/transitions';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  })); 

interface GenericDialogProps {
    open: boolean,
    handleClose: () => void,
    modalTitle: React.ReactNode,
    contentChildren: JSX.Element, 
    Transition: React.ForwardRefExoticComponent<TransitionProps & {
      children: React.ReactElement<any, any>;
  } & React.RefAttributes<unknown>>
}

export default function GenericDialog(props: GenericDialogProps) {
    const {open, handleClose, modalTitle, contentChildren, Transition} = props;

  return ( 
  <BootstrapDialog
    TransitionComponent={Transition}
    onClose={handleClose}
    aria-labelledby="customized-dialog-title"
    open={open}
  >
    <GenericDialogTitle id="customized-dialog-title" onClose={handleClose}>
      {modalTitle}
    </GenericDialogTitle>
    <DialogContent dividers>
      {contentChildren}
    </DialogContent>
    <DialogActions> 
      <Button autoFocus onClick={handleClose}>
        Save changes
      </Button>  
    </DialogActions>
  </BootstrapDialog>
  )
}
