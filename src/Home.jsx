import React from "react";
import web from "../src/images/img2.jpg"
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common name="Grow Your Business with Divakar" imgsrc={web} visit="/service" btname="Get Started" />
    </>
  );
};

export default Home;