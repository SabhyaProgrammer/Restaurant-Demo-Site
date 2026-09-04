import { motion } from 'framer-motion';

/**
 * MenuCard — displays a single menu item with name, description, price, and dietary tags.
 * Props: { item: { name, description, price, tags }, index }
 */

const tagColors = {
    vegetarian: 'text-green-600 border-green-200 bg-green-50',
    glutenFree: 'text-amber-600 border-amber-200 bg-amber-50',
    spicy: 'text-red-500 border-red-200 bg-red-50',
};

export default function MenuCard({ item, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            viewport={{ once: true, margin: '-30px' }}
            className="card p-6 hover:shadow-md transition-shadow group"
        >
            <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-lg text-brand-900 group-hover:text-accent-500 transition-colors leading-snug">
                    {item.name}
                </h3>
                <span className="text-accent-500 font-sans font-semibold text-base ml-4 shrink-0">
                    ${item.price}
                </span>
            </div>

            <p className="text-surface-800/60 text-sm leading-relaxed mb-4">
                {item.description}
            </p>

            {item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`text-[10px] uppercase tracking-wider rounded-full px-2.5 py-0.5 border font-sans font-medium ${tagColors[tag] || 'text-surface-800/50 border-surface-100'
                                }`}
                        >
                            {tag === 'glutenFree' ? 'Gluten Free' : tag}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
}
