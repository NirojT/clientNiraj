import FavoriteItems from "./components/food/favorite-items";
import TrendingMenu from "./components/food/trending-menu";
import Orders from "./components/orders/orders";

import Statistics from "./components/statistics/statistics";
const Dashboard = () => {
  return (
    <>
      {/* main dashboard/landing page of admin */}
      <div className="w-full text-[#585858]">
        {/* analytics of sales and orders */}
        {/* contains cards for customers, sales and orders */}
        {/* also has line chart and bar chart */}
        <Statistics />
        <div className="mt-3 lg:flex gap-x-3">
          {/* displays the most ordered items of the restaurant */}
          <FavoriteItems />
          {/* the trending menu items are listed here */}
          <TrendingMenu />
        </div>
        {/* displaying the recent orders placed */}
        <Orders />
      </div>
    </>
  );
};

export default Dashboard;
