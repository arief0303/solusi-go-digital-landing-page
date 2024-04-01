import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const text = "Solusi Go Digital untuk Nasabah Institusi.";
  const words = text.split(" ");

  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation
    });
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center sm:items-end pt-6 sm:pt-10 bg-gradient-to-b from-base-100 via-base-100 to-grey ">
        <div className="SolusiGoDigital px-14 py-0 sm:py-20 md:py-40">
          <img className="h-8 mb-7" src="/svg/tki.svg" alt="TKI logo" data-aos="fade-right" />
          <div className="my-4 w-full h-auto text-white font-bold leading-normal text-6xl">
            {words.map((word, index) => (
              <span
                key={index}
                className="inline-block"
                data-aos="fade-in"
                data-aos-delay={`${index * 500}`}
              >
                {word}
                &nbsp;
              </span>
            ))}
          </div>
          <div
            className="w-18 text-white font-semibold leading-normal text-xl"
            data-aos="fade-in"
            data-aos-delay="3000"
          >
            Layanan Perbankan saat ini bukan hanya Funding - Lending saja, akan tetapi perlu layanan solusi teknologi yang terintegrasi dengan Open Banking Technology
          </div>
        </div>
        <img
          className="max-w-full sm:max-w-[50vw] rounded-t-lg mx-10 mt-5 h-fit"
          src="/images/preview-desktop.jpg"
          alt="Preview Desktop App"
          data-aos="slide-up">
        </img>
      </div>
      <div className="bg-grey pb-80"></div>
    </>
  )
};

export default Hero;