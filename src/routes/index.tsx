import ConfirmationPage from '@/pages/ConfirmationPage';
import ContactusPage from '@/pages/ContactusPage';
import BlogApp from '@/pages/Csae';
import EulaPage from '@/pages/Eula';
import FaqPage from '@/pages/Faq';
import HomePage from '@/pages/HomePage';
import JammeBlogs from '@/pages/JammeBlogs';
import PrivacyPage from '@/pages/privacy';
import SurveyForm from '@/pages/SurveyForm';
import TermConditionPage from '@/pages/TermCondition';
import WaitListPage from '@/pages/WaitListPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const RoutesIndex = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surveyform" element={<SurveyForm />} />
        <Route path="/blogs" element={<JammeBlogs />} />
        {/* <Route path="/contact-us" element={<ContactusPage />} /> */}
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
