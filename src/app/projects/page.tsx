import React from 'react';
import Image from 'next/image';
import Project1 from '@/app/images/project1.png';
import Project2 from '@/app/images/project2.png';
import Project3 from '@/app/images/project3.png';
import Project4 from '@/app/images/project4.png';
import Project5 from '@/app/images/project5.png';
import Project6 from '@/app/images/project6.png';
import Project7 from '@/app/images/project7.png';
import Project8 from '@/app/images/project8.png';


export default function Projects() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-200 p-6 lg:max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-purple-950 mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Project Card 1 */}
        <div className="bg-purple-500 p-3 rounded-lg shadow-2xl  duration-900  h-72 hover:scale-105 hover:shadow-xl">
          <Image src={Project1} alt="Project One" className="w-full h-52 object-cover rounded-md mb-4" />
          <b className='flex justify-center text-2xl'>TO-DO Application 
          </b>
        </div>

        {/* Project Card 2 */}
        <div className="bg-purple-500 p-3 rounded-lg shadow-2xl duration-900  h-72 hover:scale-105 hover:shadow-xl">
          <Image src={Project2} alt="Project Two" className="w-full h-52 object-cover rounded-md mb-4" />
          <b className='flex justify-center text-2xl'>Password Generator</b>
        </div>

        {/* Project Card 3 */}
        <div className="bg-purple-500 p-3 rounded-lg shadow-2xl duration-900  h-72 hover:scale-105 hover:shadow-xl">
          <Image src={Project3} alt="Project Three" className="w-full h-52 object-cover rounded-md mb-4" />
          <b className='flex justify-center text-2xl'>lorem Generator</b>
        </div>

        {/* Project Card 4 */}
        <div className="bg-purple-500 p-3 rounded-lg   duration-900 h-72 shadow-2xl hover:scale-105 ">
          <Image src={Project4} alt="Project Four" className="w-full h-52 object-cover rounded-md mb-4" />
          <b className='flex justify-center text-lg'>WAY TO KNOWLEDGE</b>
        </div>

        {/* Project Card 5 */}
        <div className="bg-purple-500 p-3 rounded-lg shadow-2xl  duration-900 h-72 hover:scale-105 hover:shadow-xl">
          <Image src={Project5} alt="Project Five" className="w-full h-52 object-cover rounded-md mb-4" />
          <b className='flex justify-center text-2xl'>Dynamic Resume</b>
        </div>

        {/* Project Card 6 */}
        <div className="bg-purple-500 p-3 rounded-lg shadow-2xl  duration-900  h-72 hover:scale-105 hover:shadow-xl">
          <Image src={Project6} alt="Project Six" className="w-full h-52 object-cover rounded-md mb-4" />
          <b className='flex justify-center text-2xl'> Static Resume</b>
        </div>

        {/* Project Card 7 */}
        <div className="bg-purple-500 p-3 rounded-lg  shadow-2xl  duration-900  h-72 hover:scale-105 hover:shadow-xl">
          <Image src={Project7} alt="Project Seven" className="w-full h-52 object-cover rounded-md mb-4" />
          <b className='flex justify-center text-2xl'> ID Cards</b>
        </div>

        {/* Project Card 8 */}
        <div className="bg-purple-500 p-3 rounded-lg  shadow-2xl  duration-900 h-72 hover:scale-105 hover:shadow-xl">
          <Image src={Project8} alt="Project Eight" className="w-full h-52 object-cover rounded-md mb-4" />
          <b className='flex justify-center text-2xl'>Tashih counter</b>
        </div>

      </div>
    </div>
    
  );
};


