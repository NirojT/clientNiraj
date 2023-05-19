import { IToasterData } from "../../../../global/itoaster";
import { ICourseData, ICourseDataError } from "./interface";

export class AddCourseClass {
  validateAddData = (data: ICourseData) => {
    let errors: ICourseDataError = {} as ICourseDataError;
    if (!data.title) errors.title = "title is required";
    if (!data.description) errors.description = "description is required";
    if (!data.tagline) errors.tagline = "tagline is required";
    if (!data.criteria) errors.criteria = "criteria is required";
    if (!data.duration) errors.duration = "duration is required";
    return errors;
  };
  addCourse = (
    data: ICourseData,
    addCourse: any,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToasterData: React.Dispatch<React.SetStateAction<IToasterData>>,
    resetData: any,
    setDataError: any
  ) => {
    let errors = this.validateAddData(data);
    if (Object.keys(errors).length === 0) {
      addCourse(data)
        .then((res: any) => {
          setLoading(false);
          if (res) {
            setToasterData({
              open: true,
              message: "course added successfully",
              severity: "success",
            });
            resetData();
            return
          }
          setToasterData({
            open: true,
            message: "course not added",
            severity: "error",
          });
          return;
        })
        .catch((err: any) => {
          setLoading(false);
          setToasterData({
            open: true,
            message: "something went wrong",
            severity: "error",
          })
          return;
        });
    } else {
      setDataError(errors);
      setLoading(false);
      setToasterData({
        open: true,
        message: "please fill all the fields",
        severity: "error",
      });
      return;
    }
  };


}