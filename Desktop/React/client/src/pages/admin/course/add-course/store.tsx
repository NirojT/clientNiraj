import { create } from "zustand";
import { ICourseData } from "./interface";
import { axios_auth } from "../../../../global/config";

export const useAddCourseStore = create((set) => ({
  courseData: {
    title: "",
    description: "",
    tagline: "",
    criteria: "",
    duration: "",
  },
  setCourseData: (data: any) =>
    set((state: any) => ({
      courseData: {
        ...state.courseData,
        ...data,
      },
    })),
  resetCourseDate: () => {
    set((state: any) => ({
      courseData: {
        ...state.courseData,
        title: "",
        description: "",
        tagline: "",
        criteria: "",
        duration: "",
      },
    }));
  },
  courseDataError: {
    title: "",
    description: "",
    tagline: "",
    criteria: "",
    duration: "",
  },
  setCourseDataError: (data: any) =>
    set((state: any) => ({
      courseDataError: {
        ...state.courseDataError,
        ...data,
      },
    })),
  resetCourseDataError: () => {
    set((state: any) => ({
      courseDataError: {
        ...state.courseDataError,
        title: "",
        description: "",
        tagline: "",
        criteria: "",
        duration: "",
      },
    }));
  },
  addCourse: async (data: ICourseData) => {
    try {
      let res = await axios_auth.post("course/create", data);
      if (res.data.status == 200) return true;
      else return false;
    } catch (err) {
      return false;
    }
  },
}));
