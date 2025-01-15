import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing LinkedIn and Instagram icons from react-icons/fa
import PrivacyPopover from '../PrivarcyPopover';
import TermsPopover from '../TermPopover';
import FAQPopover from '../FAQPopover';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Twitter from "@/assets/X.svg"

const Footer = () => {
    const [isPrivacyOpen, setPrivacyOpen] = useState<boolean>(false);
    const [isTermsOpen, setTermsOpen] = useState<boolean>(false);
    const [isFAQOpen, setFAQOpen] = useState<boolean>(false);

    return (
        <>
            <footer className="w-full h-[92px] flex flex-col lg:flex-row justify-between items-center lg:p-10 mb-10 gap-4 font-Chillax relative z-20">
                <div className="flex justify-center items-center gap-4 lg:gap-5 flex-wrap">
                    <Link
                        to="/blogs"
                        className="text-[#101010] text-sm transition-colors duration-300 hover:text-[#ff4d00]"
                    >
                        Blogs
                    </Link>
                    <Link
                        to="/privacy"
                        className="text-[#101010] text-sm transition-colors duration-300 hover:text-[#ff4d00]"
                    >
                        Privacy
                    </Link>
                    <Link
                        to="/csae"
                        className="text-[#101010] text-sm transition-colors duration-300 hover:text-[#ff4d00]"
                    >
                        Csae
                    </Link>
                    <Link
                        to="/terms-and-conditions"
                        className="text-[#101010] text-sm transition-colors duration-300 hover:text-[#ff4d00]"
                    >
                        Terms
                    </Link>
                    <Link
                        to="/faq"
                        className="text-[#101010] text-sm transition-colors duration-300 hover:text-[#ff4d00]"
                    >
                        FAQ'S
                    </Link>
                    <a
                        href="https://www.linkedin.com/company/jamme_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#101010] "
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://twitter.com/jamme_social"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#101010] hover:text-[#ff4d00]"
                    >
                        <img src={Twitter} alt="X" />
                    </a>
                    <a
                        href="https://www.instagram.com/jamme_social/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#101010] hover:text-[#ff4d00]"
                    >
                        <FaInstagram size={24} />
                    </a>
                </div>
                <p className="text-center text-black text-sm">
                    &copy; 2024{' '}
                    <a
                        href="https://voiaxis.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black transition-colors duration-300 hover:text-[#ff4d00]"
                    >
                        Voiaxis Ltd.
                    </a>{' '}
                    <button
                        onClick={() => alert('EULA clicked!')}
                        type="button"
                        className="text-[#232323] bg-transparent border-none outline-none text-sm transition-colors duration-300 hover:text-[#ff4d00]"
                        title="End User License Agreement"
                    >
                        EULA
                    </button>
                </p>
            </footer>

            {/* Popovers */}
            <PrivacyPopover isOpen={isPrivacyOpen} onClose={() => setPrivacyOpen(false)} />
            <TermsPopover isOpen={isTermsOpen} onClose={() => setTermsOpen(false)} />
            <FAQPopover isOpen={isFAQOpen} onClose={() => setFAQOpen(false)} />
        </>
    );
};

export default Footer;
