import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/**
 * App — root layout component. Renders Navbar, page content (via Outlet), and Footer.
 * Scrolls to top on route change for a smooth user experience.
 */
export default function App() {
    const { pathname } = useLocation();

    // Scroll to top on navigation
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
