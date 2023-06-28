import Heading from "../../../global/components/heading";
import OrderItemCard from "./order-item-card";

const Payment = () => {
  return (
    <>
      {/* display items and payment section */}
      <div className="flex-1 pt-7 bg-[#fff] px-4 py-4 sm:px-5 lg:px-6 mt-3 @[65em]:mt-0 sticky @container max-h-[750px]">
        <Heading heading="Order Table #404" />
        <div className="mt-5 text-[#585858] ">
          {/* order item section */}
          {/* ordered items card */}
          <div className="grid @[600px]:grid-cols-2 overflow-y-scroll gap-2 max-h-[28em] pt-1 w-full">
            <OrderItemCard
              image="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/287248579_176451231408948_5990536548020491534_n.jpg?_nc_cat=109&cb_f2e=test&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bTDPQFeeeEEAX9XDqXK&_nc_ht=scontent.fktm17-1.fna&oh=00_AfBNz8WpX_PAbWQcdyc3gAQCeWEVc5x-6Fj1T9wwTL7dow&oe=649EB99C"
              name="Blue juice xd"
            />
            <OrderItemCard
              image="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/273157973_150262967361108_2973552772076367939_n.jpg?_nc_cat=103&cb_f2e=test&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=ynySD-LLpBYAX_AWNXj&_nc_ht=scontent.fktm17-1.fna&oh=00_AfCIg1hSTHn-RYUoRVVJnRQHSYRXBrIZte6p5UJuxsP-sw&oe=649D5ECC"
              name="Coffee"
            />
            <OrderItemCard
              image="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/273225034_150262857361119_4939526947102430729_n.jpg?_nc_cat=102&cb_f2e=test&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=9QZCQcFbSdYAX9M2AuC&_nc_ht=scontent.fktm17-1.fna&oh=00_AfA5ekVDpGIQtA0Q-RFNqambptXxjxVFnOS5Ji1QJzYjIA&oe=649D7FE8"
              name="Cupcake"
            />
            <OrderItemCard
              image="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/272805555_149841247403280_8989851368956295923_n.jpg?_nc_cat=108&cb_f2e=test&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=vRIQaI4bk5IAX9o7RJi&_nc_ht=scontent.fktm17-1.fna&oh=00_AfDAOsXY3YcERpeAFnJi_EviaekIZHkvCFbqT1FtM9tQfA&oe=649EAA66"
              name="Milkshake"
            />
            <OrderItemCard
              image="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/271129046_143343754719696_5064699744867364955_n.jpg?_nc_cat=100&cb_f2e=test&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=wh_yuoOMKQcAX9sG_g7&_nc_ht=scontent.fktm17-1.fna&oh=00_AfA5Qn7dVsl6oOrECk_6SrTacSki8bYA9KQq5z5qFu9a7g&oe=649D824E"
              name="Lemonade"
            />
            <OrderItemCard
              image="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/271160303_143978877989517_819622670208355695_n.jpg?_nc_cat=111&cb_f2e=test&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=fIDFsScw4eUAX8KEa7K&_nc_ht=scontent.fktm17-1.fna&oh=00_AfCtCJkFr6dOdy94LlsEyEuJuw_KGi7Isd-I7ABd3Pu5Sg&oe=649D9486"
              name="Orange juice"
            />
            <OrderItemCard
              image="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/271182696_143981004655971_5027196851533139484_n.jpg?_nc_cat=109&cb_f2e=test&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=87_wJsLRyxwAX8FwigX&_nc_ht=scontent.fktm17-1.fna&oh=00_AfB_B43TqwcFlRyb-fGSmNqaqszEV6X6A2uy2D6YRRF_TA&oe=649E40A0"
              name="Fish fry"
            />
            <OrderItemCard
              image="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/272771886_149003660820372_8569423487077183880_n.jpg?_nc_cat=105&cb_f2e=test&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=wzQZVIPP8TQAX8_D_na&_nc_ht=scontent.fktm17-1.fna&oh=00_AfA8IFFpCkV3TpLHFampd96hgQREVUPZ7udKH5WcWNHAHw&oe=649E203A"
              name="Cherry"
            />
            <OrderItemCard
              image="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/245218713_126030166451055_1821570452976268956_n.jpg?_nc_cat=105&cb_f2e=test&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=c4kTV4PI_8AAX9bWhh7&_nc_ht=scontent.fktm17-1.fna&oh=00_AfATKpDHwad9RxLPxWzaM1uKGa7vvKqyMhemO4wOLyvjBg&oe=649E0817"
              name="Ruslan"
            />
          </div>
          {/* order item section ends here */}
          {/* section for subtotal and pay button */}
          <div className="p-4 mt-3 border ">
            <div className="flex justify-between px-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[.8rem] font-semibold ">Subtotal</p>
                <p className="text-[.8rem] font-semibold ">Discount</p>
                <p className="font-semibold">Subtotal</p>
              </div>
              <div className="flex flex-col text-right gap-y-1">
                <p className="text-[.8rem] font-semibold ">Rs. 5000.00</p>
                <p className="text-[.8rem] font-semibold ">Rs. 400.00</p>
                <p className="font-semibold">Rs. 4600.00</p>
              </div>
            </div>
            {/* <button className="w-full mt-4 btn"></button> */}
            <div className="w-full drawer drawer-end">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="w-full mt-4 btn drawer-button"
                >
                  Pay now
                </label>
              </div>
              <div className="drawer-side z-[6]">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="h-full p-4 w-[20em] menu bg-base-200 text-base-content">
                  <li>
                    <a>Sidebar Item 1</a>
                  </li>
                  <li>
                    <a>Sidebar Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* subtotal section ends here */}
        </div>
      </div>
    </>
  );
};

export default Payment;

{
  /*  */
}
