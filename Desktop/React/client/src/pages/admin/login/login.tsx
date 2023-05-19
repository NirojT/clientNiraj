import LoginForm from "./components/login-form";
const Login = () => {
  return (
    <>
      <div className="w-[100vw] flex">
        <div className=" w-[100%] md:w-[50%] mt-4">
          <p className="pl-[1em] text-[1.25em] font-semibold">VAC</p>
          <div className="flex justify-center items-center h-[92vh]">
            <div className="w-[90%]">
              <p className="text-[1.5em] font-semibold">Welcome back</p>
              <p className="text-[.9em] text-[#595959] mt-2">
                Sign in to your account to continue
              </p>
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="w-[50%] hidden md:flex h-screen justify-center items-center border-l-[1px]">
          <div className="relative w-full flex justify-center">
            <div className="bg-red-400 h-[10em] w-[10em] rounded-full"></div>
            <div className="backdrop-blur-sm h-[10em] w-full absolute top-[50%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
