import React, { useEffect } from "react";
import College from "../../../../assets/landing-college.jpg";
// import Background from "../../../../assets/vac.png";
import Background from "../../../../assets/flat-geometric-background.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";
const WeAre = () => {
  return (
    <>
      <div className="relative">
        {/* <img
          src={Background}
          alt=""
          className="absolute top-0 object-cover w-full h-full"
        /> */}
        <div className="w-full lg:flex bg-[#fff]">
          <div
            className=" flex flex-col justify-center  items-center flex-1 h-[35em] lg:h-screen px-[2em] lg:pl-[4em] xl:pr-[4em] w-full"
            style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className=" sm:w-[80%] lg:w-[100%]"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1000"
            >
              <div className="leading-[3.5rem] select-none">
                <p className="w-fit text-[2rem] text-[#585858] capitalize font-mono">
                  Innovative learning
                </p>
                <p className="font-extrabold tracking-wider text-[5rem] text-[#585858] capitalize font-mono">
                  Culture
                </p>
              </div>
              <p className="uppercase text-[1rem] w-fit relative font-semibold text-[#e0644b] mt-4 before:content-[''] before:absolute before:bg-[#e0644b] before:w-[58%] before:h-[2px] before:bottom-0 before:right-0">
                Learn with Vishwa Adarsha
              </p>
              <div className=" text-[#585858] mt-6 lg:px-4 text-justify">
                <span className="text-[2.5rem] leading-5 -mr-1">W</span>
                <span className="text-[1.1rem] font-semibold">
                  elcome to Vishwa Adarsha College - the premier institution for
                  higher education in Eastern Nepal. Our experienced faculty and
                  state-of-the-art facilities provide a peaceful academic
                  environment that promotes academic excellence.
                </span>
              </div>
              <button className="mt-5 font-bold tracking-wider uppercase border px-[2em] py-[.8em] text-[#585858] border-[#e0644b] hover:shadow hover:shadow-[#e0644b] hover:tracking-widest hover:delay-[150ms] duration-100 rounded-sm hover:translate-x-2 hover:translate-y-3 hover:backdrop-blur-sm">
                explore
              </button>
            </div>
          </div>

          <div className="inset-0 flex flex-col items-center justify-center flex-1">
            <div
              className="px-[1em] sm:px[2em]"
              // data-aos="fade-left"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="flex items-end">
                <div className="flex h-[7em] w-[7em] sm:h-[8em] sm:w-[8em] lg:h-[7em] lg:w-[7em] xl:h-[8em] xl:w-[8em] justify-center items-center">
                  <BsFillPlayCircleFill className="text-[3rem] text-blue-500 cursor-pointer" />
                </div>
                <div className="flex">
                  <div className="">
                    <div className="h-[7em] w-[7em] sm:h-[8em] sm:w-[8em] lg:h-[7em] lg:w-[7em] xl:h-[8em] xl:w-[8em] rounded-full">
                      <img
                        src="https://img.freepik.com/free-photo/confident-male-teacher-wearing-glasses-sitting-table-with-school-tools-classroom_141793-114409.jpg?w=1060&t=st=1683272071~exp=1683272671~hmac=2deb17f95b2fe3fc0091993e66fa20ad2f5c4e089277dfeae55bc2f1172472c9"
                        alt=""
                        className="w-full h-full rounded-[inherit] object-cover"
                      />
                    </div>
                    <div className="h-[7em] w-[7em] sm:h-[8em] sm:w-[8em] lg:h-[7em] lg:w-[7em] xl:h-[8em] xl:w-[8em] bg-green-500 flex flex-col justify-center items-center leading-4 ">
                      <span className="text-[1.1rem] text-[#fff] font-semibold">
                        1000+
                      </span>
                      <span className="text-[.8rem] text-[#fff]">Students</span>
                    </div>
                  </div>
                  <div className="">
                    <div className="h-[7em] w-[7em] sm:h-[8em] sm:w-[8em] lg:h-[7em] lg:w-[7em] xl:h-[8em] xl:w-[8em] rounded-r-full bg-orange-400"></div>
                    <div className="h-[7em] w-[7em] sm:h-[8em] sm:w-[8em] lg:h-[7em] lg:w-[7em] xl:h-[8em] xl:w-[8em] rounded-full">
                      <img
                        src="https://img.freepik.com/free-photo/young-goalkeeper-soccer-man-isolated-academy-soccer-team_1150-14674.jpg?w=1060&t=st=1683272539~exp=1683273139~hmac=6562405fdc5564a8dcde3686037fa689117556a9339947b6406c865386f0f276"
                        alt=""
                        className="w-full h-full rounded-[inherit] object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[7em] sm:w-[8em] lg:w-[7em] xl:w-[8em] h-[14em] sm:h-[16em] rounded-t-full bg-sky-500"></div>
              </div>
              <div className="flex">
                <div className="h-[7em] w-[7em] sm:h-[8em] sm:w-[8em] lg:h-[7em] lg:w-[7em] xl:h-[8em] xl:w-[8em] bg-blue-500">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-cute-young-brunette-student-holding-exercise-books-isolated-white-wall_231208-11488.jpg?w=1060&t=st=1683269386~exp=1683269986~hmac=58c8452984cc2b627a243c16f2ae525fa788891e39adbaa7e01e24333ee078bb"
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="h-[7em] w-[7em] sm:h-[8em] sm:w-[8em] lg:h-[7em] lg:w-[7em] xl:h-[8em] xl:w-[8em] bg-fuchsia-500 rounded-t-full"></div>
                <div className="h-[7em] w-[7em] sm:h-[8em] sm:w-[8em] lg:h-[7em] lg:w-[7em] xl:h-[8em] xl:w-[8em] bg-[lightgray]"></div>
                <div className="h-[7em] w-[7em] sm:h-[8em] sm:w-[8em] lg:h-[7em] lg:w-[7em] xl:h-[8em] xl:w-[8em] bg-teal-700 rounded-l-full rounded-b-full flex justify-center items-center flex-col leading-4 select-none">
                  <span className="text-[1.1rem] text-[#efefef] font-semibold">
                    50+
                  </span>
                  <span className="text-[.8rem] text-[#efefef]">Teachers</span>
                </div>
              </div>
              <div className="flex">
                <div className="h-[7em] w-[7em] sm:h-[8em] sm:w-[8em] lg:h-[7em] lg:w-[7em] xl:h-[8em] xl:w-[8em] bg-blue-500 rounded-t-full rounded-l-full"></div>
                <div className="h-[7em] w-[7em] sm:h-[8em] sm:w-[8em] lg:h-[7em] lg:w-[7em] xl:h-[8em] xl:w-[8em] bg-[#e0644b] rounded-full flex justify-center items-center flex-col leading-4 select-none">
                  <span className="text-[#efefef] font-semibold text-[1.1rem] tracking-wider">
                    55k
                  </span>
                  <span className="text-[#efefef] text-[.8rem]">Alumni</span>
                </div>
                <div className="h-[7em] w-[14em] sm:h-[8em] sm:w-[16em] bg-green-500 rounded-r-full">
                  <img
                    src={College}
                    alt=""
                    className="rounded-[inherit] w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeAre;

// <div className="mt-[2em] px-[2em] lg:px-[2.5em] ">
//   <div className="md:hidden">
//     <p className="uppercase text-[1rem] w-fit relative font-semibold text-[#e0644b] mt-4 before:content-[''] before:absolute before:bg-[#e0644b] before:w-[66%] before:h-[2px] before:bottom-0 ]">
//       Who We are
//     </p>
//     <p className="text-[2rem] font-bold text-[#595959] leading-[2.5rem] sm:w-[14em] mt-5">
//       About{" "}
//       <span className="w-fit text-[#e0644b] relative before:content-[''] before:absolute before:bg-[#e0644b] before:w-[98%] before:h-[3px] before:bottom-1 before:left-1">
//         Vishwa Adarsha
//       </span>
//     </p>
//   </div>
//   <div className="flex flex-col-reverse items-center justify-around mt-4 md:flex-row gap-x-3 ">
//     <div className="md:w-1/2">
//       <div className="hidden md:block">
//         <p className="uppercase text-[1rem] w-fit relative font-semibold text-[#e0644b] mt-4 before:content-[''] before:absolute before:bg-[#e0644b] before:w-[66%] before:h-[2px] before:bottom-0 ]">
//           Who We are
//         </p>
//         <p className="text-[2rem] font-bold text-[#595959] leading-[2.5rem] sm:w-[14em] mt-5">
//           About{" "}
//           <span className="w-fit text-[#e0644b] relative before:content-[''] before:absolute before:bg-[#e0644b] before:w-[98%] before:h-[3px] before:bottom-1 before:left-1">
//             Vishwa Adarsha
//           </span>
//         </p>
//       </div>
//       <p className="text-[#2e2e2e] mt-4 text-justify text-[1.05rem] lg:text-[1.05rem] font-semibold">
//         Welcome to Vishwa Adarsha College - the premier institution for higher
//         education in Eastern Nepal. Our experienced faculty and
//         state-of-the-art facilities provide a peaceful academic environment
//         that promotes academic excellence. Join our community and be part of
//         our legacy of success.
//       </p>
//       <button className="mt-5 font-semibold tracking-wider uppercase border px-[2em] py-[.8em] text-[#585858] border-[#e0644b] hover:shadow hover:shadow-[#e0644b]">
//         explore
//       </button>
//     </div>

//     <div
//       className="relative w-full md:w-[45%]"
//       data-aos="fade-up"
//       data-aos-anchor-placement="center-bottom"
//     >
//       <img
//         src={College}
//         alt="Vishwa Adarsha College"
//         className=" w-full h-[15em] sm:h-[20em] lg:h-[26em] object-cover mt-2 md:mt-0 hover:shadow-lg about-image"
//       />
//       {/* <div className="absolute top-[72.5%] sm:top-[79.2%] md:top-[77.75%] lg:top-[80.9%] bg-[#de553a] w-fit text-center text-[#fff] px-2 py-1 cursor-pointer select-none">
//             <p className=" text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] tracking-wider font-semibold ">
//               24+
//             </p>
//             <p className=" text-[1rem] md:text-[.9rem] lg:text-[1rem] font-semibold capitalize">
//               Years experience
//             </p>
//           </div> */}
//     </div>
//   </div>
// </div>;
