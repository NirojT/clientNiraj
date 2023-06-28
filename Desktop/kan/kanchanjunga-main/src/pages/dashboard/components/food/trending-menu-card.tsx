const TrendingMenuCard = () => {
  return (
    <>
      <div className="flex p-2 shadow gap-x-5 h-[6em] items-center hover:shadow-md hover:translate-y-[-.25rem] transition-[.75s] cursor-pointer justify-between xl:justify-around">
        {/* ranking */}
        <div className="text-[1.3rem] leading-3 font-semibold text-[#585858]">
          #1
        </div>
        {/* ranking ends here */}
        <div className="flex flex-col justify-between gap-y-3">
          {/* name and price of menu */}
          <div className="leading-[1.25rem] font-semibold text-[#585858] text-[.9rem] sm:text-[.8rem] md:text-[.9rem] lg:text-[.8rem] xl:text-[.9rem]">
            <p>Lorem ipsum dolor sit.</p>
            <p>Rs. 400</p>
          </div>
          {/* name and price of menu ends here */}
        </div>
        {/* image of item from the menu */}
        <img
          src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="h-[4em] w-[4em] rounded object-cover border"
        />
        {/* image of item from the menu ends here */}
      </div>
    </>
  );
};

export default TrendingMenuCard;
