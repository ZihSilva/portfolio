import { Link } from "react-scroll"


function Button() {
    return (
        <Link to="contact" smooth={true} duration={500} className="relative px-6 py-3 font-bold ml-2 mb-10 sm:px-3 md:px-4 md:py-3 md:mt-4 mt-2 text-slate-900 group">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-rose group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-2 border-slate-700"></span>
            <span className="relative text-stone-800">Hire Me</span>
        </Link>
    )
}
export default Button;
