// import Header from "@/components/Header";
import HeroIllustration from "@/components/HeroIllustration";
import React from "react";

const RoundedDiv = () => (
  <div className="bg-white h-5 my-6 w-96 rounded-full" />
);

const index = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-col md:flex-row w-screen h-full">
        <div className="ml-20 SolusiGoDigital w-1/2">
          <img className="h-8" src="/svg/tki.svg" alt="TKI logo" />
          <div className="my-4 w-[658px] h-[49px] text-white text-[64px] font-bold leading-normal text-6xl">
            Solusi GO Digital.
          </div>
          <div className="w-[564px] pt-10 text-white font-semibold leading-normal text-xl">
            Ayoo! Bergabung bersama ratusan ribu pelanggan kita yang telah
            menggunakan produk kami.
          </div>
          <RoundedDiv />
          <RoundedDiv />
          <RoundedDiv />
        </div>
        <HeroIllustration />
      </div>
    </>
  );
};

export default index;