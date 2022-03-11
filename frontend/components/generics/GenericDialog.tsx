import React from "react";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import DialogContent from "@mui/material/DialogContent";
import { GenericDialogTitle } from "./GenericDialogTitle";
import { TransitionProps } from "@mui/material/transitions";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface GenericDialogProps {
  open: boolean;
  handleClose: () => void;
  modalTitle: React.ReactNode;
  children: JSX.Element;
  Transition?: React.ForwardRefExoticComponent<
    TransitionProps & {
      children: React.ReactElement<any, any>;
    } & React.RefAttributes<unknown>
  >;
  dialogActions: JSX.Element;
}

export default function GenericDialog(props: GenericDialogProps) {
  const { open, handleClose, modalTitle, children, Transition, dialogActions } =
    props;
    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <BootstrapDialog
    fullScreen={fullScreen}
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <GenericDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {modalTitle}
      </GenericDialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      {dialogActions}
    </BootstrapDialog>
  );
}
