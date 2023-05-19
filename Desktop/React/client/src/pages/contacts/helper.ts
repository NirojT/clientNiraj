import { IToasterData } from "../../global/itoaster";
import { IContactDetails } from "./interface";

export class ContactClass {
  deleteContact = (
    id: number | string | number,
    deleteContact: any,
    setDeleting: React.Dispatch<React.SetStateAction<boolean>>,
    setToasterData: React.Dispatch<React.SetStateAction<IToasterData>>,
    setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>,
    setData: React.Dispatch<React.SetStateAction<IContactDetails>>,
    getContacts: any
  ) => {
    deleteContact(id)
      .then((res: boolean) => {
        setDeleting(false);
        if (res) {
          console.log(res);
          setToasterData({
            open: true,
            message: "Contact deleted successfully",
            severity: "success",
          });
          setOpenDelete(false);
          setData({} as IContactDetails);
          getContacts();
        } else {
          setToasterData({
            open: true,
            message: "Something went wrong",
            severity: "error",
          });
        }
      })
      .catch(() => {
        setDeleting(false);
        setToasterData({
          open: true,
          message: "Something went wrong",
          severity: "error",
        });
      });
  };
}
