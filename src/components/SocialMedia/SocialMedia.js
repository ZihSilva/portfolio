import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { Link } from "react-router-dom";

export function SocialMedia() {
  return (
    <div className="fixed top-[35%] sm:right-4 right-3 lg:mt-10">
      <ul className="flex flex-col ml-3 gap-6 lg:gap-10">
        <li className="relative group text-xl sm:text-2xl md:text-4xl lg:text-4xl bg-green text-white p-3 rounded-full hover:scale-125 duration-300 cursor-pointer">
          <div className="hidden lg:block absolute right-14 bg-green bottom-1 group-hover:opacity-80 duration-300 opacity-0 py-2 px-3  rounded-full">
            <p className="text-base">Linkedin</p>
          </div>
          <a
            href="https://www.linkedin.com/in/zimarlen-silva/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="relative group text-xl sm:text-2xl md:text-4xl lg:text-4xl  bg-green text-white p-3 rounded-full hover:scale-125 duration-300 cursor-pointer">
          <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80 bg-green duration-300 opacity-0 py-2 px-3 rounded-full">
            <p className="text-base">Github</p>
          </div>
          <a
            href="https://github.com/ZihSilva"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
}
