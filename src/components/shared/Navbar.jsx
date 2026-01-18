"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white">
            <Image
              src="/assets/images/Logo.jpg"
              alt="NextEvent Logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <span className="text-2xl font-extrabold tracking-wide">NextEvent</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 gap-8">
          <Link href="/" className="hover:text-blue-300 font-medium">Home</Link>
          <Link href="/events" className="hover:text-blue-300 font-medium">Events</Link>
          <Link href="/items" className="hover:text-blue-300 font-medium">Lists</Link>
        </div>

        {/* Login (Desktop) */}
        <div className="hidden md:flex items-center">
          <Link
            href="/login"
            className="flex items-center gap-2 hover:text-blue-300 font-medium transition-colors"
          >
            
            <span>Login</span>
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
        <div className="md:hidden bg-blue-900 px-4 pt-2 pb-4 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-blue-300">Home</Link>
          <Link href="/events" onClick={() => setIsOpen(false)} className="block hover:text-blue-300">Events</Link>
          <Link href="/items" onClick={() => setIsOpen(false)} className="block hover:text-blue-300">Lists</Link>
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 hover:text-blue-300 font-medium"
          >
            <FaUser size={18} />
            <span>Login</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
