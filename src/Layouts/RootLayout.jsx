import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { PropagateLoader } from "react-spinners";
import Loading from "../Components/Loading/Loading";

const RootLayout = () => {
  const { state } = useNavigation();
  //INTIAL WELCOME SPINNER START
  const [welcomeLoader, setWelcomeLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeLoader(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  if (welcomeLoader) {
    return (
      <div className="flex items-center justify-center fixed inset-0 bg-white z-50">
        <PropagateLoader color="#0088cb" height={55} speedMultiplier={1} />
      </div>
    );
  }
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main className="overflow-x-hidden">
        {state === "loading" ? <Loading /> : <Outlet/>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
