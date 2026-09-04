import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import menuData from '../data/menuData';
import MenuCard from '../components/MenuCard';
import CategoryTabs from '../components/CategoryTabs';

/**
 * Menu page — sticky category tabs/jump nav, responsive grid of MenuCards.
 */
export default function Menu() {
    const categories = useMemo(
        () => [...new Set(menuData.map((item) => item.category))],
        []
    );
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const filteredItems = useMemo(
        () => menuData.filter((item) => item.category === activeCategory),
        [activeCategory]
    );

    return (
        <>
            {/* ── Page Header ──────────────────────────────────── */}
            <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-brand-900 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-accent-500 font-sans text-xs uppercase tracking-[0.3em] mb-4"
                    >
                        Seasonal & Inspired
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-surface-50 mb-4"
                    >
                        Our Menu
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-surface-50/60 text-lg max-w-lg mx-auto"
                    >
                        Crafted daily from locally sourced ingredients.
                    </motion.p>
                </div>
            </section>

            {/* ── Sticky Category Tabs ─────────────────────────── */}
            <CategoryTabs
                categories={categories}
                active={activeCategory}
                onChange={setActiveCategory}
            />

            {/* ── Menu Grid ────────────────────────────────────── */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3 }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredItems.map((item, i) => (
                                <MenuCard key={item.id} item={item} index={i} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </>
    );
}
