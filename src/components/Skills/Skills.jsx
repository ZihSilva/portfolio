import React from 'react'

function Skills() {
    return (
        <div>

            <div
                name="skills"
                className="bg-white dark:bg-slate-900 pb-4 dark:text-white w-full flex flex-wrap items-center font-myfont  justify-center"
            >
                <div className="w-2/3 sm:3/5 md:w-9/12  lg:w-10/12 lg:gap-x-3 px-2 flex flex-col md:flex-wrap justify-center">
                    <div className="text-center mt-2 font-bold">
                        <h1 className="text-stone-500 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                            Skills
                        </h1>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 grid-rows-2 gap-6 my-10 justify-center">
                        
                    <li className="flex-wrap flex-col flex justify-center  text-stone-500 text-md  bg-blue-50 p-3  rounded-xl shadow-md shadow-indigo-500/40">
                        <p className="flex justify-center items-center">HTML</p>
                            <img className=" w-20 h-10 contain flex justify-center self-center" src="https://www.svgrepo.com/show/452228/html-5.svg" alt="HTML" />
                        </li>

                        <li className="flex-wrap transform-gpu flex-col flex justify-center  text-stone-500 text-md  bg-blue-50 p-3  rounded-xl shadow-md shadow-indigo-500/40">
                            <p className="flex justify-center items-center">CSS5</p>
                            <img className="w-20 h-10  contain flex justify-center self-center" src="https://www.svgrepo.com/show/452185/css-3.svg" alt="CSS3" />
                        </li>

                        <li className="flex-wrap flex-col flex justify-center  text-stone-500 text-md  bg-blue-50 p-3  rounded-xl shadow-md shadow-indigo-500/40">
                            <p className="flex justify-center items-center">Javascript</p>
                            <img className="w-20 h-10  flex contain  justify-center self-center" src="https://www.svgrepo.com/show/349419/javascript.svg" alt="javascript" />
                        </li>

                        <li className="flex-wrap transform-gpu flex-col flex justify-center  text-stone-500 text-md  bg-blue-50 p-3 rounded-xl shadow-md shadow-indigo-500/40">
                            <p className="flex justify-center items-center">React</p>
                            <img className="w-20 h-10 contain flex justify-center self-center" src="https://www.svgrepo.com/show/473768/react.svg" alt="React" />
                        </li>

                        <li className="flex-wrap transform-gpu flex-col flex justify-center  text-stone-500 text-md  bg-blue-50 p-3  rounded-xl shadow-md shadow-indigo-500/40">
                            <p className="flex justify-center items-center">Github</p>
                            <img className="w-20 h-10 contain flex justify-center self-center" src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png" alt="Github" />
                        </li>

                        <li className="flex-wrap transform-gpu flex-col flex justify-center  text-stone-500 text-md  bg-blue-50 p-3  rounded-xl shadow-md shadow-indigo-500/40">
                            <p className="flex justify-center items-center">NodeJs</p>
                            <img className="w-20 h-10 contain  flex justify-center self-center" src="https://www.svgrepo.com/show/503445/nodejs.svg" alt="NodeJs" />
                        </li>

                        <li className="flex-wrap transform-gpu flex-col flex justify-center  text-stone-500 text-md  bg-blue-50 p-3  rounded-xl shadow-md shadow-indigo-500/40">
                            <p className="flex justify-center items-center">MongoDb</p>
                            <img className="w-20 h-10 contain  flex justify-center self-center" src="https://www.svgrepo.com/show/439231/mongodb.svg" alt="MongoDb" />
                        </li>

                        <li className="flex-wrap transform-gpu flex-col flex justify-center  text-stone-500 text-md  bg-blue-50 p-3  rounded-xl shadow-md shadow-indigo-500/40">
                            <p className="flex justify-center items-center">Express</p>
                            <img className="w-20 h-10 contain  flex justify-center self-center" src="https://www.svgrepo.com/show/353724/express.svg" alt="react" />
                        </li>

                        <li className="flex-wrap transform-gpu flex-col flex justify-center  text-stone-500 text-md  bg-blue-50 p-3  rounded-xl shadow-md shadow-indigo-500/40">
                            <p className="flex justify-center items-center">Tailwind</p>
                            <img className="w-20 h-10 contain  flex justify-center self-center" src="https://www.svgrepo.com/show/333609/tailwind-css.svg" alt="tailwind" />
                        </li>

                        <li className="flex-wrap transform-gpu flex-col flex justify-center  text-stone-500 text-md  bg-blue-50 p-3  rounded-xl shadow-md shadow-indigo-500/40">
                            <p className="flex justify-center items-center">JSON</p>
                            <img className="w-20 h-10 contain  flex justify-center self-center" src="https://seeklogo.com/images/J/json-logo-265700B506-seeklogo.com.jpg" alt="json" />
                        </li>

                        <li className="flex-wrap transform-gpu flex-col flex justify-center  text-stone-500 text-md  bg-blue-50 p-3  rounded-xl shadow-md shadow-indigo-500/40">
                            <p className="flex justify-center items-center">Canva</p>
                            <img className="w-20 h-10 contain flex justify-center self-center" src="https://seeklogo.com/images/C/canva-logo-B4BE25729A-seeklogo.com.png" alt="Canva" />
                        </li>

                        <li className="flex-wrap transform-gpu flex-col flex justify-center  text-stone-500 text-md  bg-blue-50 p-3  rounded-xl shadow-md shadow-indigo-500/40">
                            <p className="flex justify-center items-center">Figma</p>
                            <img className="w-20 h-10 contain flex justify-center self-center" src="https://logodownload.org/wp-content/uploads/2022/12/figma-logo-0.png" alt="Figma" />
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Skills