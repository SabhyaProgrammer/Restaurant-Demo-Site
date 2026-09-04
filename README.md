# Wildflower Kitchen & Coffee - Demo Site

A premium, responsive restaurant and cafe demonstration website built with React, Vite, and Tailwind CSS. The site showcases a boutique aesthetic with smooth scroll animations, a fully functional layout, and a masonry gallery.

## Features Built

- **Home Page**: Hero section, animated scroll indicators, featured dishes, and a marquee photo strip.
- **Menu Page**: Sticky category navigation, filterable grid, and beautiful menu cards with dietary tags.
- **Reservations Page**: Interactive booking form with date/time selection, client-side validation, simulated loading states, and dynamic time slots based on business hours.
- **Gallery Page**: CSS-columns masonry image grid with an accessible, keyboard-navigable Lightbox viewer.
- **About & Contact**: Founder story, team grid, hours, interactive Google Map embed, and contact form.
- **Animations**: Tasteful scroll-triggered view entry animations using Framer Motion.

## How to Run Locally

1. **Install Node.js & Dependencies:**
   Make sure you have Node > 16 installed. Clone this repository and run:
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

3. **Build for Production:**
   ```bash
   npm run build
   ```

## Editing Content

All dynamic data and site content have been neatly extracted into `src/data/`:
- **Change Menu Items:** Edit `src/data/menuData.js` to add, remove, or modify categories and dishes.
- **Change Business Info/Hours:** Edit `src/data/businessData.js`. The reservation form will automatically adjust available time slots based on these hours.
- **Change Gallery Images:** Edit `src/data/galleryData.js`.
- **Change Team Members:** Edit `src/data/teamData.js`.

## Customizing the Map

The map on the Home, Contact, and Reservations pages currently uses a free iframe embed without an API key, relying on a text search query for the address.
To display an interactive map using the [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started), set up an API key, and create a `.env` file in the root with:
```
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```
The site will gracefully upgrade the map components if this key is present.

## Changing Theme Colors & Fonts

The site uses a strict design system. To alter the aesthetic:
1. Open `tailwind.config.js`.
2. Modify the variables under `.colors.brand`, `.colors.accent`, and `.colors.surface`.
3. Open `src/index.css` to swap out the Google Font imports.
4. Update `fontFamily` in `tailwind.config.js` to match your new fonts.

## Connecting the Reservation Backend

Currently, `ReservationForm.jsx` (and `ContactForm.jsx`) use a simulated frontend-only loading state.
To plug in a real backend, navigate to `src/components/ReservationForm.jsx`, locate the placeholder `submitReservation` function around line 35, and hook it up to your endpoint (e.g., Formspree, EmailJS, or your custom server POST request):

```javascript
// Example with fetch:
async function submitReservation(data) {
  const response = await fetch('https://api.yourbackend.com/reserve', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });
  if (!response.ok) throw new Error('Booking failed');
}
```
