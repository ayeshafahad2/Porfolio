"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-amber-500 text-2xl">
          <h1>Portfolio</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
        <Link href="/" className="text-amber-500 hover:text-gray-300 hover:text-lg transition-all duration-200">
            Home
          </Link>
          <Link href="/about" className="text-amber-500 hover:text-gray-300 hover:text-lg transition-all duration-200">
            About
          </Link>
          <Link href="/skills" className="text-amber-500 hover:text-gray-300 hover:text-lg transition-all duration-200">
            Skills
          </Link>
          <Link href="/projects" className="text-amber-500 hover:text-gray-300 hover:text-lg transition-all duration-200">
            Projects
          </Link>
          <Link href="/contact" className="text-amber-500 hover:text-gray-300 hover:text-lg transition-all duration-200">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-800 p-4">
          <div className="flex flex-col space-y-4 mt-4">
          <Link href="/" className="text-amber-500 hover:text-gray-300 hover:text-lg transition-all duration-200">
              Home
            </Link>
            <Link href="/about" className="text-amber-500 hover:text-gray-300 hover:text-lg transition-all duration-200">
              About
            </Link>
            <Link href="/skills" className="text-amber-500 hover:text-gray-300 hover:text-lg transition-all duration-200">
              Skills
            </Link>
            <Link href="/projects" className="text-amber-500 hover:text-gray-300 hover:text-lg transition-all duration-200">
              Projects
            </Link>
            <Link href="/contact" className="text-amber-500 hover:text-gray-300 hover:text-lg transition-all duration-200">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
