import React from "react";

export function AboutMe() {
  return (
    <div
      name="about"
      className="bg-blue-200 dark:bg-slate-900 dark:text-white w-full  flex-col flex items-center font-myfont "
    >
      <div className="w-2/3 mx-auto h-full flex flex-col justify-center">
        <div className="text-center font-bold mt-6">
          <h1 className="text-stone-600 text-3xl text-center border-b-4 border-blue-500 inline">
            About Me
          </h1>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6 mt-5 md:pt-3">
          <div className="text-stone-500 text-xl px-4 font-bold md:text-right">
            <p>Hi, I'm Zimarlen Silva. Welcome to my portfolio.</p>
          </div>
          <div className="text-base  md:text-lg mt-2 md:mt-0">
            <p className="px-4 pb-8 text-md md:text-md md:text-left text-stone-500">
              As a web developer, I am committed to creating clean, readable,
              and accessible code using HTML, CSS, and React. My background in
              education and law has equipped me with a range of soft skills,
              including problem-solving, critical thinking, and strong
              communication and interpersonal abilities. I am passionate about
              turning my ideas into digital form and bringing them to life. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
