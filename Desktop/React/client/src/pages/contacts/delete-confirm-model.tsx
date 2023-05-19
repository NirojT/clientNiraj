import React, { useMemo, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Divider,
  CircularProgress,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { AiOutlineDelete } from "react-icons/ai";
import { TiWarningOutline } from "react-icons/ti";

import { ContactClass } from "./helper";
import { useContactsStore } from "./store";
import { DeleteModalProps } from "./interface";
import { IToasterData } from "../../global/itoaster";
import Toaster from "../../global/toaster";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteConfirmModel({
  openDelete,
  setOpenDelete,
  data,
  setData,
}: DeleteModalProps) {
  // class
  const contactClass = useMemo(() => new ContactClass(), []);
  // store
  const deleteContact = useContactsStore((state: any) => state.deleteContact);
  const getContacts = useContactsStore((state: any) => state.getContacts);
  // states
  const [deleting, setDeleting] = useState(false);
  // toaster states
  const [toasterData, setToasterData] = useState<IToasterData>({
    open: false,
    message: "",
    severity: undefined,
  });
  // Close Toaster
  const closeToaster = (value: boolean) => {
    setToasterData({
      open: value,
      message: null,
      severity: undefined,
    });
  };
  // handlers
  // closes the modal
  const handleClose = () => {
    setOpenDelete(false);
  };
  // handles delete click
  const handleDelete = () => {
    setDeleting(true);
    if (data?.id)
      contactClass.deleteContact(
        data?.id,
        deleteContact,
        setDeleting,
        setToasterData,
        setOpenDelete,
        setData,
        getContacts
      );
  };
  return (
    <div>
      <Toaster data={toasterData} close={closeToaster} />
      <Dialog
        open={openDelete}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>
          <div
            className="flex items-center gap-x-[.2rem] cursor-pointer w-fit"
            title={`Delete ${data?.title}`}
          >
            <TiWarningOutline className="text-[red]/70 text-[1.5rem] " />
            <p className="text-[1.2rem] font-semibold text-[red]/70 tracking-wider">
              Delete
            </p>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <span className="text-[#2e2e2e] text-[1.1rem] leading-[1rem]">
              You sure, you want to delete
              <span className="ml-1 underline capitalize cursor-pointer">
                {data?.title}
              </span>
              ?
            </span>
            <br />
            <span className="">
              <span className="underline capitalize">{data?.title}</span> will
              be deleted permanently
            </span>
          </DialogContentText>
        </DialogContent>
        <Divider className="mb-3" />
        <DialogActions>
          <div className="flex pr-5 mb-3 gap-x-5">
            <button
              className="border text-[.9rem] md:text-[1rem] px-[1.5em] py-2 md:py-3 rounded-sm font-semibold 
           text-[#efefef] hover:bg-red-400 hover:shadow-md bg-red-500 w-[7.5em]"
              onClick={handleDelete}
            >
              {deleting ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <div className="flex items-center gap-x-1">
                  <AiOutlineDelete className="text-[1.2rem] md:text-[1.3rem]" />
                  <span>Delete</span>
                </div>
              )}
            </button>
            <button
              className="border text-[.9rem] md:text-[1rem] px-[1.5em] py-2 md:py-3 rounded-sm font-semibold 
           text-[#595959] hover:text-[#2e2e2e] hover:shadow-md flex items-center gap-x-1"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
