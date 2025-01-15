import Contact from '@/components/internal/contact-us/contact-us';
import BlogApp from '@/pages/Csae';
import FaqPage from '@/pages/Faq';
import HomePage from '@/pages/HomePage';
import JammeBlogs from '@/pages/JammeBlogs';
import PrivacyPage from '@/pages/privacy';
import SurveyForm from '@/pages/SurveyForm';
import TermConditionPage from '@/pages/TermCondition';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const RoutesIndex = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surveyform" element={<SurveyForm />} />
        <Route path="/blogs" element={<JammeBlogs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/csae" element={<BlogApp />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms-and-conditions" element={<TermConditionPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesIndex;
