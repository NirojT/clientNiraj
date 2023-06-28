const OrderTableCards = () => {
  return (
    <>
      {/* order item card */}
      {/* has a background image of the table of the order */}
      <div
        className="shadow-xl bg-base-100 w-[15em h-[12em] relative rounded-md cursor-pointer "
        style={{
          backgroundImage:
            "url(https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/240113512_112117317842340_2345030860469989173_n.jpg?_nc_cat=109&cb_f2e=test&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Va0I-ijDFoUAX_2sgci&_nc_ht=scontent.fktm17-1.fna&oh=00_AfANyh3lWjpS-rYMm1WSDr3-6AI7rVYddgA3wOQ7s8pxpQ&oe=649E1FCE)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          //   filter: "brightness(0.5)",
        }}
      >
        {/* details of order -> table name, items ordered nad payable amount */}
        <div className=" w-full h-full rounded-md bg-slate-900/80 card-body text-[#fff]">
          <h2 className="text-[#fff] card-title">Order table #01</h2>
          <p className="text-[.9rem]">
            Pizza, Fries, Burger, Momos, Noodles, Chicken lolipop..
          </p>
          <p className="text-[1.5rem] font-semibold">Rs. 5000</p>
        </div>
        {/* order details section ends */}
      </div>
    </>
  );
};

export default OrderTableCards;
