import Logo from "../../assets/logo.jpg";
import { MdDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { MdFoodBank } from "react-icons/md";
import { ImGlass2 } from "react-icons/im";
import { IoReceiptSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col md:min-w-[15em] lg:min-w-64 xl:min-w-[18em] h-screen px-4 py-2 bg-[#2e2e2e] border-r sticky top-0">
        <div
          className="flex items-center mt-1 cursor-pointer gap-x-2"
          title="Kanchanjunga"
        >
          <img
            src={Logo}
            alt="kanchanjunga-logo"
            className="h-[3em] md:h-[3.25em] rounded-full object-cover"
          />
          <h2 className="text-[1.25rem] font-semibold text-gray-800 font-mono select-none dark:text-white hidden md:block">
            Kanchanjunga
          </h2>
        </div>
        <hr className="mt-2" />
        <div className="flex flex-col items-center justify-between w-full h-full py-1 mt-3 text-white md:items-start">
          <div className="flex flex-col w-full gap-y-2">
            <div
              className="flex items-center justify-center w-full p-2 cursor-pointer select-none md:hover:border md:justify-start gap-x-2 delay-150 transition-[.5s] rounded-sm  hover:opacity-70"
              title="dashboard"
              onClick={() => navigate("/")}
            >
              <MdDashboard className="w-8 h-8 border md:w-7 md:h-7" />
              <p className="hidden md:block text-[1.1rem] font-semibold font-mono tracking-wide">
                Dashboard
              </p>
            </div>
            <div
              className="flex items-center justify-center w-full p-2 cursor-pointer select-none md:hover:border md:justify-start gap-x-2 delay-150 transition-[.5s] rounded-sm hover:opacity-70"
              title="beverage"
              onClick={() => navigate("/beverage")}
            >
              <MdFoodBank className="w-8 h-8 border md:w-7 md:h-7" />
              <p className="hidden md:block text-[1.1rem] font-semibold font-mono tracking-wide">
                Beverage
              </p>
            </div>
            <div
              className="flex items-center justify-center w-full p-2 cursor-pointer select-none md:hover:border md:justify-start gap-x-2 delay-150 transition-[.5s] rounded-sm hover:opacity-70"
              title="drinks"
            >
              <ImGlass2 className="w-8 h-8 p-1 border md:w-7 md:h-7" />
              <p className="hidden md:block text-[1.1rem] font-semibold font-mono tracking-wide">
                Drinks
              </p>
            </div>
            <div
              className="flex items-center justify-center w-full p-2 cursor-pointer select-none md:hover:border md:justify-start gap-x-2 delay-150 transition-[.5s] rounded-sm hover:opacity-70"
              title="payment"
              onClick={() => navigate("/pos")}
            >
              <IoReceiptSharp className="w-8 h-8 p-1 border md:w-7 md:h-7" />
              <p className="hidden md:block text-[1.1rem] font-semibold font-mono tracking-wide">
                Payment
              </p>
            </div>
          </div>
          <div className="w-full py-2">
            <div
              className="flex items-center justify-center w-full p-2 cursor-pointer select-none md:hover:border md:justify-start gap-x-2 delay-150 transition-[.5s] hover:opacity-70"
              title="logout"
            >
              <IoLogOut className="w-8 h-8 border md:w-7 md:h-7" />
              <p className="hidden md:block text-[1.1rem] font-semibold font-mono tracking-wide">
                Logout
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
