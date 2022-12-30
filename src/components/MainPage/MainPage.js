import { useState } from "react";
import { HomePage } from "../HomePage/HomePage";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { Navbar } from "../Navbar/Navbar";
import { AboutMe } from "../AboutMe/AboutMe";
import { Project } from "../Project/Project";
import { Contact} from "../Contact/Contact";
import { FaLightbulb,  FaMoon } from "react-icons/fa";

export function MainPage() {
  const [ModeLight, setModeLight] = useState(true);

  let icon = ModeLight ? "BsMoonStarsFill" : "FaLightbulb";

  const ModeHandle = () => {
    setModeLight(!ModeLight);
  };

  return (
    <div className={ModeLight ? "light" : "dark"}>
      <div
        className="fixed top-5 sm:right-6 right-3 text-2xl sm:text-3xl cursor-pointer"
        onClick={ModeHandle}
      >
        <div className="dark:text-slate-100 text-slate-900">
          <FaMoon className={ModeLight ? "block" : "hidden"} />
          <FaLightbulb className={ModeLight ? "hidden" : "block"} />
        </div>
      </div>
      <Navbar />
      <SocialMedia />
      <HomePage />
      <AboutMe/>
      <Project />
      <Contact/>
    </div>
  );
}
