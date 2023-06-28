// import { HiUsers } from "react-icons/hi";
import { BsBookmarkStarFill } from "react-icons/bs";
import { TfiStatsUp } from "react-icons/tfi";
import { ImUsers } from "react-icons/im";
import Heading from "../../../../global/components/heading";
import SalesLineChart from "../charts/sales-line-chart";
import SalesPieChart from "../charts/sales-pie-chart";
const Statistics = () => {
  return (
    <>
      <div className="bg-[#fff] px-4 py-4 sm:px-5 lg:px-6 rounded @container">
        <p className="text-[1.15rem] font-bold text-[#585858]">Analytics</p>
        <div className="mt-5">
          {/* heading */}
          <Heading heading="Outcomes" />
          {/* analytics card section */}
          <div className="grid grid-cols-1 mt-3 @sm:grid-cols-2 @[800px]:grid-cols-3 gap-x-3 gap-y-3">
            {/* customer section */}
            <div className="bg-[#2e2e2e] text-[#efefef] flex w-[100%] h-[10em] py-10 rounded justify-around cursor-pointer hover:bg-[#3f3f3f] items-center">
              <div className="font-semibold leading-[1.75em]">
                <p className="text-[2em]">500</p>
                <p className="text-[.8rem]">Customers</p>
              </div>
              <ImUsers className="text-2xl text-red-400" />
            </div>
            {/* customer section ends here */}
            {/* orders section */}
            <div className="bg-[#2e2e2e] text-[#efefef] flex w-[100%] h-[10em] py-10 rounded justify-around cursor-pointer hover:bg-[#3f3f3f] items-center">
              <div className="font-semibold leading-[1.75em]">
                <p className="text-[2em]">480</p>
                <p className="text-[.8rem]">orders</p>
              </div>
              <BsBookmarkStarFill className="text-2xl " />
            </div>
            {/* orders section ends here */}
            {/* sales section */}
            <div className="bg-[#2e2e2e] text-[#efefef] flex w-[100%]  h-[10em] py-10 rounded justify-around cursor-pointer hover:bg-[#3f3f3f] items-center @sm:col-span-2 @[800px]:col-span-1">
              <div className="font-semibold leading-[1.75em]">
                <p className="text-[2em]">Rs. 5000</p>
                <p className="text-[.8rem]">sales</p>
              </div>
              <TfiStatsUp className="text-2xl text-green-400" />
            </div>
            {/* sales section ends here */}
          </div>
          {/* analytics cards section ends */}
          {/* line chart and pie chart */}
          <div className="mt-5">
            <Heading heading="Sales" />
            <div className="gap-3 lg:flex">
              <SalesLineChart />
              <SalesPieChart />
            </div>
          </div>
          {/* line chart and pie chart ends here */}
        </div>
      </div>
    </>
  );
};

export default Statistics;
