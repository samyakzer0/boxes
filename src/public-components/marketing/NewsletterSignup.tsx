import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export interface NewsletterSignupProps {
    onSubmit: (email: string) => void;
    title?: string;
    description?: string;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
    onSubmit,
    title = 'Subscribe to our newsletter',
    description = 'Get the latest updates delivered to your inbox'
}) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            onSubmit(email);
            setEmail('');
        }
    };

    return (
        <div className="border-3 border-neo-black bg-neo-white p-6">
            <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 border-3 border-neo-black bg-neo-black text-neo-white
                                flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-lg font-bold uppercase mb-1">{title}</h3>
                    <p className="text-sm text-neo-gray-700">{description}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-3 py-2 border-3 border-neo-black font-bold text-sm
                               placeholder:text-neo-gray-500 focus:outline-none focus:ring-4
                               focus:ring-neo-gray-300"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-neo-black text-neo-white font-bold uppercase text-sm
                               border-3 border-neo-black shadow-neo hover:translate-x-[2px]
                               hover:translate-y-[2px] hover:shadow-none transition-all"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};
