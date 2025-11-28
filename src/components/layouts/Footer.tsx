import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="border-t-3 border-neo-black bg-neo-gray-50 mt-24">
            <div className="container-neo py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="Boxes Logo" className="w-10 h-10" />
                            <span className="font-display text-2xl">BOXES</span>
                        </div>
                        <p className="text-neo-gray-600 text-sm">
                            Neo-brutalist React component library. Copy-paste ready components with live previews.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-bold uppercase text-sm mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/components" className="text-neo-gray-600 hover:text-neo-black hover:underline text-sm">
                                    Components
                                </Link>
                            </li>
                            <li>
                                <Link to="/docs" className="text-neo-gray-600 hover:text-neo-black hover:underline text-sm">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-neo-gray-600 hover:text-neo-black hover:underline text-sm">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-bold uppercase text-sm mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/yourusername/boxes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 border-2 border-neo-black hover:bg-neo-black hover:text-neo-white transition-all"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 border-2 border-neo-black hover:bg-neo-black hover:text-neo-white transition-all"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t-3 border-neo-black">
                <div className="container-neo py-8">
                    <p className="text-neo-gray-600 text-sm">
                        © {new Date().getFullYear()} Boxes. Built with React & Tailwind CSS. Licensed under MIT.
                    </p>
                </div>
            </div>
        </footer>
    );
};
