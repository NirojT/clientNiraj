import { create } from 'zustand';
import { axios_auth } from '../../../../global/config';

export const useViewCourseStore = create((set) => ({
    courses: [],
    getCourses: async () => {
        try {
            let res = await axios_auth.get("/course");
            console.log("🚀 ~ file: store.ts:9 ~ getCourses: ~ res:", res)
        } catch (err) {
            console.log("🚀 ~ file: store.ts:11 ~ getCourses: ~ err", err)
        }
    },
    updateCourseData: {},
    setUpdateCourseData: (data: any) => {
        set({ updateCourseData: data })
    }
}));