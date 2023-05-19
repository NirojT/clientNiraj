import React, { useState } from "react";
import { adminLayoutStore } from "../layout/store";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiMessageSquareEdit } from "react-icons/bi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../../global/config";
import { useEventStore } from "./store";
import { IEventDataDetail } from "./interface";
import DeleteConfirmModel from "./components/delete-confirm-model";
const Notice = () => {
  const navigate = useNavigate();
  // store
  const setActiveUrl = adminLayoutStore((state: any) => state.setActiveUrl);
  const getEvents = useEventStore((state: any) => state.getEvents);
  const setUpdateEventData = useEventStore(
    (state: any) => state.setUpdateEventData
  );
  const events: IEventDataDetail[] = useEventStore(
    (state: any) => state.events
  );
  // states
  // delete notice states
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteEvent, setDeleteEvent] = useState<IEventDataDetail>(
    {} as IEventDataDetail
  );
  // handlers
  const deleteClick = (data: IEventDataDetail) => {
    setOpenDelete(true);
    setDeleteEvent(data);
  };
  const updateClick = (data: IEventDataDetail) => {
    setUpdateEventData(data);
    navigate(`/admin/update-event/${data.id}`);
  };
  React.useEffect(() => {
    setActiveUrl(window.location.pathname);
  }, [setActiveUrl]);
  // fetching notices from server
  React.useEffect(() => {
    getEvents();
  }, [getEvents]);
  return (
    <>
      <div className="">
        <p className="mt-3 ml-5 text-[1.05rem] sm:text-[1.2rem] font-semibold">
          Events
        </p>
        <div className="">
          <div className="flex justify-end pr-[2em]">
            <button
              className="border text-[.9rem] md:text-[1rem] px-[1.5em] py-2 md:py-3 rounded-sm font-semibold 
           text-[#595959] hover:text-[#2e2e2e] hover:shadow-md flex items-center gap-x-1"
              onClick={() => {
                navigate("/admin/add-events");
              }}
            >
              <IoMdAdd className="text-[1.1rem]" />
              <span>Add</span>
            </button>
          </div>
          <div className="px-3">
            <table className="w-full mt-4">
              <thead>
                <tr>
                  <th className="border px-2 md:px-4 py-2 text-[.9rem] sm:text-[1rem]">
                    SN
                  </th>
                  <th className="border px-4 py-2 text-[.9rem] sm:text-[1rem]">
                    Title
                  </th>
                  <th className="border px-4 py-2 text-[.9rem] sm:text-[1rem]">
                    Description
                  </th>
                  <th className="border px-4 py-2 text-[.9rem] sm:text-[1rem]">
                    Date
                  </th>
                  <th className="border px-4 py-2 hidden md:block text-[.9rem] sm:text-[1rem]">
                    Image
                  </th>
                  <th className="border px-4 py-2 text-[.9rem] sm:text-[1rem]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {events?.length > 0 ? (
                  events.map((event: IEventDataDetail, index: number) => (
                    <tr key={event.id}>
                      <td className="px-4 border">{index + 1}</td>
                      <td className="px-4 border">{event.title}</td>
                      <td className="px-3 border">
                        {event?.description?.substring(0, 20)}...
                      </td>
                      <td className="px-4 border">
                        <div className="flex items-baseline gap-x-1">
                          <p className="text-[.9rem]">
                            {`${event.eventDate?.split("T")[0]} `}
                            <span className="text-[.8rem]">
                              {event?.eventDate?.split("T")?.[1]}
                            </span>
                          </p>
                        </div>
                      </td>
                      <td className="hidden px-4 py-1 border md:block">
                        <a
                          href={`${imageUrl}${event.imageName?.substring(22)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center decoration-none"
                        >
                          <Avatar
                            src={`${imageUrl}${event.imageName?.substring(22)}`}
                            alt="image"
                            className="h-[1.95em]"
                            variant="square"
                          />
                        </a>
                      </td>
                      <td className="px-4 py-2 border">
                        <div className="flex items-center justify-center gap-x-1">
                          <HiOutlineInformationCircle
                            className="text-[1.25rem] cursor-pointer text-blue-700/80"
                            title={`view ${event.title}`}
                          />
                          <RiDeleteBin6Line
                            className="text-[red]/70 text-[1.2rem] cursor-pointer"
                            title={`delete ${event.title}`}
                            onClick={() => deleteClick(event)}
                          />
                          <BiMessageSquareEdit
                            className="text-[1.2rem] cursor-pointer text-green-700/80"
                            title={`update ${event.title}`}
                            onClick={() => updateClick(event)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="">
                    <td
                      colSpan={6}
                      className="border px-4 text-[.9rem] sm:text-[1rem] text-center font-semibold py-4 "
                    >
                      No events found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {Object.keys(deleteEvent).length > 0 && (
        <DeleteConfirmModel
          openDelete={openDelete}
          setOpenDelete={setOpenDelete}
          data={deleteEvent}
          setData={setDeleteEvent}
        />
      )}
    </>
  );
};

export default Notice;
