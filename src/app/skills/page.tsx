import React from 'react';
import { Progress } from "@/components/ui/progress";


export default function Skills() {

  return (
  
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-6 lg:max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-900 mb-8 text-center">My Skills</h1>

      <div className="space-y-6">
        {/* Skill 1 */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-purple-900">HTML</h2>
          <Progress value={80} className="h-4 bg-indigo-200 purple-500" />
        </div>

        {/* Skill 2 */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-purple-900">CSS</h2>
          <Progress value={95} className="h-4 bg-indigo-200" />
        </div>

        {/* Skill 3 */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-purple-900">TYPESCRIPT</h2>
          <Progress value={55} className="h-4 bg-indigo-200" />
        </div>

        {/* Skill 4 */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-purple-900">JAVASCRIPT</h2>
          <Progress value={50} className="h-4 bg-indigo-200" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-purple-900">NEXT.JS</h2>
          <Progress value={40} className="h-4 bg-indigo-200" />
        </div>


        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-purple-900">TAILWIND</h2>
          <Progress value={80} className="h-4 bg-indigo-200" />
        </div>
      </div>
    </div>
  );
};

