import { motion } from 'framer-motion';

/**
 * TeamCard — displays a team member's photo, name, role, and bio.
 * Follows DESIGN_SYSTEM.md card styling with hover animation.
 *
 * Props: { name, role, bio, photoSrc }
 */
export default function TeamCard({ name, role, bio, photoSrc }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            className="card group"
        >
            <div className="aspect-[3/4] overflow-hidden">
                <img
                    src={photoSrc}
                    alt={`Portrait of ${name}, ${role}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                />
            </div>
            <div className="p-5">
                <h3 className="font-serif text-lg text-brand-900 mb-1">{name}</h3>
                <p className="text-accent-500 text-xs uppercase tracking-wider font-sans mb-3">
                    {role}
                </p>
                <p className="text-sm text-surface-800/70 leading-relaxed">{bio}</p>
            </div>
        </motion.div>
    );
}
