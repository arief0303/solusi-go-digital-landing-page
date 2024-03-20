import React from "react";
import HeroIllustration from "@/components/HeroIllustration";
import Header from "@/components/Header";

const RoundedDiv = () => (
  <div className="bg-white h-5 my-6 rounded-full w-60" />
);

const index = () => {
  return (
    <>
      <Header />
      <section>
        <div className="flex flex-col sm:flex-row pt-20 bg-primary w-screen h-3/4 ">
          <div className="px-20 SolusiGoDigital">
            <img className="h-8" src="/svg/tki.svg" alt="TKI logo" />
            <div className="my-4 w-full h-auto text-white text-[64px] font-bold leading-normal text-6xl">
              Solusi GO Digital.
            </div>
            <div className="w-18 text-white font-semibold leading-normal text-xl">
              Ayoo! Bergabung bersama ratusan ribu pelanggan kita yang telah
              menggunakan produk kami.
            </div>
            <RoundedDiv />
            <RoundedDiv />
            <RoundedDiv />
          </div>
          <HeroIllustration />
        </div>
      </section>
      <section>
        <div className="h-96 bg-secondary"></div>
      </section>
    </>
  );
};

export default index;