import React from "react";
import SecondaryHeader from "@/components/layout/SecondaryHeader";

const SurveyForm: React.FC = () => {
    return (
        <>
            <SecondaryHeader />
            <main className="font-Chillax">
                <section className="w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#ffffff] to-[#757300]">
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
        </>
    );
};

export default SurveyForm;
