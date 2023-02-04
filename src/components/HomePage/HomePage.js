import profilePhoto from "../../images/profilePhoto.jpeg";
import { Link } from "react-scroll";
import Button from "./Button";

export function HomePage() {
  return (
    <div className="bg-blue-50 dark:bg-slate-900 dark:text-white w-full sm:pb-10 lg:pb-20 flex-col flex items-center font-myfont">
      <div className="w-2/3 mx-auto flex justify-center items-center flex-row md:mt-6">
        <div className="sm:flex gap-2 items-center">
          <div className="mx-4 my-8 flex-grow">
            <img
              src={profilePhoto}
              alt="profile"
              className="w-40 sm:w-60 lg:w-80 rounded-full justify-center object-cover h-full shadow-md ring-8 ring-slate-200 ring-offset-2   sm:rounded-full md:rounded-full lg:rounded-full sm:mx-4 sm:mr-2 md:ml-2"
            />
          </div>
          <div className="mt-8 mx-auto text-center  sm:pl-4 sm:mt-20 md:pl-4">
            <p className="text-stone-500 text-md sm:text-lg mb-1">Hi, I am</p>
            <h1 className="text-yellow  text-2xl md:text-4xl lg:text-5xl mb-1 font-bold overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
              Zimarlen 👋
            </h1>
            {/* <h1 className="text-yellow  text-2xl md:text-4xl lg:text-5xl mb-1 font-bold">
              Zimarlen Silva
            </h1> */}
            <p className="text-stone-500 text-sm sm:text-lg mb-1">
              I'm a Front-End Web Developer
            </p>
            <div className="pt-6  pb-2 px-4 ml-2 mb-10 sm:mt-4 sm:px-3 md:px-4 md:py-3 md:mt-6 mt-2 ">
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
