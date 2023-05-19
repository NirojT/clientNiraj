import React, { useMemo, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { IToasterData } from "../../../../global/itoaster";
import Toaster from "../../../../global/toaster";
import { LoginClass } from "../helper";
import { ILoginData } from "../interface";
import { loginStore } from "../store";

const LoginForm = () => {
  // class
  const signInClass = useMemo(() => new LoginClass(), []);
  // store
  const signIn = loginStore((state: any) => state.signIn);
  const setData = loginStore((state: any) => state.setData);
  const data: ILoginData = loginStore((state: any) => state.data);
  const data_error: ILoginData = loginStore((state: any) => state.data_error);
  const setDataError = loginStore((state: any) => state.setDataError);
  // states
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
  const signInClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signInClass.signIn(
      data,
      setDataError,
      signIn,
      setToasterData,
      setLoading,
      setData
    );
  };
  return (
    <>
      <Toaster data={toasterData} close={closeToaster} />
      <form className="mt-4">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="email" className="text-[.9em]">
            Username<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={data.username}
            onChange={(e) => {
              setData({ username: e.target.value });
            }}
            onKeyUp={() => {
              if (data.username) setDataError({ username: "" });
            }}
            className="border-[1px] border-[#595959] rounded-sm px-2 py-[.5em] focus:outline-none focus:border-[#2e2e2e]"
          />
          {data_error.username && (
            <p className="text-red-500 text-[.8rem]">username is required</p>
          )}
        </div>
        <div className="flex flex-col mt-4 gap-y-2">
          <label htmlFor="password" className="text-[.9em]">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Enter your password"
            id="password"
            onChange={(e) => {
              setData({ password: e.target.value });
            }}
            onKeyUp={() => {
              if (data.password) setDataError({ password: "" });
            }}
            className="border-[1px] border-[#595959] rounded-sm px-2 py-[.5em] focus:outline-none focus:border-[#2e2e2e]"
          />
          {data_error.password && (
            <p className="text-red-500 text-[.8rem]">password is required</p>
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-2">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember" className="text-[.9em]">
              Remember me
            </label>
          </div>
          <p className="text-[.9em] text-[#2e2e2e] cursor-pointer">
            Forgot password?
          </p>
        </div>
        <button
          onClick={(e) => {
            signInClick(e);
          }}
          className={`bg-[#2e2e2e] text-white w-full ${
            loading ? "py-[.4em]" : "py-[.8em]"
          } rounded-sm mt-4`}
        >
          {loading ? <CircularProgress color="inherit" size={24} /> : "Sign In"}
        </button>
      </form>
    </>
  );
};

export default LoginForm;

