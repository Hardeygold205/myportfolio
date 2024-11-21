import React from "react";

function Footer() {
  return (
    <div className="">
      <section className="flex flex-col items-center text-center p-5">
        <h1 className="md:text-5xl text-4xl font-extrabold mb-10">Contact</h1>
        <form className="flex flex-col gap-8 w-full max-w-lg">
          <div className="form-group">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              className="h-12 p-4 w-full rounded-2xl border bg-transparent border-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="h-12 p-4 w-full rounded-2xl border bg-transparent border-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
              className="h-64 p-4 w-full rounded-2xl border bg-transparent border-gray-400 text-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>
          </div>
          <button
            type="submit"
            value="Submit"
            className="bg-green-400 text-white
            rounded-2xl text-lg font-bold mx-auto w-full  p-3 transform transition-transform
            duration-400 ease-in-out hover:scale-105 active:translate-y-0.5
            shadow-md hover:shadow-lg">
            Submit
          </button>
        </form>
      </section>
      <div className="flex items-center justify-center py-12 text-gray-600">
        <p>
          &copy; 2023 Hadi Ademola. <br /> Made with Love ❤️❤️.
        </p>
      </div>
    </div>
  );
}

export default Footer;
