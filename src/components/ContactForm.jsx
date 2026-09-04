import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

/**
 * ContactForm — name, email, message with validation, loading state, and success confirmation.
 * Front-end only — no real submission.
 */
export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | loading | success

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Name is required.';
        if (!form.email.trim()) errs.email = 'Email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            errs.email = 'Please enter a valid email.';
        if (!form.message.trim()) errs.message = 'Message is required.';
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        setStatus('loading');
        // Placeholder — simulate a network request
        setTimeout(() => {
            setStatus('success');
        }, 1200);
    };

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
            >
                <CheckCircle size={48} className="mx-auto text-brand-500 mb-4" />
                <h3 className="font-serif text-2xl text-brand-900 mb-2">Message Sent!</h3>
                <p className="text-surface-800/60">
                    Thank you, {form.name}. We'll get back to you shortly.
                </p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name */}
            <div>
                <label htmlFor="contact-name" className="block text-sm font-sans text-surface-800 mb-1.5">
                    Full Name
                </label>
                <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    className={`w-full border rounded-md px-4 py-3 text-sm font-sans bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 transition ${errors.name ? 'border-red-400' : 'border-surface-100'
                        }`}
                    placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="contact-email" className="block text-sm font-sans text-surface-800 mb-1.5">
                    Email
                </label>
                <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    className={`w-full border rounded-md px-4 py-3 text-sm font-sans bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 transition ${errors.email ? 'border-red-400' : 'border-surface-100'
                        }`}
                    placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
                <label htmlFor="contact-message" className="block text-sm font-sans text-surface-800 mb-1.5">
                    Message
                </label>
                <textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    className={`w-full border rounded-md px-4 py-3 text-sm font-sans bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 transition resize-none ${errors.message ? 'border-red-400' : 'border-surface-100'
                        }`}
                    placeholder="How can we help?"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full text-base disabled:opacity-60"
            >
                {status === 'loading' ? (
                    <Loader2 size={20} className="animate-spin mr-2" />
                ) : (
                    <Send size={18} className="mr-2" />
                )}
                {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
