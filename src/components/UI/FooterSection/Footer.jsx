import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white mt-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-20 pb-7">
        {/* Top Section: Brand identity, tagline, and social links */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-7xl font-bold mb-4">KeenKeeper</h2>

          <p className="text-white/80">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

           {/* Social media links  */}
          <p className="font-medium mt-6">Social Links</p>

          <div className="flex items-center justify-center gap-3 mt-4">
            {[IoLogoInstagram, FaFacebookSquare, FaXTwitter].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center
                             hover:bg-white/10 transition-colors"
                >
                  <Icon size={20} className="text-black" />
                </a>
              ),
            )}
          </div>
        </div>

         {/* footer Bottom  */}
        <div className="border-t border-[#1A8862]/20 pt-7 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-5">
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
};

export default Footer;
