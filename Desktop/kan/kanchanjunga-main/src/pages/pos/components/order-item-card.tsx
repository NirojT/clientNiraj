const OrderItemCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <>
      <div className="flex items-center justify-between p-4 border bg-[whitesmoke] rounded select-none w-full @container shadow-md">
        <div className="flex justify-between flex-1 mr-[1.5em] @[19em]:mr-[2em] @[20em]:mr-[3em] @[25em]:mr-[4em]">
          <div className="flex items-center gap-x-3">
            <div className="flex items-center ">
              <img
                src={image}
                alt={name}
                className="object-cover w-10 h-10 rounded-sm"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold">{name}</span>
              <span className="text-xs font-semibold">Rs. 403</span>
            </div>
          </div>
          <p className="text-base font-semibold">2</p>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-semibold">Rs. 120.00</span>
          <span className="text-xs">Price</span>
        </div>
      </div>
    </>
  );
};

export default OrderItemCard;
