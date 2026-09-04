import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Footer — contact info, social icons, hours, newsletter input (front-end only).
 * Follows DESIGN_SYSTEM.md.
 */

const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
];

export default function Footer() {
    return (
        <footer className="bg-brand-900 text-surface-50/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="inline-block mb-4">
                            <span className="font-serif text-2xl font-bold text-surface-50">
                                Wildflower
                            </span>
                            <span className="block text-xs uppercase tracking-[0.25em] text-surface-50/50 font-sans mt-1">
                                Kitchen & Coffee
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-surface-50/60 max-w-xs">
                            Seasonal plates, artisan coffee, and a warm welcome — rooted in community, crafted with care.
                        </p>
                        <div className="flex gap-3 mt-6">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-10 h-10 rounded-full border border-surface-50/20 flex items-center justify-center hover:bg-surface-50/10 transition-colors"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-sans text-sm uppercase tracking-wider text-surface-50 mb-4">
                            Explore
                        </h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { label: 'Our Menu', to: '/menu' },
                                { label: 'Reservations', to: '/reservations' },
                                { label: 'Gallery', to: '/gallery' },
                                { label: 'About & Contact', to: '/about' },
                            ].map(({ label, to }) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        className="hover:text-accent-500 transition-colors"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Hours */}
                    <div>
                        <h4 className="font-sans text-sm uppercase tracking-wider text-surface-50 mb-4">
                            Visit Us
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="mt-0.5 shrink-0 text-accent-500" />
                                <span>742 Evergreen Terrace,<br />Portland, OR 97205</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="shrink-0 text-accent-500" />
                                <a href="tel:+15031234567" className="hover:text-accent-500 transition-colors">
                                    (503) 123-4567
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="shrink-0 text-accent-500" />
                                <a href="mailto:hello@wildflowerkitchen.com" className="hover:text-accent-500 transition-colors">
                                    hello@wildflowerkitchen.com
                                </a>
                            </li>
                        </ul>
                        <div className="mt-5 text-sm space-y-1">
                            <p>Mon–Thu: 7 AM – 9 PM</p>
                            <p>Fri–Sat: 7 AM – 10 PM</p>
                            <p>Sunday: 8 AM – 4 PM</p>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-sans text-sm uppercase tracking-wider text-surface-50 mb-4">
                            Stay in the Loop
                        </h4>
                        <p className="text-sm text-surface-50/60 mb-4">
                            Be the first to hear about seasonal specials and events.
                        </p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                // Placeholder — no real submission
                            }}
                            className="flex gap-2"
                        >
                            <label htmlFor="newsletter-email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="newsletter-email"
                                type="email"
                                placeholder="Your email"
                                required
                                className="flex-1 bg-surface-50/10 border border-surface-50/20 rounded-md px-3 py-2 text-sm text-surface-50 placeholder:text-surface-50/40 focus:outline-none focus:ring-2 focus:ring-accent-500"
                            />
                            <button
                                type="submit"
                                className="bg-accent-500 hover:bg-accent-600 text-surface-50 px-4 py-2 rounded-md text-sm transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-surface-50/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-50/40">
                    <p>© {new Date().getFullYear()} Wildflower Kitchen & Coffee. All rights reserved.</p>
                    <p>Crafted with care in Portland, Oregon.</p>
                </div>
            </div>
        </footer>
    );
}
