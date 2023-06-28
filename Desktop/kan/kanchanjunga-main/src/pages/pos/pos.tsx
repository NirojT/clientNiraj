import OrderList from "./components/order-list";
import Payment from "./components/payment";

const POS = () => {
  return (
    <>
      <div className="@container sticky top-[0em]">
        <div className="@[65em]:flex gap-x-3">
          {/* list bof the orders -> for payment */}
          <OrderList />
          {/* section displays the lits of items for a order */}
          {/* a list of card for items is id displayed with a section for subtotal */}
          <Payment />
        </div>
      </div>
    </>
  );
};

export default POS;
