import Heading from "../../../../global/components/heading";
import TrendingMenuCard from "./trending-menu-card";

const TrendingMenu = () => {
  return (
    <>
      <div className="flex-1 lg:pt-12 pt-7 bg-[#fff] px-4 py-4 sm:px-5 lg:px-6 mt-3 lg:mt-0">
        {/* heading */}
        <Heading heading="Daily Trending Menus" />
        {/* heading ends here */}
        {/* displaying the trending menu items */}
        {/* menus most ordered by the customers */}
        <div className="h-[30em] overflow-y-scroll mt-3 w-full grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <TrendingMenuCard />
          <TrendingMenuCard />
          <TrendingMenuCard />
          <TrendingMenuCard />
          <TrendingMenuCard />
          <TrendingMenuCard />
          <TrendingMenuCard />
          <TrendingMenuCard />
        </div>
        {/* menus most ordered by the customers ends here */}
      </div>
    </>
  );
};

export default TrendingMenu;
