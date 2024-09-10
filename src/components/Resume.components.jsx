import React from "react";

// icon
import Gmail from "../image/gmail-new-logo.png";
import ReactTools from "../image/redux_white.svg";
import { FaFileWord } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { SiMicrosoftpowerpoint } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

const ResumeComponents = () => {
  return (
    <div
      className=" z-10 md:h-[7%] max-sm:h-[6%]  "
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      id="resume"
    >
      <div className=" flex flex-col justify-evenly gap-3 h-full">
        <div className=" h-[30%] flex justify-evenly flex-col">
          <div className=" max-sm:w-1/2 border border-zinc-700 w-1/6 flex items-center justify-evenly p-2 rounded-2xl">
            <PiStarFourFill />
            <p>Resume</p>
          </div>
          <div className=" max-sm:text-4xl w-full md:text-6xl ">
            <h1>Education and favourite tools</h1>
          </div>
          {/* <div>
            <h1 className=" md:text-xl max-sm:text-lg">
              Be what you would seem to be - or, if you'd like it put more
              simply - never imagine yourself not to be otherwise than what it
              might appear to others that what you were or might have been was
              not otherwise than what you had been would have appeared to them
              to be otherwise.
            </h1>
          </div> */}
        </div>
        {/* education */}
        <div
          className=" md:h-[35%] max-sm:h-[40%] flex flex-col justify-evenly"
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 className=" md:text-5xl max-sm:text-2xl">My education</h1>
          <div className=" w-full h-[84%]">
            <div className="w-full h-full max-sm:flex max-sm:flex-col max-sm:justify-between">
              <div className="max-sm:h-full flex max-sm:flex-col justify-between md:items-center border-y border-gray-600 py-5 ">
                <div className=" md:w-[20%]">
                  <p className="  text-gray-500 md:text-lg">2012</p>
                </div>
                <div className=" md:w-[40%]">
                  <h1 className="text-2xl"> Myanmar(Dagon university)</h1>
                  <p className=" text-lg text-slate-500">in Yangon</p>
                </div>
                <div className="md:w-[40%]">
                  <p className="  text-xl text-gray-500">Final Years.</p>
                </div>
              </div>

              {/* <div className="max-sm:h-[50%] flex max-sm:flex-col justify-between md:items-center border-y border-gray-600 py-5 ">
                <div className=" md:w-[20%]">
                  <p className="  text-gray-500 md:text-lg">2021</p>
                </div>
                <div className=" md:w-[40%]">
                  <h1 className="text-2xl">Computer Basic </h1>
                  <p className=" text-lg text-slate-500">KMD Class in yangon</p>
                </div>
                <div className="md:w-[40%]">
                  <p className="  text-xl text-gray-500">
                    Computer Basic,G-Mail(system),Microsoft Word,Excel and
                    PowerPoint
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* WorkExprement */}
        {/* <div
          className=" h-[45%] flex flex-col justify-evenly"
          data-aos="zoom-in-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 className=" md:text-5xl max-sm:text-2xl">Work experience</h1>
          <div className=" w-full h-[85%]">
            <div className="w-full h-full max-sm:flex max-sm:flex-col max-sm:justify-between">
              <div className="max-sm:h-[45%] flex max-sm:flex-col justify-between md:items-center border-y border-gray-600 py-5 ">
                <div className=" md:w-[20%]">
                  <p className="  text-gray-500 md:text-lg">2012-2013</p>
                </div>
                <div className=" md:w-[40%]">
                  <h1 className="text-2xl"> UI/UX Design Specialization </h1>
                  <p className=" text-lg text-slate-500">
                    MMSIt Class by Sayar Hein Htet Zan
                  </p>
                </div>
                <div className="md:w-[40%]">
                  <p className="  text-xl text-gray-500">
                    Research, design, and prototype effective, visually-driven
                    websites and apps.
                  </p>
                </div>
              </div>

              <div className="max-sm:h-[45%] flex max-sm:flex-col justify-between md:items-center border-y border-gray-600 py-5 ">
                <div className=" md:w-[20%]">
                  <p className="  text-gray-500 md:text-lg">2012-2013</p>
                </div>
                <div className=" md:w-[40%]">
                  <h1 className="text-2xl"> UI/UX Design Specialization </h1>
                  <p className=" text-lg text-slate-500">
                    MMSIt Class by Sayar Hein Htet Zan
                  </p>
                </div>
                <div className="md:w-[40%]">
                  <p className="  text-xl text-gray-500">
                    Research, design, and prototype effective, visually-driven
                    websites and apps.
                  </p>
                </div>
              </div>

              <div className="max-sm:h-[45%] flex max-sm:flex-col justify-between md:items-center border-y border-gray-600 py-5 ">
                <div className=" md:w-[20%]">
                  <p className="  text-gray-500 md:text-lg">2012-2013</p>
                </div>
                <div className=" md:w-[40%]">
                  <h1 className="text-2xl"> UI/UX Design Specialization </h1>
                  <p className=" text-lg text-slate-500">
                    MMSIt Class by Sayar Hein Htet Zan
                  </p>
                </div>
                <div className="md:w-[40%]">
                  <p className="  text-xl text-gray-500">
                    Research, design, and prototype effective, visually-driven
                    websites and apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* My favourite tools */}
        {/* <div
          className=" h-[30%]"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        > */}
        {/* <div className="h-full max-sm:flex max-sm:flex-col justify-evenly"> */}
        {/* <h1 className=" md:text-5xl max-sm:text-2xl">My favourite tools</h1>
            <div className=" max-sm:w-[90%] max-sm:mx-auto   h-[85%] max-sm:flex max-sm:justify-center max-sm:items-center">
              <div className="md:flex md:flex-wrap  md:gap-[5%] md:items-center h-full md:h-full max-sm:flex max-sm:flex-wrap max-sm:items-center max-sm: justify-between">
                <div className=" max-sm:w-[40%] max-sm:h-[40%] h-[40%] border border-zinc-600  rounded-xl flex flex-col justify-evenly items-center w-[20%] ">
                  <div className="h-[50%]">
                    <img className="h-full " src={Gmail} />
                  </div>
                  <p className=" md:text-xl">Gmail</p>
                </div>

                <div className=" max-sm:w-[40%] max-sm:h-[40%] h-[40%] border border-zinc-600  rounded-xl flex flex-col justify-evenly items-center w-[20%] ">
                  <div className="h-[50%]">
                    <FaFileWord className=" text-[100%] h-full w-full  text-cyan-700" />
                  </div>
                  <p className=" md:text-xl">Word</p>
                </div>
                <div className="max-sm:w-[40%] max-sm:h-[40%] h-[40%] border border-zinc-600  rounded-xl flex flex-col justify-evenly items-center w-[20%]">
                  <div className="h-[50%]">
                    <RiFileExcel2Fill className=" text-[100%] h-full w-full  text-green-700" />
                  </div>
                  <p className=" md:text-xl">Excel</p>
                </div>

                <div className="max-sm:w-[40%] max-sm:h-[40%] h-[40%] border border-zinc-600  rounded-xl flex flex-col justify-evenly items-center w-[20%]">
                  <div className="h-[50%]">
                    <SiMicrosoftpowerpoint className=" text-[100%] h-full w-full  text-orange-700" />
                  </div>
                  <p className=" md:text-xl">Power Ponit</p>
                </div> */}
        {/* <div className="max-sm:w-[40%] max-sm:h-[22%] h-[40%] border border-zinc-600  rounded-xl flex flex-col justify-evenly items-center w-[20%]">
                  <div className="h-[50%]">
                    <FaHtml5 className=" text-[100%] h-full w-full  text-orange-700" />
                  </div>
                  <p className=" md:text-xl">HTML</p>
                </div>

                <div className="max-sm:w-[40%] max-sm:h-[22%] h-[40%] border border-zinc-600  rounded-xl flex flex-col justify-evenly items-center w-[20%]">
                  <div className="h-[50%]">
                    <SiCss3 className=" text-[100%] h-full w-full  text-sky-700" />
                  </div>
                  <p className=" md:text-xl">CSS</p>
                </div>

                <div className="max-sm:w-[40%] max-sm:h-[22%] h-[40%] border border-zinc-600  rounded-xl flex flex-col justify-evenly items-center w-[20%]">
                  <div className="h-[50%]">
                    <RiJavascriptFill className=" text-[100%] h-full w-full  text-yellow-400" />
                  </div>
                  <p className=" md:text-xl">Java Script</p>
                </div>

                <div className="max-sm:w-[40%] max-sm:h-[22%] h-[40%] border border-zinc-600  rounded-xl flex flex-col justify-evenly items-center w-[20%]">
                  <div className="h-[50%]">
                    <FaReact className=" text-[100%] h-full w-full  text-sky-400" />
                  </div>
                  <p className=" md:text-xl">React</p>
                </div>
                <div className="max-sm:w-[40%] max-sm:h-[22%] h-[40%] border border-zinc-600  rounded-xl   flex flex-col justify-evenly items-center w-[20%]">
                  <img
                    className="h-1/2 bg-purple-500 rounded-md "
                    src={ReactTools}
                  />
                  <p className=" md:text-xl ">Redux Toolkit</p>
                </div> */}
        {/* </div>
            </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ResumeComponents;
