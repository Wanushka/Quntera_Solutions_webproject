"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/70 to-black/80 backdrop-blur-xl border-b border-white/10"></div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
      
      <nav className="relative container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo with glow */}
        <Link 
          href="/" 
          className="relative group text-2xl font-bold bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent transition-all duration-300"
        >
          <span className="relative z-10 drop-shadow-md text-white">
            Quntera Solutions
          </span>
          {/* Glow effect behind text */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-gray-400/10 to-white/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </Link>

        {/* Navigation Items */}
        <ul className="flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  pathname === item.href
                    ? "text-white bg-white/10 shadow-lg shadow-gray-400/20 border border-white/20"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {/* Active indicator glow */}
                {pathname === item.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-400/10 rounded-lg blur-sm"></div>
                )}
                
                {/* Text */}
                <span className="relative z-10">{item.name}</span>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-gray-400/10 to-white/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Bottom border animation */}
                <div className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-gray-300 to-gray-500 transition-all duration-300 ${
                  pathname === item.href 
                    ? "w-full -translate-x-1/2" 
                    : "w-0 group-hover:w-full -translate-x-1/2"
                }`}></div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Optional: Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};