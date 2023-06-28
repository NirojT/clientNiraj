import FavoriteItemCard from "./favorite-item-card";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import Heading from "../../../../global/components/heading";
const FavoriteItems = () => {
  return (
    <>
      <div className="lg:w-[65%] w-full bg-[#fff] px-4 py-4 sm:px-5 lg:px-6">
        {/* title */}
        <p className="text-[1.1rem] font-bold text-[#585858]">Foods</p>
        {/* title ends here */}
        {/* heading */}
        <div className="">
          <div className="flex items-center justify-between mt-5">
            <Heading heading="Most favorite items" />
            {/* menu */}
            {/* for displaying the items as sorted */}
            <div className="flex text-[#999898] text-[.8rem] sm:text-[.9rem] font-semibold gap-x-3 lg:gap-x-5">
              {/* menu items for sorting */}
              <p className="cursor-pointer select-none">Beverage</p>
              <p className="cursor-pointer select-none">Drinks</p>
              <p className="cursor-pointer select-none">Desert</p>
            </div>
            {/* menu ends here */}
          </div>
        </div>
        {/* heading ends here */}
        <div className="">
          {/* displaying the favorite items */}
          {/* items most liked by the customers */}
          <div className="grid gap-3 mt-5 sm:grid-cols-2">
            <FavoriteItemCard />
            <FavoriteItemCard />
            <FavoriteItemCard />
            <FavoriteItemCard />
            <FavoriteItemCard />
            <FavoriteItemCard />
            <FavoriteItemCard />
            <div className="flex p-2 shadow gap-x-3 h-[6em] items-center hover:shadow-md hover:translate-y-[-.35rem] transition-[.75s] hover:border-t cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1532678465554-94846274c297?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt=""
                className="h-[4em] w-[4em] rounded object-cover border"
              />
              <div className="flex flex-col justify-between gap-y-3">
                <div className="leading-[1.25rem] font-semibold text-[#585858] text-[.9rem]">
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Rs. 400</p>
                </div>
                <div className="flex items-center text-red-400 gap-x-1">
                  <AiFillHeart className="" />
                  <span className="text-[.6rem] font-semibold">200 served</span>
                </div>
              </div>
            </div>
          </div>
          {/* displaying the favorite items ends here */}
          {/* view more */}
          <div className="flex justify-center mt-4">
            <p className="flex items-center cursor-pointer text-[#585858]">
              <span className="font-semibold text-[.9rem]">view more</span>
              <RiArrowDropDownLine className="text-[1.5rem] " />
            </p>
          </div>
          {/* view more ends here */}
        </div>
      </div>
    </>
  );
};

export default FavoriteItems;
