import {create} from 'zustand';
import { axios_no_auth } from '../../../global/config';
import { ILoginData, ILoginDataError } from './interface';
export const loginStore = create((set, get) => ({
    login: false,
    data: {
        username: '',
        password: ''
    },
    data_error: {
        username: '',
        password: ''
    },
    setLogin: (login: boolean) => set({ login }),
    setDataError: (data: ILoginDataError) => {
        set((state: any) => ({
            data_error: {
                ...state.data_error,
                ...data
            }
        }));
    },
    setData: (data: ILoginData) => set((state: any) => ({
        data: {
            ...state.data,
            ...data
        }
    })),
    signIn: async (data: ILoginData) => {
        try {
            let res = await axios_no_auth.post('user/login', data)
            if (res.data.status === 200) {
                localStorage.setItem('token', res.data.token);
                return true;
            }
            return false;
        } catch (err) {
            return false;
        }
    }
}));