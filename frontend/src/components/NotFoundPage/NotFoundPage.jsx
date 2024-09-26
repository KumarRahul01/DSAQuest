import React from "react";

const NotFoundPage = () => {
  return (
    <div className="bg w-full min-h-screen flex flex-col items-center justify-center selection:bg-[#ffbe25db] selection:text-slate-50">
        <h1 className="mb-4 lg:text-9xl text-6xl font-semibold text-red-500">404</h1>
        <p className="mb-4 text-xl xs:text-2xl md:text-3xl text-white"l>Oops! Looks like you're lost.</p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              // stroke-linecap="round"
              // stroke-linejoin="round"
              // stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p className="mt-4 text-white text-lg xs:text-xl">
          Let's get you back{" "}
          <a href="/" className="text-[#ffbd25] text-xl xs:text-2xl md:text-3xl font-medium hover:underline underline-offset-4">
            Home
          </a>
          .
        </p>
    </div>
  );
};

export default NotFoundPage;
