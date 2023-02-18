import React from "react";
import Skills from "../Skills/Skills";
export function AboutMe() {
  return (
    <div
      name="about"
      className="bg-white dark:bg-slate-900 dark:text-white flex w-full justify-center flex-col items-center "
    >
      <div className="w-2/3 sm:w-4/5 lg:w-9/12 mt-10 flex flex-col justify-center">
        <div className="text-center font-bold">
          <h1 className="text-stone-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl border-b-4 border-yellow inline">
            About Me
          </h1>
        </div>
        <div className="grid sm:ml-3 md:grid-cols-2 md:gap-2 mt-8 md:pt-3 ">
          <div className="text-stone-500 px-6 pb-8 text-md  sm:text-lg md:text-xl lg:text-2xl ">
            <p>
              {" "}
              Hello there! My name is Zimarlen, and I'm a web developer based in
              Canada. I'm thrilled to be working in an industry that marries my
              two passions: logic and creative design.{" "}
            </p>
            <p>
              You may be wondering how I got started in this field. Well, almost
              a year ago I made a career transition from teaching in a lively
              preschool to becoming a web developer.
            </p>
          </div>
          <div className="text-base">
            <p className="px-6 pb-8 text-md  sm:text-lg md:text-xl lg:text-2xl md:text-left text-stone-500">
              Today, I'm proficient in HTML, CSS, JavaScript, React, and
              Tailwind, and I'm always eager to learn more.
               <p></p>When I'm not coding, I enjoy spending time outdoors, I love being in nature. I'm also a big fan of mindfulness practices like yoga
              and meditation, as well as diverse music genres. Let's work together to bring your digital dreams to life!
            </p>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}
