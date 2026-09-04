import { useState } from 'react';
import { motion } from 'framer-motion';
import galleryData from '../data/galleryData';
import LightboxGallery from '../components/LightboxGallery';

/**
 * Gallery page — responsive masonry-style grid with click-to-lightbox.
 * Images are lazy-loaded. Keyboard-accessible lightbox via LightboxGallery component.
 */
export default function Gallery() {
    const [lightboxIndex, setLightboxIndex] = useState(null);

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
                        A Glimpse Inside
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-surface-50 mb-4"
                    >
                        Gallery
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-surface-50/60 text-lg max-w-lg mx-auto"
                    >
                        Moments, meals, and the spaces in between.
                    </motion.p>
                </div>
            </section>

            {/* ── Gallery Grid (CSS columns for masonry effect) ── */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                        {galleryData.map((img, i) => (
                            <motion.button
                                key={img.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.04 }}
                                viewport={{ once: true, margin: '-30px' }}
                                onClick={() => setLightboxIndex(i)}
                                className="break-inside-avoid w-full rounded-lg overflow-hidden cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
                                aria-label={`View larger: ${img.alt}`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                    style={{ aspectRatio: img.aspectRatio }}
                                />
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Lightbox ─────────────────────────────────────── */}
            <LightboxGallery
                images={galleryData}
                activeIndex={lightboxIndex}
                onClose={() => setLightboxIndex(null)}
                onNavigate={setLightboxIndex}
            />
        </>
    );
}
