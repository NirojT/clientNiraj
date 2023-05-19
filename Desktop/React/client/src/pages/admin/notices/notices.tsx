import React, { useState, useMemo } from "react";
import { adminLayoutStore } from "../layout/store";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiMessageSquareEdit } from "react-icons/bi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useNoticesStore } from "./store";
import { INoticeDetail } from "./interface";
import { imageUrl } from "../../../global/config";
import DeleteConfirmModel from "./components/delete-confirm-model";
import { NoticeClass } from "./helper";
import { IToasterData } from "../../../global/itoaster";
import Toaster from "../../../global/toaster";
const Notice = () => {
  // class
  const noticeClass = useMemo(() => new NoticeClass(), []);
  // store
  const setActiveUrl = adminLayoutStore((state: any) => state.setActiveUrl);
  const getNotices = useNoticesStore((state: any) => state.getNotices);
  const setActive = useNoticesStore((state: any) => state.setActive);
  const setUpdateNoticeData = useNoticesStore(
    (state: any) => state.setUpdateNoticeData
  );
  const notices: INoticeDetail[] = useNoticesStore(
    (state: any) => state.notices
  );

  // states
  const navigate = useNavigate();
  // delete notice states
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteNotice, setDeleteNotice] = useState<INoticeDetail>(
    {} as INoticeDetail
  );
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
  const deleteClick = (data: INoticeDetail) => {
    setOpenDelete(true);
    setDeleteNotice(data);
  };
  const updateClick = (data: INoticeDetail) => {
    setUpdateNoticeData(data);
    navigate(`/admin/update-notice/${data.id}`);
  };
  const setNoticeActive = (id: number | string | undefined) => {
    noticeClass.setActive(id, setActive, setToasterData, getNotices);
  };

  React.useEffect(() => {
    setActiveUrl(window.location.pathname);
  }, [setActiveUrl]);
  // fetching notices from server
  React.useEffect(() => {
    getNotices();
  }, [getNotices]);
  return (
    <>
      <Toaster data={toasterData} close={closeToaster} />
      <div className="">
        <p className="mt-3 ml-5 text-[1.05rem] sm:text-[1.2rem] font-semibold">
          Notices
        </p>
        <div className="">
          <div className="flex justify-end pr-[2em]">
            <button
              className="border text-[.9rem] md:text-[1rem] px-[1.5em] py-2 md:py-3 rounded-sm font-semibold 
           text-[#595959] hover:text-[#2e2e2e] hover:shadow-md flex items-center gap-x-1"
              onClick={() => {
                navigate("/admin/add-notices");
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
                    Status
                  </th>
                  <th className="border px-4 py-2 text-[.9rem] sm:text-[1rem]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {notices.length > 0 ? (
                  notices.map((notice: INoticeDetail, index: number) => (
                    <tr
                      // key={notice._id}
                      key={notice.id}
                    >
                      <td className="px-4 border">{index + 1}</td>
                      <td className="px-4 border">{notice.title}</td>
                      <td className="px-3 border">
                        {notice?.description?.substring(0, 20)}...
                      </td>
                      <td className="px-4 border">
                        <div className="flex items-baseline gap-x-1">
                          <span className="text-[.9rem]">
                            {`${notice?.noticeDate?.split("T")[0]} ${
                              notice?.noticeDate?.split("T")[1]
                            }`}
                          </span>
                          {/* <span className="text-[.8rem]">
                            {notice.noticeDate?.split("T")[1]}
                          </span> */}
                        </div>
                      </td>
                      <td className="hidden px-4 py-1 border md:block">
                        <a
                          href={
                            (notice?.imageName &&
                              `${imageUrl}${notice?.imageName.substring(
                                22
                              )}`) ||
                            notice.imageName ||
                            notice.file
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center decoration-none"
                        >
                          <Avatar
                            src={
                              (notice?.imageName &&
                                `${imageUrl}${notice?.imageName.substring(
                                  22
                                )}`) ||
                              notice.imageName ||
                              notice.file
                            }
                            alt="image"
                            className="h-[1.95em]"
                            variant="square"
                          />
                        </a>
                      </td>
                      <td className="px-4 py-1 border ">
                        {notice.isActive ? "active" : "not active"}
                      </td>

                      <td className="px-4 py-2 border">
                        <div className="flex items-center justify-center gap-x-1">
                          <HiOutlineInformationCircle
                            className="text-[1.25rem] cursor-pointer text-blue-700/80"
                            title={`set ${notice.title} as active`}
                            onClick={() => setNoticeActive(notice.id)}
                          />
                          <RiDeleteBin6Line
                            className="text-[red]/70 text-[1.2rem] cursor-pointer"
                            title={`delete ${notice.title}`}
                            onClick={() => deleteClick(notice)}
                          />
                          <BiMessageSquareEdit
                            className="text-[1.2rem] cursor-pointer text-green-700/80"
                            title={`update ${notice.title}`}
                            onClick={() => updateClick(notice)}
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
                      No notices found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {Object.keys(deleteNotice).length > 0 && (
        <DeleteConfirmModel
          openDelete={openDelete}
          setOpenDelete={setOpenDelete}
          data={deleteNotice}
          setData={setDeleteNotice}
        />
      )}
    </>
  );
};

export default Notice;
