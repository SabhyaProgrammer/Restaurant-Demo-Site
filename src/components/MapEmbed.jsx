/**
 * MapEmbed — reusable Google Maps iframe embed.
 * Used by both Home/AboutContact (Agent 3) and Reservations (Agent 5).
 *
 * Props:
 *   address (string) — full address to display
 *   className (string) — optional additional CSS classes
 *
 * Supports optional VITE_GOOGLE_MAPS_API_KEY env var.
 * Falls back to a simple iframe embed (no API key needed) if absent.
 */
export default function MapEmbed({ address, className = '' }) {
    const encodedAddress = encodeURIComponent(address);

    // If a Google Maps API key is provided via env, use the Embed API.
    // Otherwise, fall back to the free maps/embed endpoint (no key required).
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const mapSrc = apiKey
        ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}`
        : `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

    const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    return (
        <div className={`card overflow-hidden ${className}`}>
            <iframe
                title={`Map showing ${address}`}
                src={mapSrc}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
            />
            <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-sm text-surface-800">{address}</p>
                <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs px-4 py-2"
                >
                    Get Directions
                </a>
            </div>
        </div>
    );
}
