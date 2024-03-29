import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import { useSpring, animated } from 'react-spring';
import Carousel from "../components/Carousel";
import Link from "next/link";
import { Footer } from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Benefits = () => {
    useEffect(() => {
      AOS.init({
        duration: 2000, // Duration of the animation
        once: true, // Whether animation should happen only once - while scrolling down
      });
    }, []);
  
    const benefits = [
      'Mengajarkan pengelolaan keuangan sejak dini',
      'Mengajarkan siswa tentang pentingnya menjaga lingkungan melalui program kartubank sampah',
      'Membantu guru menyusun laporan jurnal pembelajaran',
      'Melatih anak menggunakan teknologi pembayaran terkini',
      'Jadwal pelajaran interaktif dan kalender pendidikan yang terintegrasi',
      'Memudahkan admin sekolah dalam operasional keuangan dan kegiatan belajar mengajar'
    ];
  
    return (
      <>
        <div className="flex items-center justify-center h-auto w-full px-10 pt-80 pb-8 bg-grey py-96">
          <p className="font-bold text-6xl text-black" data-aos="fade-in">Benefits</p>
        </div>
        <div className="h-1/2 bg-grey">
          <div className="flex justify-center">
            <ul className="text-black">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div className="flex items-center" data-aos="fade-in" data-aos-delay={`${index * 100}`}>
                    <img className="h-8" src="/svg/Platform Sekolah Pintar-1.svg" alt="checklist" />
                    <li key={index}>{benefit}</li>
                  </div>
                ))}
              </div>
            </ul>
          </div>
          <img className="h-96 w-screen object-cover pt-12" src="/images/jKZhzZdGbYyDLMdETMEDwkgbsPM.webp" alt="people meeting" />
        </div>
      </>
    );
  };

  export default Benefits;