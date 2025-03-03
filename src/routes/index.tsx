import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import ConfirmationPage from '@/pages/ConfirmationPage';
import BlogApp from '@/pages/Csae';
import EulaPage from '@/pages/Eula';
import FaqPage from '@/pages/Faq';
import HomePage from '@/pages/HomePage';
import JammeBlogs from '@/pages/JammeBlogs';
import JStudio from '@/pages/jStudio';
import PrivacyPage from '@/pages/privacy';
import SurveyForm from '@/pages/SurveyForm';
import TermConditionPage from '@/pages/TermCondition';
import WaitListPage from '@/pages/WaitListPage';
import Mixpanel from "@/components/internal/mixpanel/mixpanel";

const RouteTracker = () => {
  const location = useLocation();
  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => {
    // When the user navigates to a new page
    const page = location.pathname;
    Mixpanel.track("Page View", { page });

    // Reset start time
    setStartTime(Date.now());

    // Track time spent when leaving the page
    return () => {
      const timeSpent = (Date.now() - startTime) / 1000; // Convert to seconds
      Mixpanel.track("Time Spent on Page", { page, timeSpent });
    };
  }, [location]);

  return null;
};

const RoutesIndex = () => {
  return (
    <Router>
      <RouteTracker /> {/* Tracks page views & time spent */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surveyform" element={<SurveyForm />} />
        <Route path="/blogs" element={<JammeBlogs />} />
        <Route path="/contact-us" element={<JStudio />} />
        <Route path="/csae" element={<BlogApp />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms-and-conditions" element={<TermConditionPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/eula" element={<EulaPage />} />
        <Route path="/waitlist" element={<WaitListPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesIndex;
