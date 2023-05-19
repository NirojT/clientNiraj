//for contactDetails
export interface IContactDetails {
  id?: number;
  title: string;
  content: string;
  email: string;
  phoneNo: string;
}
export interface IContactData {
  title: string;
  content: string;
  email: string;
  phoneNo: string;
}
export interface DeleteModalProps {
  openDelete: boolean;
  setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>;
  data: IContactDetails;
  setData: React.Dispatch<React.SetStateAction<IContactDetails>>;
}
