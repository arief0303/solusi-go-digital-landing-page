import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
      AOS.init({
        duration: 2000, // Duration of the animation
      });
    }, []);
  
    return (
      <>
        <div className="flex flex-col sm:flex-row items-center sm:items-end pt-6 sm:pt-10 bg-gradient-to-b from-base-100 via-base-100 to-grey h-3/4">
          <div className="SolusiGoDigital px-14 py-0 sm:py-20 md:py-40">
            <img className="h-8" src="/svg/tki.svg" alt="TKI logo" />
            <div className="my-4 w-full h-auto text-white font-bold leading-normal text-6xl" data-aos="fade-in" data-aos-delay="500">
              Solusi GO Digital.
            </div>
            <div className="w-18 text-white font-semibold leading-normal text-xl">
              Ayoo! Bergabung bersama ratusan ribu pelanggan kita yang telah
              menggunakan produk kami.
            </div>
            <div className="flex">
            <button className="btn btn-active btn-neutral mt-4 mr-4"><a href="https://psp.teknologikartu.com/home/eyJhbGciOiJIUzI1NiJ9.eyJwcm9kdWNlciI6InNzbyIsInVzZXJJZCI6IjY1YmI0MDgzMWI5ZWE0NTZjODk5MDFjNCIsImNvbXBhbnlJZCI6IjYyMjZjYjRjM2ExOGQ5OTk4NTdlNGYwZSIsInBlcm1pc3Npb24iOiIiLCJleHAiOjE3MTE3MDk1ODcsImlhdCI6MTcxMTcwNTk4N30.AhfZDbPEelwDZqZ9iokgzOszl4iXvhf5b-THe2xh7Tc/en">Demo</a></button>
            <button className="btn btn-active btn-neutral mt-4"><a href="https://www.youtube.com/watch?v=XM5E0cjedik&t=11s&ab_channel=TeknologiKartuIndonesia">Watch Video</a></button>
            </div>
          </div>
          <img
            className="max-w-full sm:max-w-[50vw] rounded-t-lg mx-10 mt-5 h-fit"
            src="/images/preview-desktop.jpg"
            alt="Preview Desktop App"
            data-aos="fade-up">
          </img>
        </div>
        <div className="bg-grey pb-80"></div>
      </>
    )
  };

export default Hero;