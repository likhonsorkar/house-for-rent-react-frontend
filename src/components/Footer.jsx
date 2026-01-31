import React from 'react';

const Footer = () => {
    return (
        <footer>
           <div className="footer footer-center md:footer p-10 bg-white border-t border-orange-50 text-base-content lg:justify-items-center">
             {/* LEFT: Branding */}
            <div className="flex flex-col items-center md:items-start gap-3">
                <div className="flex items-center gap-2">
                <div className="bg-orange-500 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621 1.125-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
                <span className="font-black text-xl text-gray-800">HouseForRent</span>
                </div>
                <p className="max-w-xs text-center md:text-left text-gray-500 text-sm leading-relaxed">
                The world's most trusted marketplace for renting houses and apartments.
                </p>
            </div> 
            {/* RIGHT: Navigation Links (Responsive flex) */}
            <div className="grid grid-cols-2 md:flex md:gap-20 text-center md:text-left">
                <nav className="flex flex-col gap-3">
                <h6 className="footer-title text-orange-600 opacity-100 font-bold">About</h6> 
                <a className="link link-hover text-gray-500 text-sm">Our Story</a>
                <a className="link link-hover text-gray-500 text-sm">Team</a>
                <a className="link link-hover text-gray-500 text-sm">Careers</a>
                </nav> 
                <nav className="flex flex-col gap-3">
                <h6 className="footer-title text-orange-600 opacity-100 font-bold">Help</h6> 
                <a className="link link-hover text-gray-500 text-sm">Support Center</a>
                <a className="link link-hover text-gray-500 text-sm">Safety</a>
                <a className="link link-hover text-gray-500 text-sm">Contact Us</a>
                </nav>
            </div>
           </div>

            {/* BOTTOM (Centered on all) */}
            <div className="w-full border-t border-orange-50 pt-8 mb-2 col-span-full text-center">
                <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">
                &copy; 2026 HouseForRent Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;