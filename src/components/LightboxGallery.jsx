import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * LightboxGallery — click-to-expand image viewer with next/prev navigation,
 * close button, and keyboard support (ArrowLeft, ArrowRight, Escape).
 *
 * Props:
 *   images (array) — gallery image objects with { id, src, alt }
 *   activeIndex (number|null) — currently open image index, null if closed
 *   onClose (fn) — callback to close the lightbox
 *   onNavigate (fn) — callback with new index
 */
export default function LightboxGallery({ images, activeIndex, onClose, onNavigate }) {
    const isOpen = activeIndex !== null && activeIndex !== undefined;

    const handlePrev = useCallback(() => {
        if (!isOpen) return;
        onNavigate(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
    }, [isOpen, activeIndex, images.length, onNavigate]);

    const handleNext = useCallback(() => {
        if (!isOpen) return;
        onNavigate(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
    }, [isOpen, activeIndex, images.length, onNavigate]);

    // Keyboard support
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose, handlePrev, handleNext]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[100] bg-brand-900/95 backdrop-blur-sm flex items-center justify-center"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image lightbox"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-surface-50/70 hover:text-surface-50 transition-colors z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-full p-2"
                        aria-label="Close lightbox"
                    >
                        <X size={28} />
                    </button>

                    {/* Prev Button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-surface-50/50 hover:text-surface-50 transition-colors z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-full p-2"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={36} />
                    </button>

                    {/* Image */}
                    <motion.img
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{ duration: 0.3 }}
                        src={images[activeIndex]?.src}
                        alt={images[activeIndex]?.alt}
                        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg cursor-default"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Next Button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); handleNext(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-surface-50/50 hover:text-surface-50 transition-colors z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-full p-2"
                        aria-label="Next image"
                    >
                        <ChevronRight size={36} />
                    </button>

                    {/* Counter */}
                    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-surface-50/40 text-sm font-sans">
                        {activeIndex + 1} / {images.length}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
