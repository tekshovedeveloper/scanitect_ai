"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../../styles/global.css";

export default function Header() {
  const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="glass-header rounded-full px-6 py-2 flex items-center justify-between">
        {/* Logo (unchanged) */}
        <div className="flex items-center space-x-2">
          <img
            src="/image/logo.svg"
            alt="Scanitect Logo"
            className="h-25 w-136"
          />
        </div>

        {/* Desktop Navigation (unchanged, only hidden on mobile) */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" onClick={(e) => {
    e.preventDefault();
    // document.querySelector("#home")?.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
      setActive("home");
  }} passHref>
             <span className={`text-gray-300 hover:text-white transition-colors ${
            active === "home" ? "nav_btn" : ""
          }`}>Home</span>
          </Link>
          <Link href="#features"   onClick={(e) => {
    e.preventDefault();
    document.querySelector("#features")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
      setActive("features");
  }} passHref>
            <span className={`text-gray-300 hover:text-white transition-colors ${
            active === "features" ? "nav_btn" : ""
          }`}>Features</span>
          </Link>
          <Link href="#howItsWork"   onClick={(e) => {
    e.preventDefault();
    document.querySelector("#howItsWork")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
      setActive("howItsWork");
  }} passHref>
            <span className={`text-gray-300 hover:text-white transition-colors ${
            active === "howItsWork" ? "nav_btn" : ""
          }`}>How it Works</span>
          </Link>
          <Link href="#technology"   onClick={(e) => {
    e.preventDefault();
    document.querySelector("#technology")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActive("technology");
  }} passHref>
            <span className={`text-gray-300 hover:text-white transition-colors ${
            active === "technology" ? "nav_btn" : ""
          }`}>Technology</span>
          </Link>
          <Link href="#contactUs"   onClick={(e) => {
    e.preventDefault();
    document.querySelector("#contactUs")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActive("contactUs");
  }} passHref>
            <span className={`text-gray-300 hover:text-white transition-colors ${
            active === "contactUs" ? "nav_btn" : ""
          }`}>Contact</span>
          </Link>

        {/* Desktop Sign Up (unchanged, only hidden on mobile) */}
        <Link href="#subscribeForm"   onClick={(e) => {
    e.preventDefault();
    document.querySelector("#subscribeForm")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActive("howItsWork");
  }} passHref>
          <div className="signup_btn">
            Sign up
          </div>
        </Link>
        </nav>

        {/* Mobile toggle button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            // Close icon
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Hamburger icon
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu (glassy dropdown) */}
      {open && (
        <div className="md:hidden mt-2">
          <div className="glass-panel rounded-2xl px-4 py-3">
            <nav className="flex flex-col gap-1 text-sm font-medium">
              <Link href="/" passHref>
                <span onClick={() => setOpen(false)} className="block w-full px-3 py-2 rounded-lg bg-white/20 text-white">
                  Home
                </span>
              </Link>
               <Link href="#features"   onClick={(e) => {
    e.preventDefault();
    document.querySelector("#features")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }} passHref>
                <span onClick={() => setOpen(false)} className="block w-full px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                  Features
                </span>
              </Link>
              <Link href="#howItsWork"   onClick={(e) => {
    e.preventDefault();
    document.querySelector("#howItsWork")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }} passHref>
                <span onClick={() => setOpen(false)} className="block w-full px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                  How it Works
                </span>
              </Link>
                <Link href="#technology"   onClick={(e) => {
    e.preventDefault();
    document.querySelector("#technology")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }} passHref>
                <span onClick={() => setOpen(false)} className="block w-full px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                  Technology
                </span>
              </Link>
              <Link href="#contactUs"   onClick={(e) => {
    e.preventDefault();
    document.querySelector("#contactUs")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }} passHref>
                <span onClick={() => setOpen(false)} className="block w-full px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                  Contact
                </span>
              </Link>
            </nav>

               <Link href="#subscribeForm"   onClick={(e) => {
    e.preventDefault();
    document.querySelector("#subscribeForm")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }} passHref>
              <div onClick={() => setOpen(false)} className="mt-3 w-full inline-flex items-center justify-center bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transition-all">
                Sign up
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}