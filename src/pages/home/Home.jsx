import React from "react";
import Layout from "../../layouts/Layout";
import "./Home.css";

import Hero from "./components/Hero/Hero";
import FirstContent from "./components/FirstContent/FirstContent";
import SecondContent from "./components/SecondContent/SecondContent";
import ThirdContent from "./components/ThirdContent/ThirdContent";
import FourthContent from "./components/FourthContent/FourthContent";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero></Hero>
        <FirstContent></FirstContent>
        <SecondContent></SecondContent>
        <ThirdContent></ThirdContent>
        <FourthContent></FourthContent>
      </Layout>
    </>
  );
};

export default Home;
