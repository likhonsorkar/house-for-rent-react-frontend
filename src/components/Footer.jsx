import React from 'react';

const Footer = () => {
    const socialLinks = [
        { label: "Facebook", url: "#" },
        { label: "Instagram", url: "#" },
        { label: "LinkedIn", url: "#" },
        { label: "Twitter", url: "#" },
    ];
    return (
        <footer className="bg-white border-t border-orange-50 pt-16 pb-8 px-4 md:px-8">
            <div className="container mx-auto">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* LEFT: Branding Section */}
                    <div className="lg:col-span-2 flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
                        <div className="flex items-center gap-2">
                            <div className="bg-orange-500 p-2 rounded-xl shadow-lg shadow-orange-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621 1.125-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </div>
                            <span className="font-black text-2xl tracking-tighter text-gray-800">
                                House<span className="text-orange-500">ForRent</span>
                            </span>
                        </div>
                        <p className="max-w-sm text-gray-500 text-base leading-relaxed">
                            Finding your next home shouldn't be a hassle. We provide a seamless experience to discover and rent properties that fit your lifestyle.
                        </p>
                    </div>
                    {/* MIDDLE: About Links */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h6 className="footer-title text-orange-600 opacity-100 font-bold text-lg mb-2">Company</h6>
                        <nav className="flex flex-col space-y-3 items-center md:items-start">
                            <a className="link link-hover text-gray-600 hover:text-orange-500 transition-colors">Our Story</a>
                            <a className="link link-hover text-gray-600 hover:text-orange-500 transition-colors">Meet the Team</a>
                            <a className="link link-hover text-gray-600 hover:text-orange-500 transition-colors">Careers</a>
                            <a className="link link-hover text-gray-600 hover:text-orange-500 transition-colors">Press Kit</a>
                        </nav>
                    </div>
                    {/* RIGHT: Help Links */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h6 className="footer-title text-orange-600 opacity-100 font-bold text-lg mb-2">Support</h6>
                        <nav className="flex flex-col space-y-3 items-center md:items-start">
                            <a className="link link-hover text-gray-600 hover:text-orange-500 transition-colors">Help Center</a>
                            <a className="link link-hover text-gray-600 hover:text-orange-500 transition-colors">Safety Rules</a>
                            <a className="link link-hover text-gray-600 hover:text-orange-500 transition-colors">Contact Us</a>
                            <a className="link link-hover text-gray-600 hover:text-orange-500 transition-colors">Privacy Policy</a>
                        </nav>
                    </div>
                </div>
                {/* BOTTOM: Copyright Section */}
                <div className="border-t border-orange-50 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400 font-medium tracking-wide order-2 md:order-1">
                        &copy; 2026 HouseForRent Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 order-1 md:order-2 text-gray-400">
                        {/* Social Media Icons (Optional but looks professional) */}
                        {socialLinks.map((social, index) => (
                            <a 
                                key={index} 
                                href={social.url} 
                                className="text-sm text-gray-400 hover:text-orange-500 transition-colors font-semibold"
                            >
                                {social.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;