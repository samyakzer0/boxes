import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-neo-white shadow-neo">
            <div className="container-neo">
                <div className="flex items-center justify-between h-[70px]">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="Boxes Logo" className="w-10 h-10" />
                        <span className="font-display text-2xl">BOXES</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            to="/components"
                            className="relative font-bold uppercase text-sm transition-all after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-neo-black after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Components
                        </Link>
                        <Link
                            to="/docs"
                            className="relative font-bold uppercase text-sm transition-all after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-neo-black after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Docs
                        </Link>
                        <Link
                            to="/about"
                            className="relative font-bold uppercase text-sm transition-all after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-neo-black after:transition-all after:duration-300 hover:after:w-full"
                        >
                            About
                        </Link>
                        <a
                            href="https://github.com/yourusername/boxes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex items-center gap-2 font-bold uppercase text-sm transition-all after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0  after:transition-all after:duration-300 hover:after:w-full"
                        >
                            <Github size={20} />
                           
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 border-2 border-neo-black"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            <div className="border-b-3 border-neo-black"></div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t-3 border-neo-black bg-neo-white">
                    <div className="container-neo py-4 space-y-4">
                        <Link
                            to="/components"
                            className="block font-bold uppercase text-sm hover:underline"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Components
                        </Link>
                        <Link
                            to="/docs"
                            className="block font-bold uppercase text-sm hover:underline"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Docs
                        </Link>
                        <Link
                            to="/about"
                            className="block font-bold uppercase text-sm hover:underline"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <a
                            href="https://github.com/yourusername/boxes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-bold uppercase text-sm hover:underline"
                        >
                            <Github size={20} />
                            GitHub
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
