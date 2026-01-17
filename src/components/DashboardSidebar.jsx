import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaCalendarCheck } from "react-icons/fa";

const DashboardSidebar = ({ active }) => {
  return (
    <aside className="w-64 bg-blue-900 text-white min-h-screen p-6 flex flex-col shadow-2xl fixed top-0 left-0">
      {/* Brand / Logo */}
      <div className="flex items-center mb-10 border-b border-blue-800 pb-4">
        <Link href="/">
          <div className="relative w-16 h-16 rounded-full overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
            <Image
              src="/assets/img/Logo.jpg"
              alt="NextEvent Logo"
              fill
              className="object-cover"
            />
          </div>
        </Link>
        <h2 className="ml-4 text-xl font-bold tracking-wide">NextEvent</h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col mt-6 space-y-3">
        <Link
          href="/dashboard/profile"
          className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 text-lg font-medium hover:bg-blue-800 shadow-sm ${
            active === "profile" ? "bg-blue-700 shadow-inner" : ""
          }`}
        >
          <FaUser className="mr-3 text-lg" />
          Profile
        </Link>

        <Link
          href="/dashboard/my-bookings"
          className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 text-lg font-medium hover:bg-blue-800 shadow-sm ${
            active === "bookings" ? "bg-blue-700 shadow-inner" : ""
          }`}
        >
          <FaCalendarCheck className="mr-3 text-lg" />
          My Bookings
        </Link>
      </nav>

      {/* Sidebar Footer */}
      <div className="mt-auto text-center text-sm text-blue-200 pt-10 border-t border-blue-800">
        &copy; {new Date().getFullYear()} NextEvent
      </div>
    </aside>
  );
};

export default DashboardSidebar;
