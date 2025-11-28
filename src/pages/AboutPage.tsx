import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Github,
    Twitter,
    Heart,
    Zap,
    Users,
    Globe,
    Star
} from 'lucide-react';

export const AboutPage: React.FC = () => {
    const values = [
        {
            icon: Zap,
            title: 'Unapologetically Bold',
            description: 'We believe UI should make a statement. No more cookie-cutter designs.',
            color: 'bg-neo-white'
        },
        {
            icon: Users,
            title: 'Developer First',
            description: 'Built by developers, for developers. Copy, paste, and ship faster.',
            color: 'bg-neo-white'
        },
        {
            icon: Globe,
            title: 'Open Source',
            description: 'Free to use, modify, and share. Community-driven development.',
            color: 'bg-neo-white'
        },
        {
            icon: Heart,
            title: 'Accessibility Matters',
            description: 'Beautiful design that works for everyone, regardless of ability.',
            color: 'bg-neo-white'
        },
    ];

    return (
        <div className="min-h-screen bg-neo-white text-neo-black">
            {/* Hero */}
            <section className="border-b-4 border-neo-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                            <img src="/logo.png" alt="Boxes Logo" className="w-full h-full object-contain" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black mb-6 font-display uppercase">About Boxes</h1>
                        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-neo-gray-600">
                            A neo-brutalist component library for developers who want their interfaces
                            to stand out from the crowd.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-3 py-1 mb-4 text-sm font-bold bg-neo-black text-neo-white border-2 border-neo-black shadow-neo-sm uppercase">
                                Our Story
                            </span>
                            <h2 className="text-3xl md:text-4xl font-black mb-6 font-display uppercase">
                                Born From Frustration
                            </h2>
                            <p className="text-lg mb-4 text-neo-gray-600">
                                We were tired of seeing the same bland, generic UI patterns everywhere.
                                Every website looked the same—subtle shadows, rounded corners, and safe color choices.
                            </p>
                            <p className="text-lg mb-4 text-neo-gray-600">
                                Boxes was born from a desire to bring personality back to the web.
                                We embraced the neo-brutalist movement—thick borders, hard shadows,
                                and bold, unapologetic design choices.
                            </p>
                            <p className="text-lg text-neo-gray-600">
                                Today, Boxes provides developers with a collection of components that
                                make a statement while remaining accessible and easy to use.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="border-4 border-neo-black p-8 bg-neo-white rotate-3 shadow-[8px_8px_0_0_#000]">
                                <div className="space-y-4">
                                    <div className="h-8 border-3 border-neo-black bg-neo-black"></div>
                                    <div className="h-8 border-3 border-neo-black bg-neo-gray-400"></div>
                                    <div className="h-8 border-3 border-neo-black bg-neo-gray-200"></div>
                                    <div className="h-8 border-3 border-neo-black bg-neo-white"></div>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-neo-black bg-neo-black -rotate-12 shadow-[4px_4px_0_0_#000]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-neo-gray-50 border-y-4 border-neo-black">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1 mb-4 text-sm font-bold bg-neo-black text-neo-white border-2 border-neo-black shadow-neo-sm uppercase">
                            Our Values
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black font-display uppercase">What We Believe</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="p-6 border-3 border-neo-black bg-neo-white shadow-neo hover:-translate-y-1 hover:shadow-neo-md transition-all"
                            >
                                <div className={`w-14 h-14 border-3 border-neo-black ${value.color} flex items-center justify-center mb-4 shadow-neo-sm`}>
                                    <value.icon className="w-7 h-7 text-neo-black" />
                                </div>
                                <h3 className="text-lg font-black mb-2 uppercase">{value.title}</h3>
                                <p className="text-neo-gray-600 text-sm">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Source */}
            <section className="py-20 border-b-4 border-neo-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-8 border-4 border-neo-black bg-neo-black flex items-center justify-center shadow-neo">
                        <Github className="w-10 h-10 text-neo-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-6 font-display uppercase">100% Open Source</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-neo-gray-600">
                        Boxes is open source and free to use. Contribute, fork, or just star us on GitHub.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-neo-black text-neo-white font-bold uppercase
                       border-3 border-neo-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all"
                        >
                            <Github className="w-5 h-5" />
                            View on GitHub
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-neo-white text-neo-black font-bold uppercase
                       border-3 border-neo-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all"
                        >
                            <Star className="w-5 h-5" />
                            Star the Repo
                        </a>
                    </div>
                </div>
            </section>

            {/* Community */}
            <section className="py-20 bg-neo-gray-50 border-b-4 border-neo-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block px-3 py-1 mb-4 text-sm font-bold bg-neo-black text-neo-white border-2 border-neo-black shadow-neo-sm uppercase">
                            Community
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black mb-4 font-display uppercase">Join the Movement</h2>
                        <p className="text-xl text-neo-gray-600">
                            Connect with other developers building bold interfaces.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 text-center border-3 border-neo-black bg-neo-white shadow-neo hover:-translate-y-1 hover:shadow-neo-md transition-all group"
                        >
                            <Github className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-black mb-2 uppercase">GitHub</h3>
                            <p className="text-sm text-neo-gray-600">
                                Star, fork, and contribute
                            </p>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 text-center border-3 border-neo-black bg-neo-white shadow-neo hover:-translate-y-1 hover:shadow-neo-md transition-all group"
                        >
                            <Twitter className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-black mb-2 uppercase">Twitter</h3>
                            <p className="text-sm text-neo-gray-600">
                                Follow for updates
                            </p>
                        </a>
                        <a
                            href="https://discord.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 text-center border-3 border-neo-black bg-neo-white shadow-neo hover:-translate-y-1 hover:shadow-neo-md transition-all group"
                        >
                            <Users className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-black mb-2 uppercase">Discord</h3>
                            <p className="text-sm text-neo-gray-600">
                                Join the community
                            </p>
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-4 border-neo-black p-8 md:p-12 text-center bg-neo-white shadow-[8px_8px_0_0_#000]">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 font-display uppercase">
                            Ready to Build Bold?
                        </h2>
                        <p className="text-xl mb-8 text-neo-gray-600">
                            Start using Boxes components in your next project.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/components"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-neo-black text-neo-white font-black uppercase
                         border-3 border-neo-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all"
                            >
                                Browse Components
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/docs"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-neo-white text-neo-black font-bold uppercase
                         border-3 border-neo-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all"
                            >
                                Read the Docs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
