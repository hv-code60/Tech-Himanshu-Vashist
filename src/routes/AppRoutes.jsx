import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import CustomSoftwareDevelopment from '../pages/services/CustomSoftwareDevelopment';
import WebPortalDevelopment from '../pages/services/WebPortalDevelopment';
import MobileApplications from '../pages/services/MobileApplications';
import AIAutomation from '../pages/services/AIAutomation';
import CloudDevOps from '../pages/services/CloudDevOps';
import UIUXDesign from '../pages/services/UIUXDesign';
import AboutUs from '../pages/about';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
          <Route path="/services/web-portal-development" element={<WebPortalDevelopment />} />
          <Route path="/services/mobile-applications" element={<MobileApplications />} />
          <Route path="/services/ai-automation" element={<AIAutomation />} />
          <Route path="/services/cloud-devops" element={<CloudDevOps />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}