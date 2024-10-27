"use client";

const ContactForm = () => {
  return (
    <div className="w-full flex flex-col gap-12 p-5">
      <h1 className="text-lg font-[400]">
        We really appreciate your visit. please leave us a message.
      </h1>
      <form action="" className="flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <div className="relative">
            <input
              placeholder="Your full names"
              className="peer pl-6 pr-5 pt-2 rounded-lg h-10 text-sky-200 text-lg w-full border-2 border-sky-600 bg-transparent placeholder-transparent focus:outline-none focus:border-sky-200"
              required
              id="name"
              name="name"
              type="name"
            />
            <label
              className="absolute left-3 px-3 bg-sky-800 -top-3.5 text-lg text-sky-200 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-sky-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sky-200"
              htmlFor="name"
            >
              Your full names
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Email"
              className="peer pl-6 pr-5 pt-2 rounded-lg h-10 text-sky-200 text-lg w-full border-2 border-sky-600 bg-transparent placeholder-transparent focus:outline-none focus:border-sky-200"
              required
              id="email"
              name="email"
              type="email"
            />
            <label
              className="absolute left-3 px-3 bg-sky-800 -top-3.5 text-lg text-sky-200 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-sky-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sky-200"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <textarea
              placeholder="Message"
              className="peer pl-6 p-2 rounded-lg overflow-hidden resize-none text-sky-200 text-lg w-full border-2 border-sky-600 bg-transparent placeholder-transparent focus:outline-none focus:border-sky-200"
              required
              id="message"
              name="message"
              rows={4}
            />
            <label
              className="absolute left-3 bg-sky-800 px-3 -top-3.5 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-sky-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sky-200"
              htmlFor="description"
            >
              Message
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-sky-200 text-sky-900 hover:bg-sky-100 rounded-lg text-lg py-2 font-bold transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
