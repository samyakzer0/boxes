
import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Code2,
    Copy,
    Download,
    Eye,
    Layers,
    Palette,
    Sparkles,
    Zap
} from 'lucide-react';
import { ComponentCard } from '@/components/library/ComponentCard';
import { getFeaturedComponents } from '@/lib/constants/components';

export const HomePage: React.FC = () => {
    const components = getFeaturedComponents().slice(0, 6);

    const features = [
        {
            icon: Copy,
            title: 'Copy & Paste',
            description: 'Grab any component with a single click. No npm install, no config.',
            color: 'bg-neo-white'
        },
        {
            icon: Download,
            title: 'Download Ready',
            description: 'Get TypeScript files instantly. Batch download as ZIP.',
            color: 'bg-neo-white'
        },
        {
            icon: Eye,
            title: 'Live Preview',
            description: 'See every component in action before you copy.',
            color: 'bg-neo-white'
        },
        {
            icon: Palette,
            title: 'Neo-Brutalist',
            description: 'Bold borders, geometric shapes, high contrast. Unapologetically bold.',
            color: 'bg-neo-white'
        },
    ];

    const stats = [
        { value: '50+', label: 'Components' },
        { value: '100%', label: 'TypeScript' },
        { value: '0', label: 'Dependencies' },
        { value: '∞', label: 'Possibilities' },
    ];

    return (
        <div className="text-neo-black bg-neo-white min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b-4 border-neo-black">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 50px,
              #000 50px,
              #000 51px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 50px,
              #000 50px,
              #000 51px
            )`
                    }} />
                </div>

                <div className="relative container-neo py-20 md:py-32">
                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border-3 border-neo-black bg-neo-black text-neo-white shadow-neo-sm">
                            <Sparkles className="w-4 h-4" />
                            <span className="font-bold text-sm uppercase">Neo-Brutalist UI Components</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tight font-display">
                            BOLD COMPONENTS,<br />
                            <span className="text-neo-black  decoration-4 decoration-neo-black underline-offset-4">ZERO COMPROMISE.</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl md:text-2xl mb-10 max-w-2xl text-neo-gray-600 font-medium">
                            Copy-paste React components with thick borders, hard shadows, and unapologetic personality.
                            No dependencies. Just pure, bold UI.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/components"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-neo-black text-neo-white font-black text-lg uppercase
                         border-3 border-neo-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all"
                            >
                                <Layers className="w-5 h-5" />
                                Browse Components
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/docs"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-neo-white text-neo-black font-bold text-lg uppercase
                         border-3 border-neo-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all"
                            >
                                <Code2 className="w-5 h-5" />
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
                        <div className="relative mr-10">
                            <div className="w-72 h-72 border-4 border-neo-black bg-neo-white rotate-12 shadow-[12px_12px_0_0_#000]">
                                <div className="absolute inset-4 border-4 border-neo-black bg-neo-gray-200"></div>
                            </div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 border-4 border-neo-black bg-neo-black -rotate-6 shadow-[8px_8px_0_0_#000]">
                                <div className="absolute inset-4 border-4 border-neo-black bg-neo-white"></div>
                            </div>
                            <div className="absolute -bottom-8 -left-16 w-32 h-32 border-4 border-neo-black bg-neo-gray-400 rotate-12 shadow-[6px_6px_0_0_#000]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-neo-gray-50 border-b-4 border-neo-black">
                <div className="container-neo">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`p-8 text-center ${index < 3 ? 'md:border-r-4 md:border-neo-black' : ''
                                    } ${index % 2 === 0 ? 'border-r-4 border-neo-black md:border-r-0' : ''}
                  ${index < 2 ? 'border-b-4 border-neo-black md:border-b-0' : ''}`}
                            >
                                <div className="text-4xl md:text-5xl font-black mb-2 font-display">{stat.value}</div>
                                <div className="text-neo-gray-600 font-bold uppercase text-sm tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 md:py-32 bg-neo-white">
                <div className="container-neo">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4 font-display uppercase">
                            Why Boxes?
                        </h2>
                        <p className="text-xl max-w-2xl mx-auto text-neo-gray-600">
                            Everything you need to build brutally beautiful interfaces.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="p-6 border-3 border-neo-black bg-neo-white shadow-neo hover:-translate-y-1 hover:shadow-neo-md transition-all"
                            >
                                <div className={`w-14 h-14 border-3 border-neo-black ${feature.color} flex items-center justify-center mb-4 shadow-neo-sm`}>
                                    <feature.icon className="w-7 h-7 text-neo-black" />
                                </div>
                                <h3 className="text-xl font-black mb-2 uppercase">{feature.title}</h3>
                                <p className="text-neo-gray-600 text-sm font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Components */}
            {components.length > 0 && (
                <section className="py-20 md:py-32 bg-neo-gray-50 border-y-4 border-neo-black">
                    <div className="container-neo">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                            <div>
                                <span className="inline-block px-3 py-1 mb-4 text-sm font-bold bg-neo-black text-neo-white border-2 border-neo-black uppercase tracking-wider shadow-neo-sm">
                                    Featured
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black font-display uppercase">
                                    Popular Components
                                </h2>
                            </div>
                            <Link
                                to="/components"
                                className="group inline-flex items-center gap-2 font-bold hover:text-neo-gray-600 transition-colors uppercase tracking-wide"
                            >
                                View all components
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {components.map((component) => (
                                <ComponentCard
                                    key={component.id}
                                    component={component}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}
            {/* CTA Section */}
            <section className="py-20 md:py-32 bg-neo-white">
                <div className="container-neo">
                    <div className="border-4 border-neo-black p-8 md:p-16 text-center bg-neo-white shadow-[12px_12px_0_0_#000]">
                        <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                            <img src="/logo.png" alt="Boxes Logo" className="w-full h-full object-contain" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4 font-display uppercase">
                            Start Building Now
                        </h2>
                        <p className="text-xl mb-10 max-w-2xl mx-auto text-neo-gray-600">
                            Browse our collection of neo-brutalist components and start creating interfaces that stand out.
                        </p>
                        <Link
                            to="/components"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-neo-black text-neo-white font-black text-xl uppercase
                       border-3 border-neo-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all"
                        >
                            <Zap className="w-6 h-6" />
                            Explore Components
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </section>
        </div >
    );
};
