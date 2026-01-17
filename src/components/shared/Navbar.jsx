// src/components/Navbar.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <Link href="/">NextEvent</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-300 transition-colors duration-200 font-medium">
            Home
          </Link>
          <Link href="/events" className="hover:text-blue-300 transition-colors duration-200 font-medium">
            Events
          </Link>
          <Link href="/items" className="hover:text-blue-300 transition-colors duration-200 font-medium">
             Lists
          </Link>
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          <Link href="/login" className="hover:text-blue-300 transition-colors duration-200 font-medium">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 text-white px-4 pt-2 pb-4 space-y-2">
          <Link href="/" className="block hover:text-blue-300 font-medium">
            Home
          </Link>
          <Link href="/events" className="block hover:text-blue-300 font-medium">
            Events
          </Link>
          <Link href="/items" className="block hover:text-blue-300 font-medium">
             Lists
          </Link>
          <Link href="/login" className="block hover:text-blue-300 font-medium">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
