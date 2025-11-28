import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export interface SignUpFormProps {
    onSubmit: (name: string, email: string, password: string) => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        onSubmit(name, email, password);
    };

    return (
        <div className="border-4 border-neo-black bg-neo-white p-8 max-w-md mx-auto">
            <h2 className="text-3xl font-bold uppercase mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-3 border-neo-black font-bold
                                   focus:outline-none focus:ring-4 focus:ring-neo-gray-300"
                    />
                </div>
                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-3 border-neo-black font-bold
                                   focus:outline-none focus:ring-4 focus:ring-neo-gray-300"
                    />
                </div>
                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={8}
                            className="w-full px-4 py-3 pr-12 border-3 border-neo-black font-bold
                                       focus:outline-none focus:ring-4 focus:ring-neo-gray-300"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1
                                       hover:bg-neo-gray-100 transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">Confirm Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-3 border-neo-black font-bold
                                   focus:outline-none focus:ring-4 focus:ring-neo-gray-300"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-neo-black text-neo-white font-bold uppercase
                               border-3 border-neo-black shadow-neo hover:translate-x-[2px]
                               hover:translate-y-[2px] hover:shadow-none transition-all"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};
