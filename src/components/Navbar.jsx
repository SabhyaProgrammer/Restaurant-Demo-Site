import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navbar — sticky, transparent-to-solid on scroll, mobile hamburger menu.
 * Follows DESIGN_SYSTEM.md for colors and fonts.
 */
const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Menu', to: '/menu' },
    { label: 'Reservations', to: '/reservations' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'About & Contact', to: '/about' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || mobileOpen
                    ? 'bg-surface-50/95 backdrop-blur-md shadow-soft'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
                {/* Logo / Brand */}
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="font-serif text-xl md:text-2xl font-bold text-brand-900 tracking-tight group-hover:text-accent-500 transition-colors">
                        Wildflower
                    </span>
                    <span className="hidden sm:inline text-xs uppercase tracking-[0.25em] text-surface-800/60 font-sans mt-1">
                        Kitchen & Coffee
                    </span>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className={`relative text-sm font-sans tracking-wide transition-colors py-1 ${location.pathname === link.to
                                        ? 'text-accent-500'
                                        : 'text-surface-800 hover:text-brand-500'
                                    }`}
                            >
                                {link.label}
                                {location.pathname === link.to && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-accent-500 rounded-full"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <Link to="/reservations" className="hidden md:inline-flex btn-accent text-sm">
                    Reserve a Table
                </Link>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen((o) => !o)}
                    className="md:hidden text-brand-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md p-1"
                    aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="md:hidden overflow-hidden bg-surface-50/95 backdrop-blur-md border-t border-surface-100"
                    >
                        <ul className="flex flex-col gap-1 px-6 py-4">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.to}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                >
                                    <Link
                                        to={link.to}
                                        className={`block py-3 text-base font-sans tracking-wide transition-colors ${location.pathname === link.to
                                                ? 'text-accent-500 font-medium'
                                                : 'text-surface-800 hover:text-brand-500'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                            <li className="pt-2">
                                <Link to="/reservations" className="btn-accent text-sm w-full text-center">
                                    Reserve a Table
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
