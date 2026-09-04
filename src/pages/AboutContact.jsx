import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import TeamCard from '../components/TeamCard';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';
import teamData from '../data/teamData';
import businessData from '../data/businessData';

/**
 * AboutContact page — Founder story, team cards, contact info, hours, map, and contact form.
 */

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, margin: '-50px' },
};

export default function AboutContact() {
    return (
        <>
            {/* ── Page Header ──────────────────────────────────── */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-900 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-accent-500 font-sans text-xs uppercase tracking-[0.3em] mb-4"
                    >
                        About & Contact
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-surface-50 mb-6"
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-surface-50/60 text-lg leading-relaxed max-w-xl mx-auto"
                    >
                        {businessData.story}
                    </motion.p>
                </div>
            </section>

            {/* ── Founder Story ────────────────────────────────── */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.img
                            {...fadeUp}
                            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=700&q=80"
                            alt="Chef Elena Morales at work in the Wildflower kitchen"
                            className="rounded-lg shadow-soft w-full object-cover aspect-[4/3]"
                            loading="lazy"
                        />
                        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
                            <p className="text-accent-500 font-sans text-xs uppercase tracking-[0.2em] mb-3">
                                The Beginning
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-6 leading-tight">
                                From Dream to Table
                            </h2>
                            <div className="space-y-4 text-surface-800/70 leading-relaxed">
                                <p>
                                    Wildflower Kitchen & Coffee started as a dream scribbled on a napkin — Chef Elena Morales imagined a place where the line between fine dining and everyday warmth didn't exist. A place where farmers, foragers, and families all had a seat at the table.
                                </p>
                                <p>
                                    In 2018, with a restored Pearl District space and a team of passionate culinary craftspeople, that napkin dream became reality. Every dish on our menu tells a story of local land, seasonal rhythm, and the joy of cooking with intention.
                                </p>
                                <p>
                                    Today, Wildflower is more than a restaurant — it's a gathering place. Whether you're sipping a lavender latte at dawn or lingering over braised short rib at dusk, you'll always find a warm welcome here.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── The Team ─────────────────────────────────────── */}
            <section className="py-16 md:py-24 bg-brand-100/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <p className="text-accent-500 font-sans text-xs uppercase tracking-[0.2em] mb-3">
                            The People
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-surface-800/60 max-w-lg mx-auto">
                            The talented people behind every plate, every pour, and every warm greeting.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamData.map((member) => (
                            <TeamCard key={member.name} {...member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Contact Section ──────────────────────────────── */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info + Map */}
                        <motion.div {...fadeUp}>
                            <p className="text-accent-500 font-sans text-xs uppercase tracking-[0.2em] mb-3">
                                Get in Touch
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-8">
                                Contact Us
                            </h2>

                            <div className="space-y-5 mb-8">
                                <div className="flex items-start gap-3">
                                    <MapPin size={20} className="text-accent-500 mt-1 shrink-0" />
                                    <p className="text-surface-800/70">
                                        {businessData.address.full}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={20} className="text-accent-500 shrink-0" />
                                    <a
                                        href={`tel:${businessData.phone.replace(/[^\d+]/g, '')}`}
                                        className="text-surface-800/70 hover:text-accent-500 transition-colors"
                                    >
                                        {businessData.phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail size={20} className="text-accent-500 shrink-0" />
                                    <a
                                        href={`mailto:${businessData.email}`}
                                        className="text-surface-800/70 hover:text-accent-500 transition-colors"
                                    >
                                        {businessData.email}
                                    </a>
                                </div>
                            </div>

                            {/* Hours Table */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <Clock size={18} className="text-accent-500" />
                                    <h3 className="font-serif text-xl text-brand-900">Hours</h3>
                                </div>
                                <div className="border border-surface-100 rounded-lg overflow-hidden">
                                    {businessData.hours.map((h, i) => (
                                        <div
                                            key={h.day}
                                            className={`flex justify-between px-4 py-2.5 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-surface-50'
                                                }`}
                                        >
                                            <span className="font-medium text-surface-800">{h.day}</span>
                                            <span className="text-surface-800/60">{h.open} – {h.close}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <MapEmbed address={businessData.address.full} />
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
                            <div className="card p-8">
                                <h3 className="font-serif text-2xl text-brand-900 mb-2">Send Us a Message</h3>
                                <p className="text-surface-800/60 text-sm mb-6">
                                    Have a question, feedback, or a private event inquiry? We'd love to hear from you.
                                </p>
                                <ContactForm />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
