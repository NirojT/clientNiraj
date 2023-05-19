import React, { useEffect, useState } from "react";
import { useContactsStore } from "../../contacts/store";
import { IContactDetails } from "../../contacts/interface";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IToasterData } from "../../../global/itoaster";
import Toaster from "../../../global/toaster";
import DeleteConfirmModel from "../../contacts/delete-confirm-model";
import { adminLayoutStore } from "../layout/store";

const Contacts = () => {
  //store
  const contacts: IContactDetails[] = useContactsStore(
    (state: any) => state.contacts
  );
  const getContacts = useContactsStore((state: any) => state.getContacts);
  const setActiveUrl = adminLayoutStore((state: any) => state.setActiveUrl);

  //states

  // delete contact states
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteContact, setDeleteContact] = useState<IContactDetails>(
    {} as IContactDetails
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

  const deleteClick = (data: IContactDetails) => {
    setOpenDelete(true);
    setDeleteContact(data);
  };
  useEffect(() => {
    getContacts();
  }, [getContacts]);

  useEffect(() => {
    setActiveUrl(window.location.pathname);
  }, [setActiveUrl]);
  return (
    <>
      <Toaster data={toasterData} close={closeToaster} />
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
                Content
              </th>
              <th className="border px-4 py-2 text-[.9rem] sm:text-[1rem]">
                Email
              </th>
              <th className="border px-4 py-2 text-[.9rem] sm:text-[1rem]">
                Phone No.
              </th>
              <th className="border px-4 py-2 text-[.9rem] sm:text-[1rem]">
                Date
              </th>
              <th className="border px-4 py-2 text-[.9rem] sm:text-[1rem]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <tr key={contact.id}>
                  <td className="px-4 border">{index + 1}</td>
                  <td className="px-4 border">{contact.title}</td>
                  <td className="px-4 border">{contact.content}</td>
                  <td className="px-4 border">{contact.email}</td>
                  <td className="px-4 border">{contact.phoneNo}</td>
                  <td className="px-4 border">{contact.date}</td>
                  <td className="px-4 py-2 border">
                    <div className="flex items-center justify-center gap-x-1">
                      <RiDeleteBin6Line
                        className="text-[red]/70 text-[1.2rem] cursor-pointer"
                        title={`delete ${contact.title}`}
                        onClick={() => deleteClick(contact)}
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="border px-4 text-[.9rem] sm:text-[1rem] text-center font-semibold py-4"
                >
                  No contacts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {Object.keys(deleteContact).length > 0 && (
        <DeleteConfirmModel
          openDelete={openDelete}
          setOpenDelete={setOpenDelete}
          data={deleteContact}
          setData={setDeleteContact}
        />
      )}
    </>
  );
};

export default Contacts;
