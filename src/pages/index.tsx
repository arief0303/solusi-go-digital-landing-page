import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";

const index = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const secondSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(!entry.isIntersecting);
      },
      { threshold: 0.99}
    );

    if (secondSectionRef.current) {
      observer.observe(secondSectionRef.current);
    }

    return () => {
      if (secondSectionRef.current) {
        observer.unobserve(secondSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {isHeaderVisible && <Header />}
      <section className="First">
        <div className="flex flex-col pt-6 sm:pt-20 sm:flex-row bg-gradient-to-b from-base-100 via-base-100 to-grey h-3/4 ">
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
          {/* <HeroIllustration /> */}
          <img
            className="max-w-full sm:max-w-[50vw] rounded-t-lg mx-10 mt-5 h-fit"
            src="/image/preview-desktop.jpg"
            alt="Preview Desktop App"></img>
        </div>
      </section>
      <section ref={secondSectionRef} className="Second">
        <div className="h-screen bg-grey"></div>
      </section>
    </>
  );
};

export default index;