import React, { useState, useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MobileApp = () => {
    useEffect(() => {
      AOS.init({
        duration: 2000, // Duration of the animation
      });
    }, []);
  
    return (
      <div className="bg-base-100 w-full h-auto flex flex-col sm:flex-row items-center">
        <div className="px-14 py-0 sm:py-20 md:py-40">
          <h1 className="text-sky-500 py-3">Get it Now!</h1>
          <h1 className="text-2xl font-extrabold pb-5 text-white">{`Temukan era baru pendidikan dengan aplikasi yang memudahkan dan menginspirasi.`.split(' ').map((word, index) => (
            <span key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>{word} </span>
          ))}</h1>
          <p className="pb-5 text-white">Bersiaplah untuk transisi yang mulus menuju masa depan pendidikan yang lebih canggih, lebih cerdas, dan lebih terkoneksi!</p>
          <button className="btn mr-5 btn-primary"><a href="https://api.whatsapp.com/send/?phone=6281542553779&text&type=phone_number&app_absent=0">Hubungi Kami</a></button>
          <button className="btn"><a href="https://www.canva.com/design/DAF6Gx0mMfo/aUoIsjAgYjtdgSkcouWoJw/view?success=true&continue_in_browser=true">Materi PPT</a></button>
        </div>
        <img
          className="max-w-screen sm:max-w-[50vw] rounded-lg py-5 h-fit"
          src="/images/app-preview.webp"
          alt="Preview Desktop App"
          data-aos="fade-up">
        </img>
      </div>
    );
  };

export default MobileApp;