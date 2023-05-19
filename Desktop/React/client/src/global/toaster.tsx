import * as React from "react";
import { Snackbar } from "@mui/material";
import Slide, { SlideProps } from "@mui/material/Slide";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { IToaster } from "./itoaster";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}
type TransitionProps = Omit<SlideProps, "direction">;

const Toaster = ({ data, close }: IToaster) => {
  const handleClose = () => {
    close(false);
  };
  return (
    <div>
      <Snackbar
        open={data?.open}
        onClose={handleClose}
        autoHideDuration={3000}
        sx={{
          display: data?.open ? "block" : "none",
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        TransitionComponent={TransitionUp}
        message="I love snacks"
        key={TransitionUp ? TransitionUp.name : ""}
      >
        <Alert onClose={handleClose} severity={data?.severity}>
          {data?.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Toaster;
