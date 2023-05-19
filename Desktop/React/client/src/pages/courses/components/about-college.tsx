import React from "react";
import { RiBarChartGroupedLine } from "react-icons/ri";
import { GiBookAura } from "react-icons/gi";
const AboutCollege = () => {
  return (
    <>
      <div className="w-full lg:w-[40%] flex flex-col items-center">
        <div className="w-[75%] md:w-[90%]">
          <div className="flex justify-around w-full pr-8">
            <div className=""></div>

            <div className="w-[10em] h-[10em] flex items-center justify-center border-[10px] border-red-100 rounded-full bg-[whitesmoke]">
              <img
                src="https://vac.edu.np/images/school.png"
                alt=""
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="w-[24em]">
              <div className="w-[full] h-[10.5em] flex items-center justify-between bg-red-100 rounded-full px-4">
                <div className="w-[60%]">
                  <div className="w-full">
                    <div className="flex justify-center">
                      <img
                        src="https://img.freepik.com/free-photo/fun-3d-illustration-super-santa-claus-with-vr-helmet_183364-81251.jpg?w=826&t=st=1682836479~exp=1682837079~hmac=48233d6607162dc444886dceda32dc8b534822561e30de23a7cee6ddfa5d8c45"
                        alt=""
                        className="h-[1.5em] w-[1.5em] rounded object-cover"
                      />
                      <img
                        src="https://as2.ftcdn.net/v2/jpg/05/47/71/47/1000_F_547714760_sEcPXwbXcV834mc2IINTpWbtx6jsCrk9.jpg"
                        alt=""
                        className="h-[1.5em] w-[1.5em] rounded object-cover"
                      />
                      <img
                        src="https://img.freepik.com/free-photo/cute-woman-hold-hands-gesture-empty-spec-business-woman-concept-pink-background-3d-rendering_56104-1468.jpg?w=1060&t=st=1682836709~exp=1682837309~hmac=fea01c3ac182df773b5ed949d617b5fcfac9c9667a2fe229081e8c94ee2271b5"
                        alt=""
                        className="h-[1.5em] w-[1.5em] rounded object-cover"
                      />
                    </div>
                    <div className="flex justify-center mt-2">
                      <div className="text-center">
                        <p className="text-[1.2rem] leading-4 font-semibold text-[#595959]">
                          55K+
                        </p>
                        <p className="text-[.9rem] text-[#595959] font-semibold">
                          Alumni
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[8.75em] h-[8.75em] rounded-full border-[4px] border-white">
                  <img
                    src="https://vac.edu.np/images/logo.png"
                    alt=""
                    className="object-cover w-full h-full rounded-[inherit]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative isolate">
            <div className="flex justify-center">
              <div className="w-[24em] flex">
                <div className="flex-1">
                  <div className="h-[10.5em] w-[10.5em] bg-[#2e2e2e] rounded-full flex flex-col justify-center items-center text-center">
                    <RiBarChartGroupedLine className="text-[#efefef] text-[3rem]" />
                    <p className="text-[#efefef] text-[.85rem]">
                      Rich Educational <br /> Goals
                    </p>
                  </div>
                  <div className="h-[10.5em] w-[10.5em] hover:border-[5px] rounded-full border-[#e3e0e0] delay-200 duration-150">
                    <img
                      src="https://img.freepik.com/free-photo/casual-clothes-portrait-attractive-young-woman-standing-office-with-black-bag_146671-16554.jpg?w=1060&t=st=1682838426~exp=1682839026~hmac=1254f66c8f334d2236936e190188f5bed892a9b99d985abebe2a25ee4bcd2ba2"
                      alt=""
                      className="rounded-[inherit] object-cover h-full w-full"
                    />
                  </div>
                </div>
                <div className="flex-1 hover:border-[5px] rounded-full border-[#e3e0e0] delay-200 duration-150 relative -z-20">
                  <img
                    src="https://img.freepik.com/free-photo/cute-young-businesswoman-working-with-laptop-having-great-idea-3d-illustration-cartoon-character_56104-1636.jpg?w=826&t=st=1682837452~exp=1682838052~hmac=540cedc477c0e41b2dde3dfaddb353dab838c6e1fb10076154676c16ad5f3733"
                    alt=""
                    className="rounded-[inherit] object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#2e2e2e] rounded-ss-[3em] h-[13em] absolute w-full -bottom-[10em] -z-10 lg:flex justify-end pr-[15%] hidden">
              <div className="flex flex-col items-center mt-4 text-center">
                <GiBookAura className="text-[2rem] text-[#efefef]"/>
                <p className="text-[.9rem] text-[#efefef] mt-2 ">
                  Manage your <br /> Educational career
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCollege;
