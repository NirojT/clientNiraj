import { CircularProgress, IconButton } from "@mui/material";
import React, { useMemo, useState } from "react";
import { TbListDetails } from "react-icons/tb";
import { BsImageAlt } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { adminLayoutStore } from "../layout/store";
import { IToasterData } from "../../../global/itoaster";
import Toaster from "../../../global/toaster";
import { IEventData, IEventDataError } from "./interface";
import { useEventStore } from "./store";
import { EventClass } from "./helper";
const AddEvent = () => {
  // class
    const eventClass = useMemo(() => new EventClass(), []);
  // store
  const setActiveUrl = adminLayoutStore((state: any) => state.setActiveUrl);
  const eventData: IEventData = useEventStore((state: any) => state.eventData);
  const setEventData = useEventStore((state: any) => state.setEventData);
  const setEventDataError = useEventStore(
    (state: any) => state.setEventDataError
  );
  const eventDataError: IEventDataError = useEventStore(
    (state: any) => state.eventDataError
  );
  const addEvent = useEventStore((state: any) => state.addEvent);
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
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEventData({ ...eventData, description: event.target.value });
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  }
  React.useEffect(() => {
    setActiveUrl("/admin/events");
  }, [setActiveUrl]);
  // add handler
  const handleSubmitClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    eventClass.addEvent(
      eventData,
      addEvent,
      setLoading,
      setToasterData,
      setEventData,
      setEventDataError
    );
  };
  return (
    <>
      <Toaster data={toasterData} close={closeToaster} />
      <div className="">
        <div className="">
          <div className="flex justify-between items-center pr-[2em]">
            <p className="mt-3 ml-5 text-[1.05rem] sm:text-[1.2rem] font-semibold">
              Events
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
            <form className="mt-4 w-[100%] sm:w-[70%] md:w-[30em] lg:w-[35em] border border-[#b5b2b2] p-[1em] px-[1.5em] hover:shadow-lg">
              <p className="mt-3 text-[1.05rem] sm:text-[1.2rem] font-semibold underline mb-2 text-[#585858]">
                Add Event
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
                    value={eventData.title}
                    onChange={(e) => setEventData({ title: e.target.value })}
                    placeholder="Enter title: @Entrance Examination"
                    className="border-[1px] border-[#595959] rounded-sm px-2 py-[.5em] focus:outline-none focus:border-[#2e2e2e]"
                    onKeyUp={() => {
                      if (eventData.title) setEventDataError({ title: "" });
                    }}
                  />
                  {eventDataError.title && (
                    <p className="text-red-500 text-[.8rem]">
                      title is required
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="title"
                    className="text-[.9rem] md:text-[1.02rem] font-[500]"
                  >
                    Date-Time<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    name="date-time"
                    id="date-time"
                    value={eventData.eventDate}
                    onChange={(e) => {
                      setEventData({ noticeDate: e.target.value });
                    }}
                    className="border-[1px] border-[#595959] rounded-sm px-2 py-[.5em] focus:outline-none focus:border-[#2e2e2e]"
                  />
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
                    value={eventData.description}
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter description"
                    style={{ resize: "none", overflow: "hidden" }}
                    className="border-[1px] h-auto border-[#595959] rounded-sm px-2 py-[.5em] focus:outline-none focus:border-[#2e2e2e]"
                    onKeyUp={() => {
                      if (eventData.description)
                        setEventDataError({ description: "" });
                    }}
                  />
                  {eventDataError.description && (
                    <p className="text-red-500 text-[.8rem]">
                      description is required
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="title"
                    className="text-[.9rem] md:text-[1.02rem] font-[500]"
                  >
                    Image
                  </label>
                  <div className="border w-fit">
                    <IconButton aria-label="upload picture" component="label">
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={(e) => {
                          setEventData({ file: e.target.files![0] });
                          if (eventData.file) {
                            setEventDataError({ file: "" });
                          }
                        }}
                      />
                      <BsImageAlt />
                    </IconButton>
                  </div>
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

export default AddEvent;
