import React from "react";

const ChooseUs = () => {
  return (
    <>
      <div className="mt-[4em] ">
        {/* <div className="">
          <p className="uppercase text-[1rem] w-fit relative font-semibold text-[#e0644b] mt-4 before:content-[''] before:absolute before:bg-[#e0644b] before:w-[80%] before:h-[2px] before:bottom-0 ]">
            Why choose us
          </p>
          <p className="text-[2rem] font-bold text-[#595959] leading-[2.5rem] sm:w-[12em] mt-5">
            We offer more than just <br />
            <span className="w-fit relative before:content-[''] before:absolute before:bg-[#e0644b] before:w-[99%] before:h-[3px] before:bottom-1 before:left-0 capitalize">
              an education
            </span>
          </p>
        </div> */}
        {/* <div className="leading-[3rem] select-none">
          <p className="w-fit text-[2rem] text-[#585858] capitalize font-mono">
            Innovative learning
          </p>
          <p className="font-extrabold tracking-wider text-[5rem] text-[#585858] capitalize font-mono">
            Culture
          </p>
        </div> */}
        <div className="md:flex gap-x-[1.5em] mt-3 items-center min-h-screen ">
          <div className="relative flex-1 h-screen overflow-hidden">
            <div className="rotate-[45deg] absolute bottom-[2em] left-[-15em]">
              <div className="bg-blue-500 h-[18em] w-[32em]"></div>
              <div className="relative flex isolate">
                <div className=" h-[16em] w-[24em] overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-photo/red-buildings-households_1127-2024.jpg?w=1060&t=st=1683536095~exp=1683536695~hmac=b5217a7dbb4511492cb5a714cd51c4632d6d283688d35604fe9ec53f1391ed3e"
                    alt=""
                    className="object-cover w-[18em] h-[18em] rotate-[-45deg] translate-x-[10em]"
                  />
                </div>
                <div className="bg-red-400 h-[16em] w-[8em] "></div>
                <div className="absolute left-[50.75%] bottom-0 flex items-baseline">
                  <div className=" h-[8em] w-[8em] bg-blue-500"></div>
                  <div className="h-[16em] w-[8em] bg-purple-500"></div>
          <div className="h-[16em] w-[15em] bg-yellow-500"></div>
                </div>
                <div className="absolute h-[25em] w-[16em] bg-green-500 left-[50.75%] z-[-1] top-[-9rem]"></div>
              </div>
              <div className="flex">
                <div className=" h-[10em] w-[18em] border"></div>
                <div className="bg-red-400 h-[20em] w-[20em] overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-photo/graduation-high-school-university-concept-top-view_185193-109744.jpg?w=1060&t=st=1683536366~exp=1683536966~hmac=2f3e9e8bc595936e0117b5b2c539e36ebe47509e3932ff7aad8b09b10b41a9e7"
                    alt=""
                    className="object-cover rotate-[-45deg] h-[20em]  translate-y-[-2em] translate-x-[1]"
                  />
                </div>
                <div className="bg-red-400 h-[20em] w-[25em] relative">
                  <div className="absolute inset-0 h-[8em] w-[8em] overflow-hidden">
                    <img
                      src="https://img.freepik.com/free-photo/school-children-dressed-uniform-have-fun-play-schoolyard_8353-6640.jpg?w=1060&t=st=1683536310~exp=1683536910~hmac=f864163681ff3e9076310b84b0a21602cad81ddadf9e92039d914103a7254643"
                      alt=""
                      className="object-cover h-[15em] w-[15em] brightness-[1.2]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className=" text-[#2e2e2e] tracking-normal mt-4 text-justify text-[1.05rem] lg:text-[1.1rem] font-semibold">
              At Vishwa Adarsha, we are committed to providing an exceptional
              education experience. Our experienced and student-oriented
              teaching staff, state-of-the-art facilities, and diverse
              scholarship schemes create a peaceful academic environment for all
              students to learn and succeed.
            </p>
            <button className="mt-5 font-semibold tracking-wider uppercase border px-[2em] py-[.8em] text-[#585858] border-[#e0644b] hover:shadow hover:shadow-[#e0644b] hover:translate-x-6 hover:delay-[150ms] duration-100">
              apply now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
