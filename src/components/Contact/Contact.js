import { useState } from "react";

export function Contact() {

  const [fullName, setFullName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [subject, setSubject] = useState(" ");
  const [message, setMessage] = useState(" ");

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();

    setFullName(" ");
    setEmail(" ");
    setSubject(" ");
    setMessage(" ");
  };

  return (
    <div
      name="contact"
      className="bg-blue-200 dark:bg-slate-900 py-4 dark:text-white min-h-screen max-h-full w-full flex-col flex items-center font-myfont  justify-center"
    >
      <div className="w-44 mx-2 h-full flex flex-col justify-center sm:w-96">
        <div className="text-center mt-4 font-bold">
          <h1 className="text-stone-600 text-2xl mt-6 sm:text-3xl border-b-4 border-blue-500 inline">
            Contact Me
          </h1>
        </div>
        <div className="mt-8 w-full md:w-3/4 md:mx-auto">
          <form
            // onSubmit={handleSubmit}
            action="https://getform.io/f/91a24ebd-c8c9-4011-a23a-20ec57fa09d4"
            method="POST"
          >
            <label>Enter Your Full Name:</label>
            <input
              type="text"
              onChange={(event) => setFullName(event.target.value)}
              value={fullName}
              name="FullName"
              className="w-full p-2 text-base mb-4 selection:rounded-lg focus:outline-blue-700"
              required
            />
            <label>Enter Your Email Address:</label>
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              name="email"
              className="w-full p-2  text-base mb-4 rounded-lg focus:outline-blue-700"
              required
            />
            <label>Enter Your Subject:</label>
            <input
              type="text"
              onChange={(event) => setSubject(event.target.value)}
              value={subject}
              name="subject"
              className="w-full p-2 text-base mb-4 rounded-lg focus:outline-blue-700"
              required
            />
          <label>Enter Your Message:</label>
            <textarea
              name="message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              className="w-full p-2 text-base mb-4 h-40 resize-none rounded-lg focus:outline-blue-700"
              required
            ></textarea>
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="text-white w-full p-2 mb-6 bg-blue-500  text-lg font-bold border-md rounded-lg border-blue-400 hover:bg-transparent hover:border-blue-600 hover:text-white cursor-pointer duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
