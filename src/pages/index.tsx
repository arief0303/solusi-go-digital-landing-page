import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Pricing from "../components/Pricing";
import Partners from "../components/Partners";
import MobileApp from "../components/MobileApp";
import { useSpring, animated } from 'react-spring';
import Carousel from "../components/Carousel";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

const index = () => {
  return (
    <>
      <Header />
      <section id="First">
        <Hero />
      </section>
      <section id="Second">
        <Carousel />
      </section>
      <section id="Third">
        <Benefits />
      </section>
      <section id="Fourth">
        <Partners />
      </section>
      <section id="Fifth">
        <Pricing />
      </section>
      <section id="Sixth">
        <MobileApp />
        <div className="w-screen h-12 bg-grey"></div>
      </section>
      <Footer />
    </>
  );
};

export default index;