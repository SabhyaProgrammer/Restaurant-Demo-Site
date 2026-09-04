import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Hero — full-viewport hero section for the Home page.
 * Animated entrance with parallax-like overlay.
 */
export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80')",
                }}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-900/70 via-brand-900/50 to-brand-900/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-accent-500 font-sans text-sm uppercase tracking-[0.3em] mb-4"
                >
                    Portland, Oregon
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-surface-50 leading-tight mb-6"
                >
                    Wildflower
                    <span className="block text-3xl sm:text-4xl md:text-5xl text-surface-50/80 mt-2">
                        Kitchen & Coffee
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-surface-50/70 font-sans text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
                >
                    Seasonal plates, artisan coffee, and a warm welcome — rooted in community, crafted with care.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        to="/reservations"
                        className="btn-accent text-base group"
                    >
                        Reserve a Table
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/menu"
                        className="btn-secondary border-surface-50/40 text-surface-50 hover:bg-surface-50/10 text-base"
                    >
                        View Menu
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="w-6 h-10 rounded-full border-2 border-surface-50/30 flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 bg-surface-50/60 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
