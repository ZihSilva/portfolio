import { Link } from "react-scroll";
import Button from "./Button";

export function Test() {
  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white grid w-90% h-screen m-auto flex-col  items-center font-myfont">
      <div className="w-2/3 sm:w-4/5 lg:w-9/12 mx-auto flex justify-center items-center flex-row md:mt-6">        
          <div className="mt-8 mx-auto text-center sm:pl-4 sm:mt-20 md:mb-10 md:pl-4 lg:ml-1">
            <p className="text-stone-500 dark:text-white text-md sm:text-xl sm:mt-10 md:text-lg md:mt-0 mb-1 lg:text-2xl bold font-base">Hi, my name is</p>
            <h5 className="text-yellow mt-2 ml-3 text-3xl md:text-5xl lg:text-6xl mb-1 font-bold">
              Zimarlen Silva
            </h5>
            {/* <p className="text-stone-500 dark:text-white font-light text-md sm:text-3xl  md:text-lg  mb-1 lg:text-2xl lg:mx-10">
              I build websites for the web.
            </p> */}
            <p className="text-stone-500 dark:text-white font-light mt-3 mx-6 text-md sm:text-xl sm:mx-12
             md:text-xl md:mx-32 mb-1 lg:text-2xl lg:mx-32 xl:mx-64 lg:mt-4">
             I'm a front-end developer specializing in React, Javascript and, Tailwind.
            </p>
            <div className="pt-8 pb-2 px-4 ml-2 mb-10 sm:px-3 md:px-4 md:py-3 md:mt-6 lg:pt-8 cursor-pointer">
              <Link to="contact" smooth={true} duration={500}>
                <Button />
              </Link>
            </div>
          </div>
        </div>
      </div>
    
  );
}
