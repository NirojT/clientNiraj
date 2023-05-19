import { CircularProgress, IconButton } from "@mui/material";
import React, { useMemo, useState } from "react";
import { TbListDetails } from "react-icons/tb";
import { BsImageAlt } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { adminLayoutStore } from "../../layout/store";
import { AddCourseClass } from "./helper";
import { ICourseData, ICourseDataError } from "./interface";
import { useAddCourseStore } from "./store";
import { IToasterData } from "../../../../global/itoaster";
import Toaster from "../../../../global/toaster";
const AddCourse = () => {
  // class
  const eventClass = useMemo(() => new AddCourseClass(), []);
  // store
  const setActiveUrl = adminLayoutStore((state: any) => state.setActiveUrl);
  const data: ICourseData = useAddCourseStore((state: any) => state.courseData);
  const setData = useAddCourseStore((state: any) => state.setCourseData);
  const resetData = useAddCourseStore((state: any) => state.resetCourseDate);

  const setDataError = useAddCourseStore(
    (state: any) => state.setCourseDataError
  );
  const dataError: ICourseDataError = useAddCourseStore(
    (state: any) => state.courseDataError
  );
  const addCourse = useAddCourseStore((state: any) => state.addCourse);
  // states
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
  // handler
  // handles the increment on height of text area
  function handleCriteriaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setData({ ...data, criteria: event.target.value });
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  }
  function handleTaglineChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setData({ ...data, tagline: event.target.value });
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  }
  function handleDescriptionChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setData({ ...data, description: event.target.value });
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  }
  React.useEffect(() => {
    setActiveUrl("/admin/course");
  }, [setActiveUrl]);
  // add handler
  const handleSubmitClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);
    eventClass.addCourse(
      data,
      addCourse,
      setLoading,
      setToasterData,
      resetData,
      setDataError
    );
  };
  return (
    <>
      <Toaster data={toasterData} close={closeToaster} />
      <div className="">
        <div className="">
          <div className="flex justify-between items-center pr-[2em]">
            <p className="mt-3 ml-5 text-[1.05rem] sm:text-[1.2rem] font-semibold">
              Courses
            </p>
            <button
              className="border text-[.9rem] md:text-[1rem] px-[1.5em] py-2 md:py-3 rounded-sm font-semibold 
           text-[#595959] hover:text-[#2e2e2e] hover:shadow-md flex items-center gap-x-1 mt-5"
              onClick={() => navigate("/admin/events")}
            >
              <TbListDetails className="text-[1.1rem]" />
              <span>View</span>
            </button>
          </div>
          <div className="px-[1.2rem] sm:px-[1.5rem] w-full">
            <form
              id="form"
              className="mt-4 w-[100%] sm:w-[70%] md:w-[30em] lg:w-[35em] border border-[#b5b2b2] p-[1em] px-[1.5em] hover:shadow-lg"
            >
              <p className="mt-3 text-[1.05rem] sm:text-[1.2rem] font-semibold underline mb-2 text-[#585858]">
                Add Course
              </p>
              <div className="flex flex-col gap-y-3">
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="title"
                    className="text-[.9rem] md:text-[1.02rem] font-[500]"
                  >
                    Title<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={data.title}
                    onChange={(e) => setData({ title: e.target.value })}
                    placeholder="Enter title: @Entrance Examination"
                    className="border-[1px] border-[#595959] rounded-sm px-2 py-[.5em] focus:outline-none focus:border-[#2e2e2e]"
                    onKeyUp={() => {
                      if (data.title) setDataError({ title: "" });
                    }}
                  />
                  {dataError.title && (
                    <p className="text-red-500 text-[.8rem]">
                      {dataError.title}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="duration"
                    className="text-[.9rem] md:text-[1.02rem] font-[500]"
                  >
                    Duration<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="duration"
                    id="duration"
                    value={data.duration}
                    onChange={(e) => setData({ duration: e.target.value })}
                    placeholder="Enter duration: @Entrance Examination"
                    className="border-[1px] border-[#595959] rounded-sm px-2 py-[.5em] focus:outline-none focus:border-[#2e2e2e]"
                    onKeyUp={() => {
                      if (data.duration) setDataError({ duration: "" });
                    }}
                  />
                  {dataError.duration && (
                    <p className="text-red-500 text-[.8rem]">
                      duration is required
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="criteria"
                    className="text-[.9rem] md:text-[1.02rem] font-[500]"
                  >
                    Eligibility Criteria<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="criteria"
                    id="criteria"
                    value={data.criteria}
                    onChange={(e) => handleCriteriaChange(e)}
                    placeholder="Enter criteria"
                    style={{ resize: "none", overflow: "hidden" }}
                    className="border-[1px] h-auto border-[#595959] rounded-sm px-2 py-[.5em] focus:outline-none focus:border-[#2e2e2e]"
                    onKeyUp={() => {
                      if (data.criteria) setDataError({ criteria: "" });
                    }}
                  />
                  {dataError.criteria && (
                    <p className="text-red-500 text-[.8rem]">
                      criteria is required
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="title"
                    className="text-[.9rem] md:text-[1.02rem] font-[500]"
                  >
                    Tagline<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="tagline"
                    id="tagline"
                    value={data.tagline}
                    onChange={(e) => handleTaglineChange(e)}
                    placeholder="Enter tagline"
                    style={{ resize: "none", overflow: "hidden" }}
                    className="border-[1px] h-auto border-[#595959] rounded-sm px-2 py-[.5em] focus:outline-none focus:border-[#2e2e2e]"
                    onKeyUp={() => {
                      if (data.tagline) setDataError({ tagline: "" });
                    }}
                  />
                  {dataError.tagline && (
                    <p className="text-red-500 text-[.8rem]">
                      tagline is required
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="title"
                    className="text-[.9rem] md:text-[1.02rem] font-[500]"
                  >
                    Description<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    value={data.description}
                    onChange={(e) => handleDescriptionChange(e)}
                    placeholder="Enter description"
                    style={{ resize: "none", overflow: "hidden" }}
                    className="border-[1px] h-auto border-[#595959] rounded-sm px-2 py-[.5em] focus:outline-none focus:border-[#2e2e2e]"
                    onKeyUp={() => {
                      if (data.description) setDataError({ description: "" });
                    }}
                  />
                  {dataError.description && (
                    <p className="text-red-500 text-[.8rem]">
                      description is required
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="border border-[#b5b2b2] text-[.9rem] md:text-[1rem] px-[1.5em] py-2 md:py-3 rounded-sm font-semibold text-[#595959] hover:text-[#2e2e2e] hover:shadow-sm flex justify-center gap-x-1 mt-5 w-full mb-5"
                onClick={(e) => {
                  handleSubmitClick(e);
                }}
              >
                {loading ? (
                  <CircularProgress size={24} />
                ) : (
                  <span className="uppercase">Submit</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
