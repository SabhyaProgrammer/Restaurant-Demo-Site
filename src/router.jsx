import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import App from './App';

// Lazy loading route components for code splitting which improves initial load times
const Home = lazy(() => import('./pages/Home'));
const MenuPage = lazy(() => import('./pages/Menu'));
const Reservations = lazy(() => import('./pages/Reservations'));
const Gallery = lazy(() => import('./pages/Gallery'));
const AboutContact = lazy(() => import('./pages/AboutContact'));

/**
 * React Router configuration for the site.
 * Routes: /, /menu, /reservations, /gallery, /about
 */
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'menu', element: <MenuPage /> },
            { path: 'reservations', element: <Reservations /> },
            { path: 'gallery', element: <Gallery /> },
            { path: 'about', element: <AboutContact /> },
        ],
    },
]);

export default router;
