import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import MenuPage from './pages/Menu';
import Reservations from './pages/Reservations';
import Gallery from './pages/Gallery';
import AboutContact from './pages/AboutContact';

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
