import profilePhoto from "../../images/profilePhoto.jpeg";
import { Link } from "react-scroll";

export function HomePage() {
  return (
    <div className="bg-blue-100 dark:bg-slate-900 dark:text-white w-full sm:pb-10 lg:pb-20 flex-col flex items-center font-myfont">
      <div className="w-2/3 mx-auto flex justify-center items-center flex-row md:mt-6">
        <div className="sm:flex gap-2 items-center">
          <div className="mx-4 my-8 flex-grow">
            <img
              src={profilePhoto}
              alt="profile"
              className="w-40 sm:w-60 lg:w-80 rounded-full justify-center object-cover h-full shadow-md ring-8 ring-white ring-offset-6  sm:rounded-full md:rounded-full lg:rounded-full sm:mx-4 sm:mr-2 md:ml-2"
            />
          </div>
          <div className="mt-8 mx-auto text-center  sm:pl-4 sm:mt-20 md:pl-4">
            <p className="text-stone-500 text-md sm:text-lg mb-1">My Name is</p>
            <h1 className="text-blue-700  text-2xl md:text-4xl lg:text-5xl mb-1 font-bold">
              Zimarlen Silva
            </h1>
            <p className="text-stone-500 text-sm sm:text-lg mb-1">
              I'm a Front-End Web Developer
            </p>
            <Link to="contact" smooth={true} duration={500}>
            <button
              className="py-1 px-4 ml-2 mb-10 sm:px-3 md:px-4 md:py-3 md:mt-4 mt-2 border-2 border-yellow-300 bg-yellow-400 rounded-lg text-white font-bold uppercase hover:bg-transparent hover:text-blue-700 duration-300">
             Hire Me
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
