import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import MapEmbed from '../components/MapEmbed';
import menuData from '../data/menuData';
import galleryData from '../data/galleryData';
import businessData from '../data/businessData';

/**
 * Home page — Hero, Our Story, Featured Dishes, Hours & Location, Photo Strip.
 */

/* Fade-up animation preset from DESIGN_SYSTEM.md */
const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, margin: '-50px' },
};

export default function Home() {
    const featured = menuData.filter((_, i) => [0, 4, 12, 14, 17, 20].includes(i));
    const photoStrip = galleryData.slice(0, 6);

    return (
        <>
            {/* ── Hero ─────────────────────────────────────────── */}
            <Hero />

            {/* ── Our Story ────────────────────────────────────── */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeUp}>
                            <p className="text-accent-500 font-sans text-xs uppercase tracking-[0.2em] mb-3">
                                Our Story
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-900 mb-6 leading-tight">
                                Rooted in Community,<br />Crafted with Care
                            </h2>
                            <p className="text-surface-800/70 leading-relaxed mb-6">
                                {businessData.story}
                            </p>
                            <Link
                                to="/about"
                                className="inline-flex items-center text-accent-500 font-sans text-sm tracking-wide hover:text-accent-600 transition-colors group"
                            >
                                Learn More About Us
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: 0.15 }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=700&q=80"
                                alt="Wildflower Kitchen outdoor patio with string lights"
                                className="rounded-lg shadow-soft w-full object-cover aspect-[4/5]"
                                loading="lazy"
                            />
                            {/* Decorative accent */}
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-accent-500/30 rounded-lg -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Featured Dishes ──────────────────────────────── */}
            <section className="py-16 md:py-24 bg-brand-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <p className="text-accent-500 font-sans text-xs uppercase tracking-[0.2em] mb-3">
                            From Our Kitchen
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl text-surface-50 mb-4">
                            Seasonal Favorites
                        </h2>
                        <p className="text-surface-50/60 max-w-lg mx-auto">
                            A handpicked selection of our most beloved dishes, crafted from the freshest ingredients each season brings.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featured.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                viewport={{ once: true, margin: '-30px' }}
                                className="bg-surface-50/5 backdrop-blur-sm border border-surface-50/10 rounded-lg p-6 hover:bg-surface-50/10 transition-colors group"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-serif text-lg text-surface-50 group-hover:text-accent-500 transition-colors">
                                        {item.name}
                                    </h3>
                                    <span className="text-accent-500 font-sans font-medium text-sm ml-4 shrink-0">
                                        ${item.price}
                                    </span>
                                </div>
                                <p className="text-surface-50/50 text-sm leading-relaxed mb-3">
                                    {item.description}
                                </p>
                                {item.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] uppercase tracking-wider text-accent-500/70 border border-accent-500/20 rounded-full px-2 py-0.5"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fadeUp} className="text-center mt-10">
                        <Link to="/menu" className="btn-accent text-base group">
                            View Full Menu
                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── Hours & Location ─────────────────────────────── */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <motion.div {...fadeUp}>
                            <p className="text-accent-500 font-sans text-xs uppercase tracking-[0.2em] mb-3">
                                Visit Us
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-8">
                                Hours & Location
                            </h2>

                            <div className="flex items-start gap-3 mb-6">
                                <MapPin size={20} className="text-accent-500 mt-1 shrink-0" />
                                <p className="text-surface-800/70">{businessData.address.full}</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <Clock size={20} className="text-accent-500 mt-1 shrink-0" />
                                <div className="space-y-1.5">
                                    {businessData.hours.map((h) => (
                                        <div key={h.day} className="flex justify-between text-sm text-surface-800/70 min-w-[240px]">
                                            <span className="font-medium text-surface-800">{h.day}</span>
                                            <span>{h.open} – {h.close}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
                            <MapEmbed address={businessData.address.full} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Photo Strip ──────────────────────────────────── */}
            <section className="py-8 overflow-hidden">
                <div className="flex gap-4 animate-marquee">
                    {[...photoStrip, ...photoStrip].map((img, i) => (
                        <motion.img
                            key={`${img.id}-${i}`}
                            src={img.src}
                            alt={img.alt}
                            className="h-48 sm:h-64 w-auto object-cover rounded-lg shrink-0"
                            loading="lazy"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            viewport={{ once: true }}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
