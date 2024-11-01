import React from 'react';
// import { Button } from "@/components/ui/button"; 
import Image from 'next/image';
import Picture from "@/app/images/picture.jpg";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100 p-6 lg:max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center p-6">
        <div className="lg:w-1/2 w-full h-64 lg:h-auto mt-6 lg:mt-0 flex justify-center">
          <Image
            src={Picture}
            alt="Welcome to my Portfolio"
            className="rounded-full object-cover w-72 h-72 lg:w-96 lg:h-96 shadow-2xl "
            width={350}
            height={350}
          />
        </div>
        <br />


        <div className="lg:w-1/2 w-full mt-6 lg:mt-0 lg:p-12 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-purple-950">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
             Hi, Im <span className="font-bold text-amber-700">Ayesha Ahmed</span> a creative web developer focused on building engaging, responsive websites and applications with Next.js, React, and Tailwind CSS. Check out my portfolio to see my work, and lets connect if you are interested in collaborating on exceptional web experiences!</p>
        </div>
      </div>
    </div>
  );
};




