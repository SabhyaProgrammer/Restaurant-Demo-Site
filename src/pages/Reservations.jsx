import { motion } from 'framer-motion';
import { Clock, Phone } from 'lucide-react';
import ReservationForm from '../components/ReservationForm';
import MapEmbed from '../components/MapEmbed';
import businessData from '../data/businessData';

/**
 * Reservations page — reservation form, business hours, cancellation policy, and map.
 * Reuses MapEmbed.jsx from Agent 3.
 */

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, margin: '-50px' },
};

export default function Reservations() {
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
                        Join Us
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-surface-50 mb-4"
                    >
                        Reserve a Table
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-surface-50/60 text-lg max-w-lg mx-auto"
                    >
                        Pick a date and time, and we'll have everything ready for you.
                    </motion.p>
                </div>
            </section>

            {/* ── Main Content ─────────────────────────────────── */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Reservation Form — 3 columns */}
                        <motion.div {...fadeUp} className="lg:col-span-3">
                            <div className="card p-6 md:p-8">
                                <h2 className="font-serif text-2xl text-brand-900 mb-2">Make a Reservation</h2>
                                <p className="text-surface-800/50 text-sm mb-6">
                                    All fields marked with * are required.
                                </p>
                                <ReservationForm />
                            </div>
                        </motion.div>

                        {/* Sidebar — 2 columns */}
                        <motion.div
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: 0.15 }}
                            className="lg:col-span-2 space-y-6"
                        >
                            {/* Hours */}
                            <div className="card p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Clock size={18} className="text-accent-500" />
                                    <h3 className="font-serif text-xl text-brand-900">Hours</h3>
                                </div>
                                <div className="space-y-2">
                                    {businessData.hours.map((h) => (
                                        <div key={h.day} className="flex justify-between text-sm">
                                            <span className="font-medium text-surface-800">{h.day}</span>
                                            <span className="text-surface-800/60">{h.open} – {h.close}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cancellation Policy */}
                            <div className="card p-6">
                                <h3 className="font-serif text-lg text-brand-900 mb-2">Cancellation Policy</h3>
                                <p className="text-surface-800/60 text-sm leading-relaxed">
                                    {businessData.cancellationPolicy}
                                </p>
                            </div>

                            {/* Large Parties */}
                            <div className="card p-6 bg-brand-100/30">
                                <div className="flex items-center gap-2 mb-2">
                                    <Phone size={16} className="text-accent-500" />
                                    <h3 className="font-serif text-lg text-brand-900">Large Parties?</h3>
                                </div>
                                <p className="text-surface-800/60 text-sm leading-relaxed mb-3">
                                    For groups of 13 or more, please call us directly to arrange your reservation.
                                </p>
                                <a
                                    href={`tel:${businessData.phone.replace(/[^\d+]/g, '')}`}
                                    className="btn-secondary text-xs px-4 py-2"
                                >
                                    Call {businessData.phone}
                                </a>
                            </div>

                            {/* Map */}
                            <MapEmbed address={businessData.address.full} />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
