import React from "react";
import Skills from "../Skills/Skills";
export function AboutMe() {
  return (
    <div
      name="about"
      className="bg-white dark:bg-slate-900 dark:text-white flex w-full justify-center flex-col items-center "
    >
      <div className="w-2/3 sm:w-3/5 lg:w-8/12 mt-10 flex flex-col justify-center">
        <div className="text-center font-bold">
          <h1 className="text-stone-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
        <div className="grid sm:ml-3  md:gap-2 mt-8 md:pt-3 ">
          <div className="text-stone-500 md:flex-cols-2 px-6 pb-2 text-md sm:text-lg md:text-xl lg:text-2xl "></div>
          <div className="relative animate-bounce bg-purple-100 rounded border h-10 w-2/5 sm:w-28 ml-3 lg:ml-6">
            <span className="flex  justify-center mt-1 text-stone-800 text-xl sm:text-2xl">
              hello.
            </span>
            <div className="left-[39px] absolute bg-purple-100 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4  border-r border-b border-yellow-500"></div>
          </div>

          <div className="px-2  pt-6 lg:px-6 lg:pt-8 pb-8 text-stone-500">
            <h2 className=" text-green-500 ml-2 lg:ml-10 text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
              I am Zimarlen, a front-end web developer.
            </h2>

            <p className="font-light mt-8 text-lg lg:px-14">
              I specialize in creating beautiful, usable, and professional
              websites. A year ago I made a career transition from teaching in a
              lively preschool to becoming a web developer. I'm thrilled to be
              working in an industry that marries my two passions: logic and
              creative design.
            </p>
            <p className="font-light text-lg mt-4 lg:px-14">
              Today, I'm proficient in <strong className="text-normal text-amber-500">HTML, CSS, JavaScript, React, and
              Tailwind,</strong> and I'm always eager to learn more. 
              <p>When I'm not coding, I love being in nature and I'm also a big fan of mindfulness
              practices like yoga and meditation, as well as diverse music
              genres.</p>
              <p>I'm always looking for creative people to vibe with, let's
              connect through my social channels.</p> 
            </p>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}
