import { IToasterData } from "../../../global/itoaster";
import { INoticeData, INoticeDataError, INoticeDetail } from "./interface"

export class NoticeClass {
    validateNoticeData = (
        data: INoticeData
    ) => {
        let error: INoticeDataError = {} as INoticeDataError;
        if (!data.title) error.title = 'title is required';
        if (!data.description) error.description = 'description is required';
        return error;
    }
    addNotice = (
        noticeData: INoticeData,
        addNotice: any,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setToasterData: React.Dispatch<React.SetStateAction<IToasterData>>,
        setNoticeData: any,
        setNoticeDataError: any,
    ) => {
        let error = this.validateNoticeData(noticeData);
        if (Object.keys(error).length > 0) {
            setNoticeDataError(error);
            setToasterData({
                open: true,
                message: 'Please fill all the required fields',
                severity: 'warning',
            })
            return;
        }
        setLoading(true);
        addNotice(noticeData).then((res: boolean) => {
            setLoading(false);
            if (res) {
                setToasterData({
                    open: true,
                    message: 'Notice added successfully',
                    severity: 'success',
                });
                setNoticeData({
                    title: '',
                    description: '',
                    noticeDate: '',
                    file: '',
                });
                setNoticeDataError({} as INoticeDataError);
            } else {
                setToasterData({
                    open: true,
                    message: 'Something went wrong',
                    severity: 'error',
                });
            }
        }).catch(() => {
            setLoading(false);
            setToasterData({
                open: true,
                message: 'Something went wrong',
                severity: 'error',
            });
        })
    }
    deleteNotice = (
        id: number | string | number,
        deleteNotice: any,
        setDeleting: React.Dispatch<React.SetStateAction<boolean>>,
        setToasterData: React.Dispatch<React.SetStateAction<IToasterData>>,
        setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>,
        setData: React.Dispatch<React.SetStateAction<INoticeDetail>>,
        getNotices: any
    ) => {
        deleteNotice(id).then((res: boolean) => {
            setDeleting(false);
            if (res) {
                setToasterData({
                    open: true,
                    message: 'Notice deleted successfully',
                    severity: 'success',
                });
                setOpenDelete(false);
                setData({} as INoticeDetail);
                getNotices();
            } else {
                setToasterData({
                    open: true,
                    message: 'Something went wrong',
                    severity: 'error',
                });
            }
        }).catch(() => {
            setDeleting(false);
            setToasterData({
                open: true,
                message: 'Something went wrong',
                severity: 'error',
            });
        })
    }
    updateNotice = (
        id: string | undefined,
        data: INoticeData,
        updateNotice: any,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setToasterData: React.Dispatch<React.SetStateAction<IToasterData>>,
        setNoticeData: any,
        setNoticeDataError: any
    ) => {
        let error = this.validateNoticeData(data);
        if (Object.keys(error).length > 0) {
            setNoticeDataError(error);
            setToasterData({
                open: true,
                message: 'Please fill all the required fields',
                severity: 'warning',
            })
            return;
        }
        updateNotice(id, data)
            .then((res: boolean) => {
                setLoading(false);
                if (res) {
                    setToasterData({
                        open: true,
                        message: 'notice updated successfully',
                        severity: 'success'
                    });
                    setNoticeData({
                        title: '',
                        description: '',
                        noticeDate: new Date().toISOString().substring(0, 16),
                        file: '',
                    });
                    setNoticeDataError({} as INoticeDataError);
                } else {
                    setToasterData({
                        open: true,
                        message: 'Something went wrong',
                        severity: 'error',
                    });
                }
            }).catch((error: any) => {
                setLoading(false);
                setToasterData({
                    open: true,
                    message: 'Something went wrong',
                    severity: 'error',
                });
            })
    }
    setActive = (
        id: number | string | undefined,
        setActive: any,
        setToasterData: React.Dispatch<React.SetStateAction<IToasterData>>,
        getNotices: any
    ) => {
        setActive(id).then((res: boolean) => {
            if (res) {
                setToasterData({
                    open: true,
                    message: 'Notice status updated successfully',
                    severity: 'success',
                });
                getNotices();
            } else {
                setToasterData({
                    open: true,
                    message: 'Something went wrong',
                    severity: 'error',
                });
            }
        }).catch(() => {
            setToasterData({
                open: true,
                message: 'Something went wrong',
                severity: 'error',
            });
        })
    }
}