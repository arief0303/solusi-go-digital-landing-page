import React, { useState, useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Partners = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Duration of the animation
            once: true, // Whether animation should happen only once - while scrolling down
        });
    }, []);

    const partners = [
        { p1: '1200++', p2: 'Institution', color: 'bg-blue-500 text-white' },
        { p1: '300.000++', p2: 'User', color: 'bg-red-500 text-white' },
        { p1: '500.000++', p2: 'Transansaction', color: 'bg-green-500 text-white' },
        // Add more partners here
    ];

    return (
        <div className="bg-grey">
            <div className="flex items-center justify-center h-auto w-full font-bold text-6xl text-black px-10 pt-80 pb-8 bg-grey py-96" data-aos="fade-up">
                Partners
            </div>
            <div className="flex flex-col md:flex-row justify-center flex-wrap">
                {partners.map((partner, index) => (
                    <div key={index} className={`card w-96 md:w-64 ${partner.color} m-4`} data-aos="fade-right" data-aos-delay={`${index * 100}`}>
                        <div className="card-body">
                            <h2 className="text-center text-4xl text-bold">{partner.p1}</h2>
                            <p className="text-center text-2xl">{partner.p2}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Partners;