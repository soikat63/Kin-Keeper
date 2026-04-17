import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-[#1B4332] text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* --- Top: Logo + tagline + social icons --- */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-1">KeenKeeper</h2>
          <p className="text-white/60 text-sm max-w-sm mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          {/* --- Social icon links --- */}
          <div className="flex items-center justify-center gap-3 mt-4">
            {[IoLogoInstagram, FaFacebookSquare, FaXTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-12 h-12 rounded-full border bg-white  border-white/30 flex items-center justify-center
                           hover:bg-white/10 transition-colors"
              >
                <Icon size={20} className="text-black" />
              </a>
            ))}
          </div>
        </div>

        {/* --- Bottom: copyright + legal links --- */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer