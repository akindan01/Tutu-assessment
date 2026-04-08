import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'SERVICES', href: '/services' },
    { name: 'TESTIMONIALS', href: '/testimonials' },
    { name: 'BLOGS', href: '/blogs' },
  ];

  return (
    <div className="min-h-screen bg-[#F3F3F3] font-sans selection:bg-[#2D0052] selection:text-white">
      {/* --- NAVBAR --- */}
      <nav className="bg-[#2D0052] px-6 py-5 md:px-12 md:py-8 flex items-center justify-between sticky top-0 z-50">
        {/* Logo */}
        <div
          className="text-white text-3xl md:text-5xl font-serif tracking-tighter"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          TÚTÚ
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white text-[10px] tracking-[0.3em] font-bold hover:opacity-60 transition-opacity relative pb-1"
            >
              {item.name}
              {/* The White Border Underline for HOME */}
              {item.name === 'HOME' && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-[1.5px] bg-white"
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white font-bold text-[10px] tracking-widest flex items-center gap-2"
        >
          {isMenuOpen ? (
            <span>CLOSE</span>
          ) : (
            <div className="flex flex-col gap-1 w-5">
              <span className="h-[1.5px] w-full bg-white"></span>
              <span className="h-[1.5px] w-full bg-white"></span>
            </div>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[#2D0052] border-t border-white/10 py-10 flex flex-col items-center space-y-8 md:hidden shadow-2xl"
            >
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-xs tracking-[0.4em] font-bold"
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative h-[85vh] flex items-center px-6 md:px-20 overflow-hidden">
        <img
          src="/hero-bg.jpg"
          alt="Cocktail"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white max-w-4xl"
        >
          <h1
            className="text-6xl md:text-[90px] font-serif leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Most <span className="italic font-normal">Delicious</span>
            <br />
            Cocktails <span className="not-italic font-normal">In A Can</span>
          </h1>

          <button className="mt-10 flex items-center gap-3 text-[11px] tracking-[0.3em] font-bold pb-2 hover:gap-8 transition-all">
            GET IN TOUCH <span>→</span>
          </button>
        </motion.div>

        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
          <div className="w-2 h-2 rounded-full border border-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full border border-white"></div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section
        id="services"
        className="py-20 px-6 md:px-20 text-center bg-[url('/pattern-bg.png')] bg-repeat"
      >
        <span className="text-[#2D0052] text-[10px] tracking-[0.4em] font-bold">
          WHAT WE DO
        </span>
        <h2
          className="text-4xl md:text-5xl font-serif text-[#2D0052] mt-2 mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl aspect-[3/4]"
            >
              <img
                src={`/service.jpg`}
                alt="Service"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-left text-white">
                <p className="text-[10px] tracking-widest opacity-80">
                  COCKTAIL BY TUTU
                </p>
                <h3 className="text-2xl font-serif">Event Supply</h3>
              </div>
              <div className="absolute bottom-8 right-8 bg-white rounded-full p-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-20 bg-[#F3F3F3] text-center border-y border-gray-100">
        <h2 className="text-[#2D0052] text-3xl font-serif mb-4 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
          3,009 happy customers and<br /> counting...
        </h2>
        <p className="text-[10px] tracking-[0.3em] text-[#151621] mb-12 font-bold">
          TOP BEST REVIEWS OF COCKTAIL BY TUTU
        </p>

        <div className="max-w-3xl mx-auto px-6 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>

          <div className="text-center">
            <img
              src="/avatar.png"
              alt="User"
              className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-2 border-[#2D0052]"
            />
            <h4 className="font-serif text-xl mb-4 font-bold">Very Good Cocktail</h4>
            <p className="text-[#151621] leading-relaxed italic text-sm md:text-base font-medium">
              "Facere aliquam itaque quia recusandae, corporis fugit fugiat eaque, accusamus officiis reprehenderit. Facere aliquam itaque quia recusandae, corporis fugit fugiat eaque, accusamus officiis reprehenderit. Velit id facilis odit aliquid laudantium. Tempore, sequi. Harum nesciunt, magni aperiam est?"
            </p>
            <div className="mt-6">
              <p className="font-bold text-xs text-[#151621]">Edward Steen</p>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-yellow-500"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-[10px] text-[#151621] mt-3 font-bold">CEO</p>
            </div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* --- BLOG SECTION --- */}
      <section id="blog" className="py-20 bg-[#F3F3F3] text-center">
        <p className="text-[10px] tracking-[0.4em] text-[#2D0052] font-bold">BLOG</p>
        <h2 className="text-[#2D0052] text-4xl font-serif mt-2 mb-12 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
          Our Latest Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {([
            { id: 1, img: '/avatar.png' },
            { id: 2, img: '/avatar2.jpg' },
            { id: 3, img: '/avatar3.png' },
          ]).map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.img}
                alt="Blog Post"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <p className="text-[10px] text-[#2D0052] font-bold mb-2">MAR 11, 2025</p>
                <h3 className="text-lg font-serif text-[#2D0052] mb-4">
                  How to Get Glowing Skin and Anti-Aging Skin Care for face
                </h3>
                <a
                  href="#"
                  className="text-[#2D0052] text-[10px] font-bold tracking-[0.3em] hover:underline"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER FORM --- */}
     <footer className="relative bg-[#2D0052] px-8 pt-20 pb-16 overflow-hidden selection:bg-white selection:text-[#2D0052]">
      {/* --- Pattern Background Overlay --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/pattern-bg.png')] bg-repeat bg-center"></div>

      {/* --- Subscription Section --- */}
      <div className="relative z-10 max-w-7xl mx-auto flex items-end justify-between border-b border-white/10 pb-16">
        {/* Call to Action Text */}
        <div className="text-white text-[11px] font-bold tracking-[0.2em] leading-relaxed uppercase max-w-xs">
          Sign up now for <br /> exclusive special offers:
        </div>
        
        {/* Form Inputs and Button */}
        <div className="flex gap-10 items-end">
          <input 
            type="text" 
            placeholder="Full Name*" 
            className="bg-transparent border-b border-white/30 text-white placeholder:text-white/70 text-sm py-2 px-1 focus:outline-none focus:border-white transition-colors"
          />
          <input 
            type="email" 
            placeholder="Email Address*" 
            className="bg-transparent border-b border-white/30 text-white placeholder:text-white/70 text-sm py-2 px-1 focus:outline-none focus:border-white transition-colors"
          />
          <button className="bg-white text-[#2D0052] px-14 py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-transform hover:scale-105">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* --- Main Branding and Social Section --- */}
      <div className="relative z-10 max-w-7xl mx-auto pt-16 flex justify-between items-start">
        {/* Large Logo and Legal Block */}
        <div className="flex flex-col gap-10">
          <h1 
            className="text-white text-[10vw] font-serif tracking-tighter leading-none" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            TÚTÚ
          </h1>
          
          <div className="space-y-3 text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">
            {['HELP', 'PRIVACY', 'TERM OF USE'].map((link) => (
              <p key={link} className="cursor-pointer hover:text-white transition-colors">{link}</p>
            ))}
            <p className="normal-case pt-2">Copyright 2025. All right Reserved</p>
          </div>
        </div>

        {/* Social Icons (Placeholder SVG implementation) */}
        <div className="flex gap-6 pt-4 text-white/80">
          {/* Facebook */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.336v21.328C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.598 1.323-1.336V1.336C24 .597 23.403 0 22.675 0z"/></svg>
          {/* Twitter / X */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          {/* Instagram */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.069-1.646-.069-4.849 0-3.204.013-3.583.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.197-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default LandingPage;