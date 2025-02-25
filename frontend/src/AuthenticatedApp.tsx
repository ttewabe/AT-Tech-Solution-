import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderProvider from './components/headerFooterProvider/HeaderFooterProvider';
import HomeContent from './components/mainContent/homeContent/HomeContent';
import Services from './components/mainContent/services/Services';
import Portfolio from './components/mainContent/portfolio/Portfolio';
import Contact from './components/mainContent/contact/Contact';
import About from './components/mainContent/about/About';

const AuthenticatedApp: React.FC = () => {
    return (
        <Routes>
            <Route path="" element={<HeaderProvider />}>
                <Route path="/" element={<HomeContent />} />
                <Route path="home" element={<HomeContent />} />
                <Route path="services" element={<Services />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
};

export default AuthenticatedApp;
