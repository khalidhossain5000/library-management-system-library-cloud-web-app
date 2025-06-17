import React from "react";
import { Link } from "react-router";
import error from "../../assets/error-page/-animation-404-error.gif";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div>
      <div className="dynamic-title">
        <Helmet>
          <title>Error-404</title>
        </Helmet>
      </div>

      <main className="relative h-screen px-2 lg:px-0 bg-gradient-to-br from-[#ffffff] via-[#f7fcff] to-[#f7f0fe]">
        <div className="container mx-auto text-center">
            <h1 className="text-[210px] text-[#393e4c] font-bold">404</h1>
            <h2 className="text-6xl font-medium text-[#393e4c]">
              Ooops, Page Not Found
            </h2>
            <h3 className="text-3xl font-medium text-[#393e4c] my-8">
              We Can't Seem to find the page you're looking for.
            </h3>
          <div className="img z-10 text-center">
            <img className="mx-auto w-5/12" src={error} alt="" />
          </div>
          <div className="title w-full">
            
            
            <Link className="bg-gradient-to-tr from-[#25052e] to-[#7d08ab] text-[#ffffff] font-semibold py-3 px-6  w-full mx-3 lg:mx-0 text-xl lg:text-2xl animate-bounce block rounded-sm shadow-md hover:shadow-xl transition-all duration-300  cursor-pointer" to="/">
                Back To Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
