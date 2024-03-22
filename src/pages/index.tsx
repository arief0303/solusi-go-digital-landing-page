import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

const index = () => {
  return (
    <>
      <Header />
      <section className="First">
        <div className="flex flex-col pt-6 sm:pt-20 sm:flex-row bg-gradient-to-b from-base-100 via-base-100 to-grey h-[80vh] ">
          <div className="SolusiGoDigital px-14 pt-0 sm:pt-20">
            <img className="h-8" src="/svg/tki.svg" alt="TKI logo" />
            <div className="my-4 w-full h-auto text-white font-bold leading-normal text-6xl">
              Solusi GO Digital.
            </div>
            <div className="w-18 text-white font-semibold leading-normal text-xl">
              Ayoo! Bergabung bersama ratusan ribu pelanggan kita yang telah
              menggunakan produk kami.
            </div>
          </div>
          <img
            className="max-w-full sm:max-w-[50vw] rounded-t-lg mx-10 mt-5 h-fit"
            src="/images/preview-desktop.jpg"
            alt="Preview Desktop App"></img>
        </div>
      </section>
      <section className="Second">
        <div className="h-[225vh] bg-grey">
          <div className="flex items-center justify-center h-auto w-full font-bold text-6xl text-black pt-60 px-10">
            Solusi inovatif lebih mudah.
          </div>
          <Carousel />
        </div>
      </section>
    </>
  );
};

export default index;