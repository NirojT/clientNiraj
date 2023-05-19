import React, { useState } from "react";

const Courses = () => {
  return (
    <>
      <div className="flex justify-center w-full mt-3 isolate">
        <div className="relative w-full h-[35em] xl:ml-[8em] ">
          <div
            className="h-[16em] w-[15em] absolute top-0 hover:z-[1] xl:h-[20em] xl:w-[18em]"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="relative flex flex-col flex-wrap justify-center w-full h-full duration-300 delay-200 border cursor-pointer hover:rounded group ">
              <img
                alt="gallery"
                className="object-cover object-center w-full h-full border brightness-90"
                src="https://img.freepik.com/free-photo/girl-elementary-school-student-with-backpack-book_169016-1839.jpg?w=900&t=st=1683282329~exp=1683282929~hmac=663a5e8286895c81f6a87b628d4055fb1af61f083ba73706497cc26f3384a782"
              />
              <p className="text-[1.2rem] font-semibold mb-2 absolute top-[45%] left-[33%] sm:left-[20%] md:left-[25%] lg:left-[35%] font-mono text-[#e0644b] tracking-widest group-hover:opacity-0">
                School
              </p>
              <div className="absolute hover:w-[100%] h-full">
                <div className="relative z-10 w-full h-full px-8 py-10 rounded  opacity-0 backdrop-blur-[5px] hover:opacity-100 duration-300 delay-200 flex flex-col justify-center items-center">
                  <h2 className="mb-1 text-[1.1rem] xl:text-[1.2rem] font-semibold font-mono tracking-widest text-[#e0644b] title-font">
                    School
                  </h2>
                  <p className="leading-relaxed text-[#2e2e2e]  text-center font-semibold ">
                    We have a long experience teaching: Montessori, Pre-primary,
                    Primary, and Secondary levels.
                  </p>
                  <button className="py-2 mt-3 border uppercase border-[#2e2e2e]  px-[1.25em] text-[#2e2e2e] hover:border-[#e0644b] hover:text-[#e0644b] font-semibold">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-[16em] w-[15em] absolute top-[30%] left-[25%] active:inset-0 focus:inset-0 hover:z-[1] xl:h-[20em] xl:w-[18em]"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="relative flex flex-col flex-wrap justify-center w-full h-full duration-300 delay-200 border cursor-pointer hover:rounded group ">
              <img
                alt="gallery"
                className="object-cover object-center w-full h-full border brightness-90"
                src="https://img.freepik.com/free-photo/young-smiling-pretty-caucasian-schoolgirl-wearing-back-bag-points-side-holding-books-green-with-copy-space_141793-62650.jpg?w=1060&t=st=1683282812~exp=1683283412~hmac=fd8652aedfaabddb4842d9352b0284a9421e41a645598dec2a480f24c5ed2d92"
              />
              <p className="text-[1.2rem] font-semibold mb-2 absolute top-[45%] left-[33%] sm:left-[20%] md:left-[25%] lg:left-[35%] font-mono text-[#e0644b] tracking-widest group-hover:opacity-0">
                Plus 2
              </p>
              <div className="absolute hover:w-[100%] h-full">
                <div className="relative z-10 w-full h-full px-5 py-10 rounded  opacity-0 backdrop-blur-[5px] hover:opacity-100 duration-300 delay-200 flex flex-col justify-center items-center">
                  <h2 className="mb-1 text-[1.1rem] xl:text-[1.2rem] font-semibold font-mono tracking-widest text-[#e0644b] title-font">
                    Plus 2
                  </h2>
                  <p className="leading-relaxed text-[#2e2e2e]  text-center font-semibold ">
                    We got a long experience in teaching science and commerce
                    faculty with over 50,000+ alumni all over the world.
                  </p>
                  <button className="py-2 mt-3 border uppercase border-[#2e2e2e]  px-[1.25em] text-[#2e2e2e] hover:border-[#e0644b] hover:text-[#e0644b] font-semibold">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-[16em] w-[15em] absolute top-[60%] left-[45%] lg:left-[50%] active:inset-0 focus:inset-0 hover:z-[1] xl:h-[20em] xl:w-[18em]"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="relative flex flex-col flex-wrap justify-center w-full h-full duration-300 delay-200 border cursor-pointer hover:rounded group ">
              <img
                alt="graduates"
                className="object-cover object-center w-full h-full border brightness-75"
                src="https://img.freepik.com/free-photo/front-view-young-beautiful-lady-red-t-shirt-black-jeans-holding-different-copybooks-files-smiling-with-bag-white_140725-18639.jpg?w=1060&t=st=1683284841~exp=1683285441~hmac=27adf9f7583136d68a3ef4ffb6e36b2391af2cf0bef4d857500a72ec7c52a35e"
              />
              <p className="text-[1.2rem] font-semibold mb-2 absolute top-[45%] left-[33%] sm:left-[20%] md:left-[25%] lg:left-[35%] font-mono text-[#efefef] tracking-widest group-hover:opacity-0">
                Graduates
              </p>
              <div className="absolute hover:w-[100%] h-full">
                <div className="relative z-10 w-full h-full px-6 rounded  opacity-0 backdrop-blur-[5px] hover:opacity-100 duration-300 delay-200 flex flex-col justify-center items-center">
                  <h2 className="mb-1 text-[1.1rem] xl:text-[1.2rem] font-semibold font-mono tracking-widest text-[#e0644b] title-font">
                    Graduates
                  </h2>
                  <p className="leading-relaxed text-[#2e2e2e]  text-center font-semibold ">
                    We got a long experience in teaching BCA, BBS, and MBS
                    faculty with over 5,000+ alumni all over the world.
                  </p>
                  <button className="py-2 mt-3 border uppercase border-[#2e2e2e]  px-[1.25em] text-[#2e2e2e] hover:border-[#e0644b] hover:text-[#e0644b] font-semibold">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-around">
          <div className="">
            <img
              src="https://img.freepik.com/free-photo/girl-elementary-school-student-with-backpack-book_169016-1839.jpg?w=900&t=st=1683282329~exp=1683282929~hmac=663a5e8286895c81f6a87b628d4055fb1af61f083ba73706497cc26f3384a782"
              alt=""
              className="object-cover"
            />
          </div>
          <div className="mt-10">
            <img
              src="https://img.freepik.com/free-photo/young-smiling-pretty-caucasian-schoolgirl-wearing-back-bag-points-side-holding-books-green-with-copy-space_141793-62650.jpg?w=1060&t=st=1683282812~exp=1683283412~hmac=fd8652aedfaabddb4842d9352b0284a9421e41a645598dec2a480f24c5ed2d92"
              alt=""
              className="object-cover"
            />
          </div>
          <div className="hidden md:block lg:hidden xl:block">
            <img
              src="https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=1060&t=st=1683282886~exp=1683283486~hmac=2bd7a0c000df4aff8365b4eb51a84017fa07dfffae56ef93d2f662a43d5972e8"
              alt=""
              className="object-cover"
            />
          </div>
        </div> */}
        {/* <div className="md:hidden lg:block xl:hidden"> */}
        {/* <div className="absolute top-[75%] flex left-[15%]">
          <img
            src="https://img.freepik.com/free-photo/front-view-young-beautiful-lady-red-t-shirt-black-jeans-holding-different-copybooks-files-smiling-with-bag-white_140725-18639.jpg?w=1060&t=st=1683284841~exp=1683285441~hmac=27adf9f7583136d68a3ef4ffb6e36b2391af2cf0bef4d857500a72ec7c52a35e"
            alt=""
            className="object-cover h-[20em]"
          />
        </div> */}
      </div>
    </>
  );
};

export default Courses;
