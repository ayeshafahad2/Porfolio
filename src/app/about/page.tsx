'use client'
import React from "react";
import Image from "next/image";
import Join from "@/app/images/join.jpg";

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-6 lg:max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center p-6">
                <div className="lg:w-1/2 w-full h-64 lg:h-auto mt-6 lg:mt-0 flex justify-center">
                    <Image
                        src={Join}
                        alt="Ayesha Ahmed"
                        className="rounded-full object-cover w-72 h-72 lg:w-96 lg:h-96 shadow-2xl animate-pulse"
                        width={350}
                        height={350}
                    />
                </div>
                <br />
                <div className="lg:w-1/2 w-full mt-6 lg:mt-0 lg:p-12 text-center lg:text-left">

                    <h1 className="text-4xl lg:text-5xl font-bold text-purple-800">
                        About Me
                    </h1>
                    <br />
                    <p className="text-lg text-gray-700 leading-relaxed "> A web developer with a year of
                        experience crafting responsive, user-friendly websites
                        and applications. Specializing in Next.js, React, and
                        Tailwind CSS, I am passionate about creating smooth,
                        engaging digital experiences. Browse my portfolio to see
                        my work, and lets connect to bring your vision to life!
                    </p>
                </div>
            </div>
        </div>
    );
};


