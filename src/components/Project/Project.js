import TSW from "../../images/TSW.png";
import tranquiliTea from "../../images/tranquiliTea.png";
import danceSchool from "../../images/danceSchool.png";

export function Project() {
  return (
    <div
      name="project"
      className="bg-indigo-300 dark:bg-slate-900 dark:text-white min-h-screen py-6 max-h-full w-full flex-col flex items-center font-myfont justify-center"
    >
      <div className="mx-auto h-full flex flex-col justify-center">
        <div className="text-center md:text-center font-bold">
          <h1 className="text-white text-3xl mb-6 sm:text-4xl border-b-4 border-indigo-700 inline">
            Projects
          </h1>
        </div>

        <div className="mt-6 flex-grow sm:my-6 sm:mx-16 grid gap-8">
          <div
            style={{
              backgroundImage: `url(${TSW})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="aspect-video mx-16 md:h-60 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="flex flex-col justify-center w-full h-full px-6 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <div className="relative justify-center text-md sm:text-3xl  md:p-8 sm:ml-8 text-2xl text-white font-bold">
                <p className="ml-10 sm:ml-28">TSW</p>
                <p className="xm:hidden text-sm  sm:text-xl font-bold text-gray-200 mt-2">
                  A travel website build with React JS, JavaScript, CSS, HTML
                  and grommet.
                </p>
                <div className="pl-6">
                  <a
                    href="https://tsw.netlify.app/"
                    className="cursor-pointer block"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <button className="text-sm sm:ml-20 sm:mt-10 sm:p-2 p-1 mt-4 border-2 bg-b border-indigo-700 bg-indigo-700 rounded-lg text-white font-bold uppercase hover:bg-transparent hover:text-indigo-700 duration-300">
                      LIVE DEMO
                    </button>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${tranquiliTea})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="aspect-video mx-16 md:h-60 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="flex flex-col justify-center w-full h-full px-6 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <div className="relative justify-center text-md  sm:text-3xl  md:p-8 h-full w-full text-2xl text-white font-bold">
                <p className="ml-10 sm:ml-20">Tranquili-Tea</p>
                <p className="xm:hidden text-sm sm:text-lg font-bold text-gray-200 mt-2">
                  A tea e-commerce and forum built with React JS, JavaScript,
                  axios, Node.js, Express, MongoDB and Tailwind.
                </p>
                <div className="pl-6">
                  <a
                    href="https://tranquili-tea.netlify.app/"
                    className="cursor-pointer block"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <button className="text-sm p-1 mt-2 border-2 sm:p-2 sm:ml-20 sm:mt-3 border-indigo-700 bg-indigo-700 rounded-lg text-white font-bold uppercase hover:bg-transparent hover:text-indigo-700 duration-300">
                      LIVE DEMO
                    </button>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${danceSchool})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="aspect-video mx-16 md:h-60 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="flex flex-col justify-center w-full h-full px-6 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <div className="relative justify-center text-md  sm:text-3xl  md:p-8 h-full w-full text-2xl text-white font-bold">
                <p className="ml-10 sm:ml-12">LF Dance School</p>
                <p className="xm:hidden text-sm sm:text-lg font-bold text-gray-200 mt-2">
                  A landing page for a dance school using React, Javascript and
                  Tailwind.
                </p>
                <div className="pl-6">
                  <a
                    href="https://leapforwarddanceschool.netlify.app/"
                    className="cursor-pointer block"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <button className="text-sm p-1 mt-2 border-2 sm:p-2 sm:ml-20 sm:mt-8 border-indigo-700 bg-indigo-700 rounded-lg text-white font-bold uppercase hover:bg-transparent hover:text-indigo-700 duration-300">
                      LIVE DEMO
                    </button>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
