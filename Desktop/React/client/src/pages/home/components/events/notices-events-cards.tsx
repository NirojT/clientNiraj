import React, { useState } from "react";

const NoticeEventCards = () => {
  const [flag, setaFlag] = useState(false);
  return (
    <>
      <div className={`${flag && ""} `}>
        <div
          className={`h-[50dvh] flex items-end ${
            !flag ? "w-[100%]" : "w-0"
          } duration-500 delay-500 `}
          onClick={() => {
            setaFlag((prev) => !prev);
          }}
          style={{
            backgroundImage:
              "url(https://png.pngtree.com/png-clipart/20220221/ourmid/pngtree-important-notice-design-png-png-image_4446455.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="text-[1.1rem] font-semibold text-[#585858] capitalize">
            VAC bags Hult Prize
          </p>
        </div>
        <div
          className={`${
            flag ? "w-[100%]" : "w-0"
          } overflow-hidden h-[5em] duration-500 delay-500`}
          onClick={() => {
            setaFlag((prev) => !prev);
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
          beatae voluptas assumenda asperiores, obcaecati esse culpa quidem
          soluta vitae id nobis, voluptatibus inventore optio tempora rerum
          deleniti suscipit odit. Magnam!
        </div>
      </div>
    </>
  );
};

export default NoticeEventCards;
