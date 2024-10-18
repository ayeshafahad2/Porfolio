import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';




export default function Contact() {
  return (
  
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-6 lg:max-w-7xl mx-auto flex items-center justify-center">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Contact Me</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
          <Input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
          <Textarea
            id="message"
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button type="submit" className="w-full bg-purple-800 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors duration-300">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};


