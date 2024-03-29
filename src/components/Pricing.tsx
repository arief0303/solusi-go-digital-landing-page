import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import { useSpring, animated } from 'react-spring';
import Carousel from "./Carousel";
import Link from "next/link";
import { Footer } from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pricing = () => {
    useEffect(() => {
      AOS.init({
        duration: 2000, // Duration of the animation
        once: true, // Whether animation should happen only once - while scrolling down
      });
    }, []);
  
    const [isCollapsed, setIsCollapsed] = useState(Array(3).fill(true));
    const plans = [
      {
        title: "Paket A",
        link: "/personal",
        svg: "/svg/Platform Sekolah Pintar-11.svg",
        registrationPrice1: "Rp 10.000",
        registrationQuantity1: "Per User",
        registrationPrice2: "Rp 20.000",
        registrationQuantity2: "Per Digital Card",
        registrationPrice3: "Rp 0.-",
        registrationQuantity3: "Per Month",
        listItems: ['Tagihan Digital', 'Absensi', 'Kalender Akademik', 'Jadwal Pelajaran', 'Jadwal Pelajaran', 'Berita Informasi', 'PPDB'],
      },
      {
        title: "Paket B",
        link: "/business",
        svg: "/svg/Platform Sekolah Pintar-16.svg",
        registrationPrice1: "Rp 0",
        registrationQuantity1: "Per User Registration",
        registrationPrice2: "Rp 20.000",
        registrationQuantity2: "Per Physical Card",
        registrationPrice3: "Rp 1.000.000",
        registrationQuantity3: "Per Month",
        listItems: ['Transaksi Cashless', 'Manajemen Kantin', 'Transfer Bank', 'Tagihan digital', 'Marketplace', 'Learning Managment System', 'PPOB', 'Absensi', 'Parkir', 'Donasi', 'POS', 'PPDB'],
      },
      {
        title: "Hardware",
        link: "/premium",
        svg: "/svg/Platform Sekolah Pintar-13.svg",
        registrationPrice1: "Rp 2.500.000",
        registrationQuantity1: "Per Android POS Device",
        registrationPrice2: "Rp 20.000",
        registrationQuantity2: "Per Absence Device",
        registrationPrice3: "",
        registrationQuantity3: "",
        listItems: ['Parkir', 'Akses Pintu'],
      }
    ];
    const [collapsedStates, setCollapsedStates] = useState(plans.map(() => true));
    const animations = collapsedStates.map(collapsed => useSpring({
      opacity: collapsed ? 0 : 1,
      transform: collapsed ? 'translate3d(0,-40px,0)' : 'translate3d(0,0px,0)',
    }));
  
    const toggleCollapse = (index: number): void => {
      const newCollapsedStates: boolean[] = [...collapsedStates];
      newCollapsedStates[index] = !newCollapsedStates[index];
      setCollapsedStates(newCollapsedStates);
    };
  
    return (
      <div className="bg-grey">
        <div className="flex items-center justify-center h-auto w-full font-bold text-6xl text-black px-10 pt-80 pb-8 py-96" data-aos="fade-up" R>
          Choose a plan that works for you.
        </div>
        <div className="flex justify-center items-start min-h-screen">
          <div className="Pricing flex justify-center items-start flex-wrap">
            {plans.map((plan, index) => (
              <div key={index} className="card bg-base-100 shadow-xl w-auto m-4" data-aos="fade-right" data-aos-delay={`${index * 100}`}>
                <article className="prose prose-xs">
                  <h1 className="text-center p-4 text-4xl">{plan.title}</h1>
                  <hr className="border border-t border-gray-200 w-full" />
                </article>
                <img className="h-96 w-96" src={plan.svg} alt={plan.title} />
                <div className="card-body items-center text-center">
                  <h2 className="">{plan.registrationPrice1}</h2>
                  <h2 className="">{plan.registrationQuantity1}</h2>
                  <h2 className="">{plan.registrationPrice2}</h2>
                  <h2 className="">{plan.registrationQuantity2}</h2>
                  <h2 className="">{plan.registrationPrice3}</h2>
                  <h2 className="">{plan.registrationQuantity3}</h2>
                  <hr className="border border-t border-gray-200 w-full" />
                  <div className="card-actions">
                    <p>Platform yang didapat</p>
                  </div>
                  <div>
                    <ul>
                      {plan.listItems.slice(0, 3).map((item, index) => (
                        <div className="flex items-center">
                          <img className="h-8 inline-block" src="/svg/Platform Sekolah Pintar-1.svg" alt="checklist" />
                          <li key={index}>{item}</li>
                        </div>
                      ))}
                      {!collapsedStates[index] && (
                        <animated.div style={animations[index]}>
                          {plan.listItems.slice(3).map((item, index) => (
                            <div className="flex items-center">
                              <img className="h-8 inline-block" src="/svg/Platform Sekolah Pintar-1.svg" alt="checklist" />
                              <li key={index + 3}>{item}</li>
                            </div>
                          ))}
                        </animated.div>
                      )}
                    </ul>
                    {plan.listItems.length > 2 && (
                      <button onClick={() => toggleCollapse(index)}>
                        {collapsedStates[index] ? 'Show More' : 'Show Less'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pb-24 pt-12">
          <div>
            <h1 className="text-black h-auto w-full font-bold text-4xl text-center pb-8" data-aos="zoom-in">Informasi produk dan harga lebih detail</h1>
          </div>
          <div>
            <button className="btn btn-primary">Hubungi Kami</button>
          </div>
        </div>
      </div>
    );
  };

export default Pricing;