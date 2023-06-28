import Heading from "../../../global/components/heading";
import OrderTableCards from "./order-table-card";

const OrderList = () => {
  return (
    <>
      <div className="@[65em]:w-[65%] w-full bg-[#fff] px-4 py-4 sm:px-5 lg:px-6 max-h-[740px] overflow-y-scroll">
        {/* order display section */}
        <div className="bg-[#fff] rounded @container">
          <p className="text-[1.15rem] font-bold text-[#585858]">Order table</p>
          <div className="mt-5">
            {/* heading */}
            <Heading heading="Recent orders" />
            <div className="grid gap-3 mt-5 @[27em]:grid-cols-2 @[40em]:grid-cols-3 ">
              {/* order item cards */}
              <OrderTableCards />
              <OrderTableCards />
              <OrderTableCards />
              <OrderTableCards />
              <OrderTableCards />
              <OrderTableCards />
              <OrderTableCards />
              <OrderTableCards />
              <OrderTableCards />
              <OrderTableCards />
              <OrderTableCards />
              <OrderTableCards />
              <OrderTableCards />
              {/* order item cards ends here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
