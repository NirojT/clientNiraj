export interface INoticeData {
  title: string;
  description: string;
  noticeDate?: string;
  file: string | null | undefined;
}

export interface INoticeDataError {
  title: string;
  description: string;
  noticeDate?: string;
  file?: string;
}

export interface INoticeDetail {
  id?: number;
  _id?: string;
  title: string;
  description: string;
  date: string;
  file: string;
  imageName: string;
  is_active?: boolean;
  mainUser: null;
  noticeDate: string;
  isActive?: boolean;
}

export interface DeleteModalProps {
  openDelete: boolean;
  setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>;
  data: INoticeDetail;
  setData: React.Dispatch<React.SetStateAction<INoticeDetail>>;
}
