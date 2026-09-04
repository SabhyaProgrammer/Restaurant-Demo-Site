/**
 * CategoryTabs — sticky category tab/jump nav for the menu page.
 * Highlights the active category with an animated underline.
 *
 * Props:
 *   categories (string[]) — list of category names
 *   active (string) — currently active category
 *   onChange (fn) — callback when a tab is clicked
 */
import { motion } from 'framer-motion';

export default function CategoryTabs({ categories, active, onChange }) {
    return (
        <div className="sticky top-16 md:top-20 z-40 bg-surface-50/95 backdrop-blur-md border-b border-surface-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex overflow-x-auto scrollbar-hide gap-1 py-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => onChange(cat)}
                            className={`relative whitespace-nowrap px-5 py-2.5 text-sm font-sans tracking-wide rounded-md transition-colors cursor-pointer ${active === cat
                                    ? 'text-accent-500'
                                    : 'text-surface-800/60 hover:text-brand-500'
                                }`}
                        >
                            {cat}
                            {active === cat && (
                                <motion.span
                                    layoutId="category-underline"
                                    className="absolute left-2 right-2 -bottom-0.5 h-[2px] bg-accent-500 rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
