import React, { useState } from 'react';

export interface FormValidationProps {
    onSubmit: (data: Record<string, string>) => void;
}

export const FormValidation: React.FC<FormValidationProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        website: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (formData.age && (isNaN(Number(formData.age)) || Number(formData.age) < 0)) {
            newErrors.age = 'Age must be a positive number';
        }

        if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
            newErrors.website = 'Website must start with http:// or https://';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
        }
    };

    return (
        <div className="border-4 border-neo-black bg-neo-white p-8 max-w-md">
            <h3 className="text-2xl font-bold uppercase mb-6">Form with Validation</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">
                        Name *
                    </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 border-3 font-bold focus:outline-none
                                   focus:ring-4 focus:ring-neo-gray-300 ${errors.name ? 'border-red-500' : 'border-neo-black'
                            }`}
                    />
                    {errors.name && (
                        <p className="text-red-600 text-sm font-bold mt-1">{errors.name}</p>
                    )}
                </div>

                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">
                        Email *
                    </label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 border-3 font-bold focus:outline-none
                                   focus:ring-4 focus:ring-neo-gray-300 ${errors.email ? 'border-red-500' : 'border-neo-black'
                            }`}
                    />
                    {errors.email && (
                        <p className="text-red-600 text-sm font-bold mt-1">{errors.email}</p>
                    )}
                </div>

                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">
                        Age
                    </label>
                    <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className={`w-full px-4 py-3 border-3 font-bold focus:outline-none
                                   focus:ring-4 focus:ring-neo-gray-300 ${errors.age ? 'border-red-500' : 'border-neo-black'
                            }`}
                    />
                    {errors.age && (
                        <p className="text-red-600 text-sm font-bold mt-1">{errors.age}</p>
                    )}
                </div>

                <div>
                    <label className="block font-bold mb-2 uppercase text-sm">
                        Website
                    </label>
                    <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://example.com"
                        className={`w-full px-4 py-3 border-3 font-bold focus:outline-none
                                   focus:ring-4 focus:ring-neo-gray-300 ${errors.website ? 'border-red-500' : 'border-neo-black'
                            }`}
                    />
                    {errors.website && (
                        <p className="text-red-600 text-sm font-bold mt-1">{errors.website}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-neo-black text-neo-white font-bold uppercase
                               border-3 border-neo-black shadow-neo hover:translate-x-[2px]
                               hover:translate-y-[2px] hover:shadow-none transition-all"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
