import Heading from "../../../../global/components/heading";
import { RiArrowDropDownLine } from "react-icons/ri";
import OrderTableCard from "./order-table-card";

const Orders = () => {
  return (
    <>
      <div className="w-full bg-[#fff] px-4 py-4 sm:px-5 lg:px-6 mt-3 @container">
        <Heading heading="Recent Orders" />
        {/* carousel-> display the recent orders in 6 grid items */}
        {/* there are 3 carousel items, each having 6 orders cards */}
        <div className="carousel rounded-box">
          {/* carousel item 1 */}
          <div className="carousel-item">
            <div className="grid gap-3 mt-5 @[400px]:grid-cols-2 @[600px]:grid-cols-3 ">
              <OrderTableCard />
              <OrderTableCard />
              <OrderTableCard />
              <OrderTableCard />
              <OrderTableCard />
              <OrderTableCard />
            </div>
          </div>
          {/* carouse item 1 ends */}
          {/* carousel item 2 */}
          <div className="ml-3 carousel-item">
            <div className="grid gap-3 mt-5 @[400px]:grid-cols-2 @[600px]:grid-cols-3 ">
              <OrderTableCard />
              <OrderTableCard />
              <OrderTableCard />
              <OrderTableCard />
              <OrderTableCard />
              <OrderTableCard />
            </div>
          </div>
          {/* carousel item 2 ends */}
          {/* carousel item 3 */}
          <div className="ml-3 carousel-item">
            <div className="grid gap-3 mt-5 @[400px]:grid-cols-2 @[600px]:grid-cols-3 ">
              <OrderTableCard />
              <OrderTableCard />
              <OrderTableCard />
              <OrderTableCard />
              <OrderTableCard />
              <OrderTableCard />
            </div>
          </div>
        </div>
        {/* carousel item 3 ends */}
        {/* carousel ends */}

        {/* view more button */}
        {/* redirects to order page containing the tables of all the orders */}
        <div className="flex justify-center my-4">
          <p className="flex items-center cursor-pointer text-[#585858]">
            <span className="font-semibold text-[.9rem]">view more</span>
            <RiArrowDropDownLine className="text-[1.5rem] " />
          </p>
        </div>
      </div>
    </>
  );
};

export default Orders;
