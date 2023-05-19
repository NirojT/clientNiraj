import { create } from "zustand";
import { INoticeData, INoticeDataError } from "./interface";
import { axios_auth, axios_file_with_auth } from "../../../global/config";

export const useNoticesStore = create((set) => ({
    notices: [],
    noticeData: {
        title: "",
        description: "",
        noticeDate: new Date().toISOString().substring(0, 16),
        file: "",
    },
    updateNoticeData: {},
    noticeDataError: {
        title: "",
        description: "",
        noticeDate: "",
        file: "",
    },
    setNoticeData: (data: INoticeData) => {
        set((state: any) => ({
            noticeData: {
                ...state.noticeData,
                ...data
            }
        }))
    },
    setUpdateNoticeData: (data: INoticeData) => {
        set((state: any) => ({
            updateNoticeData: { ...data }
        }))
    },
    setNoticeDataError: (data: INoticeDataError) => {
        set((state: any) => ({
            noticeDataError: {
                ...state.noticeDataError,
                ...data
            }
        }))
    },
    addNotice: async (data: INoticeData) => {
        try {
            let res = await axios_file_with_auth.post('notice/create', data);
            if (res.data.status === 200) return true;
            return false;
        } catch (error) {
            return false;
        }
    },
    getNotices: async () => {
        try {
            let res = await axios_auth.get('notice/get-all');
            if (res.data.status === 200) {
                set((state: any) => ({
                    notices: res.data.notices
                }))
            }
        } catch (error) {
            return null
        }
    },
    deleteNotice: async (id: number | string | undefined) => {
        try {
            let res = await axios_auth.delete(`notice/delete/${id}`);
            if (res.data.status === 200) return true;
            return false;
        } catch (error) {
            return false;
        }
    },
    updateNotice: async (id: number | string | undefined, data: INoticeData) => {
        try {
            let res = await axios_file_with_auth.put(`notice/update/${id}`, data);
            if (res.data.status === 200) return true;
            return false;
        } catch (error) {
            return false;
        }
    },
    getNoticeById: async (id: number | string | undefined) => {
        try {
            let res = await axios_auth.get(`notice/get/${id}`);
            if (res.data.status === 200) {
                set((state: any) => ({
                    noticeData: {
                        ...state.noticeData,
                        ...res.data.notice,
                    }
                }))
            }
        } catch (error) {
        }
    },
    setActive: async (id: number | string | undefined) => {
        try {
            let res = await axios_auth.patch(`notice/active/${id}`);
            if (res.data.status === 200) return true;
            return false;
        } catch (error) {
            return false;
        }
    }
}));