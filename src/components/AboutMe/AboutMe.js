import React from "react";
import Skills from "../Skills/Skills";
export function AboutMe() {
  return (
    <div
      name="about"
      className="bg-white dark:bg-slate-900 dark:text-white flex w-full justify-center flex-col items-center font-myfont "
    >
      <div className="w-2/3 sm:w-4/5 lg:w-9/12 mt-10 flex flex-col justify-center">
        <div className="text-center font-bold">
          <h1 className="text-stone-600  text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center border-b-4 border-yellow inline">
            About Me
          </h1>
        </div>
        <div className="grid sm: ml-3 md:grid-cols-2 md:gap-2 mt-5 md:pt-3 ">
          <div className="text-stone-500 text-md sm:text-2xl md:text-3xl px-6 font-bold md:text-right md:ml-15 ">
            <p>Hello, my name Zimarlen</p>
          </div>
          <div className="text-base  md:text-lg mt-2 md:mt-0">
            <p className="px-6 pb-8 text-md text-md sm:text-lg md:text-xl lg:text-2xl md:text-left text-stone-500">
              As a web developer, I am committed to creating clean, readable,
              and accessible code using HTML, CSS, Javascript, React and, Tailwind. My background in
              education and law has equipped me with a range of soft skills,
              including problem-solving, critical thinking, and strong
              communication and interpersonal abilities. I am passionate about
              turning my ideas into digital form and bringing them to life.
            </p>
          </div>
        </div>
      </div>
      <Skills />
    </div>
    
  );
}
