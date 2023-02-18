import React from "react";

import { IoIosArrowForward } from "react-icons/io";

import data from "../../data";

const Project = () => {
  return (
    <section
      name="project"
      className="bg-blue-50 dark:bg-slate-900 dark:text-white max-h-full py-6 px-3 w-full flex-col flex items-center font-myfont justify-center"
    >
      <div className="sm:w-2/3 md: w-8/12  lg:w-9/12 mx-auto h-full px-2 flex flex-col justify-center">
        <div className="text-center md:text-center font-bold">
        <h1 className="text-stone-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl border-b-4 border-yellow inline">
            Projects
          </h1>
          <p className="my-8 mx-2 text-stone-500 md:text-xl">
            Check out some of the personal projects I have been working on
            lately. For a complete list, visit my
            <a
              className="ml-2 py-1 font-bold tracking-wider cursor-pointer border-yellow border-b-2 hover:border-yellow-300 dark:hover:border-yellow-600 transition ease-in duration-300"
              href="https://github.com/ZihSilva"
              target="_blank"
              rel="noreferrer noopener"
              title="Github Repository"
            >
              Github profile.
            </a>
          </p>
        </div>

        {/* grid container */}
        <div className="mt-4 mx-auto no-repeat center object-cover sm:my-4 md:mt-6 grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* card one */}

          {data.map((project) => {
            return (
              <div key={project.id} className="w-auto">
                <img
                  className="rounded-xl mb-7 transform group-hover:scale-105 transition ease-out duration-300 group shadow-lg overflow-hidden shadow-indigo-500/40 drop-shadow-2xl"
                  src={project.img}
                  alt="/"
                />
                <h3 className="text-xl max-auto md:text-2xl  lg:text-4xl  tracking-wide font-semibold py-2 text-stone-600">
                  {project.title}
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Live Site"
                    className="ml-2 font-normal text-md md:text-xl border-yellow border-b-2 hover:text-yellow-600 transition cursor-pointer ease-in duration-300"
                  >
                    Live Site
                  </a>
                </h3>
                <div className="py-2 flex flex-wrap">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="m-1 md:text-xl border-2 max-auto rounded-lg py-1 px-1 border-slate-300  text-stone-600 text-sm cursor-pointer transition ease-in duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="py-2 max-auto md:text-xl text-stone-500">
                  {project.description}
                </p>
                <div className="flex items-center md:text-xl">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Github Repository"
                    className="text-[15px] md:text-xl max-auto text-stone-600 tracking-wider uppercase text-md font-medium border-stone-400 border-b-2 transition ease-in duration-300 w-max"
                  >
                    View Repository
                  </a>
                  <IoIosArrowForward className="mb-0.5 text-stone-600" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
