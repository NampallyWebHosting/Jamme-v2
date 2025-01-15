import React from "react";
import Logo from "@/assets/Logo.png";
import { Link } from "react-router-dom";

const SurveyForm: React.FC = () => {
    return (
        <main className="font-Chillax">
            <section className="w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#f1efe3] to-[#757300]">
                <header className="w-full h-24">
                    <nav className="w-full h-full flex justify-between items-center px-4 md:px-6 mt-4">
                        <Link
                            to="/"
                            className="group flex justify-center items-center gap-2 cursor-pointer animate-pulse"
                        >
                            <img
                                id="logo"
                                src={Logo}
                                alt="Jamme"
                                loading="lazy"
                                className="w-16 md:w-20 h-auto"
                            />
                            <p
                                id="logo__text"
                                className="text-lg md:text-xl font-bold text-gray-800 select-none opacity-0 transition-all ease-in-out duration-500 invisible group-hover:opacity-100 group-hover:visible"
                            >
                                JAMME
                            </p>
                        </Link>
                    </nav>
                </header>
                <div className="mt-8 w-full px-4 md:px-8">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdUdMJGQqeVUnzzUjaJmzEsk1n1iVve1N0-E6KyrInknklKcw/viewform?embedded=true"
                        width="100%"  // Makes the iframe responsive
                        height="600"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        title="Survey Form"
                        className="min-h-screen h-[7500px] w-full scrollbar-hidden"
                    >
                        Loading…
                    </iframe>
                </div>
            </section>
        </main>
    );
};

export default SurveyForm;
