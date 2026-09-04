import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Loading fallback for lazy loaded components
const PageLoader = () => (
    <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-12 h-12 border-4 border-brand-900 border-t-transparent rounded-full animate-spin"></div>
    </div>
);

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
                <Suspense fallback={<PageLoader />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}
