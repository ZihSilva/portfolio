import profilePhoto from "../../images/profilePhoto.jpeg";
import { Link } from "react-scroll";
import Button from "./Button";
import TypewritterEf from "../Typewritter/Typewritter";


export function HomePage() {
  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white grid w-90% h-screen m-auto flex-col  items-center font-myfont">
      <div className="w-2/3 sm:w-4/5 lg:w-9/12 mx-auto flex justify-center items-center flex-row md:mt-6">
        <div className="sm:flex gap-2 items-center ">
          <div className="flex justify-center mx-auto mt-20px my-8 flex-grow">
            <img
              src={profilePhoto}
              alt="profile"
              className="w-1/2 sm:w-10/12 md:w-4/5 lg:w-4/5 sm:ml-20 rounded-full justify-center object-cover h-full shadow-md ring-8 ring-slate-300 ring-offset-2 sm:rounded-full md:rounded-full lg:rounded-full"
            />
          </div>
          <div className="mt-8 mx-auto text-center sm:pl-4 sm:mt-20 md:mb-10 md:pl-4 lg:ml-1">
            <p className="text-stone-500 dark:text-white text-md sm:text-xl sm:mt-10 md:text-lg md:mt-0 mb-1 lg:text-2xl bold font-base">Hello, I'm</p>
            <h5 className="text-yellow mt-1 ml-3 text-3xl sm:text-3xl md:text-4xl lg:text-6xl mb-1 font-bold">
            <TypewritterEf text="  Zimarlen " />
            </h5>
            <p className="text-stone-500 dark:text-white font-light text-md sm:text-xl  md:text-lg  mb-1 lg:text-2xl lg:mx-10">
              a Front-End Web Developer 
            </p>
            <p className="text-stone-500 dark:text-white font-light text-md sm:text-xl  md:text-lg  mb-1 lg:text-2xl lg:mx-10">
             specializing in React, Javascript and, Tailwind.
            </p>
            <div className="pt-8 pb-2 px-4 ml-2 mb-10 sm:px-3 md:px-4 md:py-3 md:mt-6 lg:pt-8 cursor-pointer">
              <Link to="contact" smooth={true} duration={500}>
                <Button />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
