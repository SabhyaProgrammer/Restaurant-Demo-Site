/**
 * businessData.js — centralized business information for Wildflower Kitchen & Coffee.
 * Single source of truth for name, address, contact, hours, and story blurb.
 */

const businessData = {
    name: 'Wildflower Kitchen & Coffee',
    tagline: 'Seasonal plates, artisan coffee, and a warm welcome.',

    address: {
        street: '742 Evergreen Terrace',
        city: 'Portland',
        state: 'OR',
        zip: '97205',
        full: '742 Evergreen Terrace, Portland, OR 97205',
    },

    phone: '(503) 123-4567',
    email: 'hello@wildflowerkitchen.com',

    hours: [
        { day: 'Monday', open: '7:00 AM', close: '9:00 PM' },
        { day: 'Tuesday', open: '7:00 AM', close: '9:00 PM' },
        { day: 'Wednesday', open: '7:00 AM', close: '9:00 PM' },
        { day: 'Thursday', open: '7:00 AM', close: '9:00 PM' },
        { day: 'Friday', open: '7:00 AM', close: '10:00 PM' },
        { day: 'Saturday', open: '7:00 AM', close: '10:00 PM' },
        { day: 'Sunday', open: '8:00 AM', close: '4:00 PM' },
    ],

    socialLinks: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
    },

    story:
        'Wildflower Kitchen & Coffee was born from a simple belief: that great food starts with honest ingredients and a genuine love for the craft. Nestled in Portland\'s vibrant Pearl District, we source from local farms and roast our beans in-house to bring you seasonal plates and artisan coffee that feel like home — only better.',

    cancellationPolicy:
        'We kindly ask for at least 4 hours\' notice for cancellations or changes. For parties of 6 or more, 24 hours\' notice is appreciated.',
};

export default businessData;
