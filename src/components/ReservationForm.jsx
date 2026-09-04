import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Loader2, Users, Calendar, Clock as ClockIcon, AlertCircle } from 'lucide-react';
import businessData from '../data/businessData';

/**
 * ReservationForm — Full Name, Email, Phone, Date picker, Time dropdown,
 * Party Size stepper, Special Requests textarea.
 * Client-side validation, loading spinner (~1s simulated delay), success confirmation.
 *
 * Placeholder submitReservation() function — plug in real API (Formspree/EmailJS/custom backend) here.
 */

/**
 * Generates available time slots from business hours for the selected day.
 * Returns 30-minute interval strings.
 */
function getTimeSlots(dayOfWeek) {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = dayNames[dayOfWeek];
    const dayHours = businessData.hours.find((h) => h.day === dayName);
    if (!dayHours) return [];

    const parseTime = (str) => {
        const [time, period] = str.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        if (period === 'PM' && hours !== 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
        return hours * 60 + minutes;
    };

    const start = parseTime(dayHours.open);
    const end = parseTime(dayHours.close) - 60; // Last seating 1hr before close
    const slots = [];
    for (let m = start; m <= end; m += 30) {
        const h = Math.floor(m / 60);
        const min = m % 60;
        const period = h >= 12 ? 'PM' : 'AM';
        const h12 = h % 12 || 12;
        slots.push(`${h12}:${min.toString().padStart(2, '0')} ${period}`);
    }
    return slots;
}

/**
 * Placeholder for real API submission.
 * Replace this with a call to Formspree, EmailJS, or your custom backend.
 */
async function submitReservation(data) {
    // Simulated network delay
    return new Promise((resolve) => setTimeout(resolve, 1200));
}

export default function ReservationForm() {
    const today = new Date().toISOString().split('T')[0];

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        partySize: 2,
        specialRequests: '',
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | loading | success

    // Get time slots based on selected date's day-of-week
    const timeSlots = useMemo(() => {
        if (!form.date) return [];
        const date = new Date(form.date + 'T12:00:00'); // avoid timezone issues
        return getTimeSlots(date.getDay());
    }, [form.date]);

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Full name is required.';
        if (!form.email.trim()) errs.email = 'Email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email.';
        if (!form.phone.trim()) errs.phone = 'Phone number is required.';
        else if (!/^[\d\s()+-]{7,}$/.test(form.phone)) errs.phone = 'Enter a valid phone number.';
        if (!form.date) errs.date = 'Please select a date.';
        else if (form.date < today) errs.date = 'Date cannot be in the past.';
        if (!form.time) errs.time = 'Please select a time.';
        if (form.partySize < 1 || form.partySize > 12) errs.partySize = 'Party size must be 1-12.';
        return errs;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        setStatus('loading');
        await submitReservation(form);
        setStatus('success');
    };

    const handleChange = (field) => (e) => {
        const value = e.target.type === 'number' ? parseInt(e.target.value, 10) : e.target.value;
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
        // Reset time if date changes (slots might differ)
        if (field === 'date') setForm((prev) => ({ ...prev, [field]: e.target.value, time: '' }));
    };

    const adjustPartySize = (delta) => {
        setForm((prev) => ({
            ...prev,
            partySize: Math.max(1, Math.min(12, prev.partySize + delta)),
        }));
    };

    // ── Success State ──────────────────────────────────────
    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                >
                    <CheckCircle size={64} className="mx-auto text-brand-500 mb-6" />
                </motion.div>
                <h3 className="font-serif text-3xl text-brand-900 mb-3">Reservation Confirmed!</h3>
                <p className="text-surface-800/60 text-lg mb-6 max-w-md mx-auto">
                    Thank you, <strong className="text-brand-900">{form.name}</strong>. We've reserved your table.
                </p>
                <div className="inline-flex flex-col sm:flex-row gap-4 text-sm bg-surface-50 border border-surface-100 rounded-lg p-5">
                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-accent-500" />
                        <span>{new Date(form.date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ClockIcon size={16} className="text-accent-500" />
                        <span>{form.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users size={16} className="text-accent-500" />
                        <span>{form.partySize} {form.partySize === 1 ? 'guest' : 'guests'}</span>
                    </div>
                </div>
            </motion.div>
        );
    }

    // ── Form State (idle / loading) ────────────────────────
    const inputClass = (field) =>
        `w-full border rounded-md px-4 py-3 text-sm font-sans bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 transition ${errors[field] ? 'border-red-400' : 'border-surface-100'
        }`;

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name */}
            <div>
                <label htmlFor="res-name" className="block text-sm font-sans text-surface-800 mb-1.5">
                    Full Name *
                </label>
                <input id="res-name" type="text" value={form.name} onChange={handleChange('name')} className={inputClass('name')} placeholder="Your full name" />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email & Phone */}
            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="res-email" className="block text-sm font-sans text-surface-800 mb-1.5">
                        Email *
                    </label>
                    <input id="res-email" type="email" value={form.email} onChange={handleChange('email')} className={inputClass('email')} placeholder="you@example.com" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="res-phone" className="block text-sm font-sans text-surface-800 mb-1.5">
                        Phone *
                    </label>
                    <input id="res-phone" type="tel" value={form.phone} onChange={handleChange('phone')} className={inputClass('phone')} placeholder="(503) 123-4567" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
            </div>

            {/* Date & Time */}
            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="res-date" className="block text-sm font-sans text-surface-800 mb-1.5">
                        Date *
                    </label>
                    <input id="res-date" type="date" min={today} value={form.date} onChange={handleChange('date')} className={inputClass('date')} />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>
                <div>
                    <label htmlFor="res-time" className="block text-sm font-sans text-surface-800 mb-1.5">
                        Time *
                    </label>
                    <select id="res-time" value={form.time} onChange={handleChange('time')} className={inputClass('time')} disabled={!form.date}>
                        <option value="">Select a time</option>
                        {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                        ))}
                    </select>
                    {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                </div>
            </div>

            {/* Party Size Stepper */}
            <div>
                <label className="block text-sm font-sans text-surface-800 mb-1.5">
                    Party Size *
                </label>
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => adjustPartySize(-1)}
                        className="w-10 h-10 rounded-md border border-surface-100 flex items-center justify-center text-brand-900 hover:bg-brand-100 transition-colors text-lg font-bold cursor-pointer"
                        aria-label="Decrease party size"
                    >
                        −
                    </button>
                    <span className="text-lg font-sans font-medium text-brand-900 w-8 text-center">
                        {form.partySize}
                    </span>
                    <button
                        type="button"
                        onClick={() => adjustPartySize(1)}
                        className="w-10 h-10 rounded-md border border-surface-100 flex items-center justify-center text-brand-900 hover:bg-brand-100 transition-colors text-lg font-bold cursor-pointer"
                        aria-label="Increase party size"
                    >
                        +
                    </button>
                    <span className="text-sm text-surface-800/50">
                        {form.partySize === 1 ? 'guest' : 'guests'}
                    </span>
                </div>
                {form.partySize >= 10 && (
                    <p className="flex items-center gap-1.5 text-xs text-accent-500 mt-2">
                        <AlertCircle size={14} />
                        For parties larger than 12, please call us directly.
                    </p>
                )}
                {errors.partySize && <p className="text-red-500 text-xs mt-1">{errors.partySize}</p>}
            </div>

            {/* Special Requests */}
            <div>
                <label htmlFor="res-requests" className="block text-sm font-sans text-surface-800 mb-1.5">
                    Special Requests <span className="text-surface-800/40">(optional)</span>
                </label>
                <textarea
                    id="res-requests"
                    rows={3}
                    value={form.specialRequests}
                    onChange={handleChange('specialRequests')}
                    className="w-full border border-surface-100 rounded-md px-4 py-3 text-sm font-sans bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 transition resize-none"
                    placeholder="Allergies, celebrations, seating preferences..."
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-accent w-full text-base disabled:opacity-60"
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 size={20} className="animate-spin mr-2" />
                        Booking...
                    </>
                ) : (
                    'Confirm Reservation'
                )}
            </button>
        </form>
    );
}
