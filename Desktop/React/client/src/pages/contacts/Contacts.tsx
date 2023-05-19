import React, { useState } from "react";
import { axios_auth, axios_no_auth } from "../../global/config";
import { IToasterData } from "../../global/itoaster";
import Toaster from "../../global/toaster";
import { IContactData } from "./interface";

const UserContacts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  //for toaster aka notification
  //state
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
  //toaster from the gloable file

  // const clearForm = () => {
  //   setTitle("");
  //   setContent("");
  //   setEmail("");
  //   setPhoneNo("");
  //   setEmailError("");
  //   setPhoneError("");
  // };
  //for email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    // email format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(e.target.value)) {
      setEmailError("Invalid email format!");
    } else {
      setEmailError("");
    }
  };

  //for number format
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNo(e.target.value);

    //number format validation
    const phoneNum = /^9[87]\d{8}$/;

    if (!phoneNum.test(e.target.value)) {
      setPhoneError("invalid number format!");
    } else {
      setPhoneError("");
    }
  };

  const submitForm = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const data: IContactData = {
      title: title,
      content: content,
      email: email,
      phoneNo: phoneNo,
    };
    console.log(data);

    if (!title.trim() || !content.trim() || !email.trim() || !phoneNo.trim()) {
      setToasterData({
        open: true,
        severity: "warning",
        message: "fill the details",
      });
      console.log("1");

      return;
    }
    let res = await axios_no_auth.post("contact/create", data);
    console.log(res);
    console.log("done");
    //success
    setToasterData({
      open: true,
      severity: "success",
      message: "we have got your message",
    });
    // Here you would typically send the data to your server

    // Clear the form after submitting
    // clearForm();
  };

  return (
    <>
      <Toaster data={toasterData} close={closeToaster} />
      <div className="">
        <div className="md:flex">
          <div className="">
            <div className="flex w-full justify-center ">
              <iframe
                className="h-[45dvh] w-[95vw] md:w-[45vw] sm:h-[50dvh] md:h-[100dvh]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4474.487924888918!2d87.2732952948829!3d26.6661933118566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6c7012c41479%3A0x83f322d51546ef30!2sVishwa%20Adarsha%20College%20%2F%20H.%20S.%20School!5e0!3m2!1sen!2snp!4v1684474819769!5m2!1sen!2snp"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="md:flex-1">
            <form className="w-full px-[1em] border py-[2em] mt-[3em] md:mt-0">
              <h1 className="text-3xl mb-6 text-center md:text-center font-bold text-[#585858]">
                Contact Us
              </h1>
              <div className="w-full flex flex-col gap-y-[.1em]">
                <div className="flex flex-col gap-y-3">
                  <label className="">
                    <span className="text-[#585858] font-semibold text-[1rem] mb-2">
                      Title:
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a title @Admission"
                    className="border rounded-sm w-full py-2 px-3 focus:outline-none focus:border focus:border-[#2e2e2e]"
                  />
                </div>
                <div className="flex flex-col gap-y-3 mt-5">
                  <label className="">
                    <span className="text-[#585858] font-semibold text-[1rem] mb-2">
                      Message:
                    </span>
                  </label>
                  <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter a message"
                    className="shadow appearance-none border w-full py-2 px-3 tborder  rounded-sm  focus:outline-none focus:border focus:border-[#2e2e2e] h-24"
                  />
                </div>
                <div className="flex flex-col gap-y-3 mt-5">
                  <label className="">
                    <span className="text-[#585858] font-semibold text-[1rem] mb-2">
                      Email:
                    </span>
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter email @example@gmail.com"
                    className="border rounded-sm w-full py-2 px-3 focus:outline-none focus:border focus:border-[#2e2e2e]"
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm">{emailError}</p>
                  )}
                </div>
                <div className="flex flex-col gap-y-3 mt-5">
                  <label className="">
                    <span className="text-[#585858] font-semibold text-[1rem] mb-2">
                      Phone No:
                    </span>
                  </label>
                  <input
                    required
                    type="tel"
                    value={phoneNo}
                    onChange={handlePhoneNumberChange}
                    className="border rounded-sm w-full py-2 px-3 focus:outline-none focus:border focus:border-[#2e2e2e]"
                  />
                  {phoneError && (
                    <p className="text-red-500 text-sm">{phoneError}</p>
                  )}
                </div>
                <div className="flex w-full mt-5 justify-center">
                  <button
                    onClick={(e) => {
                      submitForm(e);
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center md:flex-row">
        <div className="flex-1">
          <iframe
            className="h-[45dvh] w-[90vw] md:w-[45vw] sm:h-[50dvh] md:h-[100dvh]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4474.487924888918!2d87.2732952948829!3d26.6661933118566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6c7012c41479%3A0x83f322d51546ef30!2sVishwa%20Adarsha%20College%20%2F%20H.%20S.%20School!5e0!3m2!1sen!2snp!4v1684474819769!5m2!1sen!2snp"
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex justify-center w-[85vw] md:w-[45vw] items-center md:px-[2em]">
          <form className=" w-full px-[1em] border py-[2em] mt-[3em] md:mt-0">
            <h1 className="text-3xl mb-6 text-center md:text-center font-bold text-[#585858]">
              Contact Us
            </h1>
            <div className="w-full flex flex-col gap-y-[.1em]">
              <div className="flex flex-col gap-y-3">
                <label className="">
                  <span className="text-[#585858] font-semibold text-[1rem] mb-2">
                    Title:
                  </span>
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a title @Admission"
                  className="border rounded-sm w-full py-2 px-3 focus:outline-none focus:border focus:border-[#2e2e2e]"
                />
              </div>
              <div className="flex flex-col gap-y-3 mt-5">
                <label className="">
                  <span className="text-[#585858] font-semibold text-[1rem] mb-2">
                    Message:
                  </span>
                </label>
                <textarea
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter a message"
                  className="shadow appearance-none border w-full py-2 px-3 tborder  rounded-sm  focus:outline-none focus:border focus:border-[#2e2e2e] h-24"
                />
              </div>
              <div className="flex flex-col gap-y-3 mt-5">
                <label className="">
                  <span className="text-[#585858] font-semibold text-[1rem] mb-2">
                    Email:
                  </span>
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter email @example@gmail.com"
                  className="border rounded-sm w-full py-2 px-3 focus:outline-none focus:border focus:border-[#2e2e2e]"
                />
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}
              </div>
              <div className="flex flex-col gap-y-3 mt-5">
                <label className="">
                  <span className="text-[#585858] font-semibold text-[1rem] mb-2">
                    Phone No:
                  </span>
                </label>
                <input
                  required
                  type="tel"
                  value={phoneNo}
                  onChange={handlePhoneNumberChange}
                  className="border rounded-sm w-full py-2 px-3 focus:outline-none focus:border focus:border-[#2e2e2e]"
                />
                {phoneError && (
                  <p className="text-red-500 text-sm">{phoneError}</p>
                )}
              </div>
              <div className="flex w-full mt-5 justify-center">
                <button
                  onClick={(e) => {
                    submitForm(e);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="">
          <p>Contact</p>
          <div className="">
            <p>vaccolegeith@gmail.com</p>
            <p>+977 025-582163</p>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div> */}
    </>
  );
};

export default UserContacts;
