import { ArrowDown } from "lucide-react";
import React, { useState, useEffect } from "react";
const MainContent: React.FC = () => {
    const firstBoxWords = ["hello", "வணக்கம்", "olá", "ciao"];
    const secondBoxWords = ["friend", "amigo", "Друг", "友達"];
    const thirdBoxWords = ["express", "يعبر", "表达", "äußern"];
    const fourthBoxWords = ["love", "प्यार", "liebe", "사랑"];

    const [firstBoxIndex, setFirstBoxIndex] = useState(0);
    const [secondBoxIndex, setSecondBoxIndex] = useState(0);
    const [thirdBoxIndex, setThirdBoxIndex] = useState(0);
    const [fourthBoxIndex, setFourthBoxIndex] = useState(0);
    const [isLeftFlip, setIsLeftFlip] = useState(true); // Toggle flip direction

    useEffect(() => {
        const interval = setInterval(() => {
            setIsLeftFlip((prev) => !prev); // Toggle flip direction
            setFirstBoxIndex((prev) => (prev + 1) % firstBoxWords.length);
            setSecondBoxIndex((prev) => (prev + 1) % secondBoxWords.length);
            setThirdBoxIndex((prev) => (prev + 1) % thirdBoxWords.length);
            setFourthBoxIndex((prev) => (prev + 1) % fourthBoxWords.length);
        }, 2500);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <>
            {/* first div */}
            <div className="fixed inset-0 flex items-center justify-center p-8 rounded-lg shadow-md z-10 font-Chillax">
                <div className="flex flex-col pt-10 md:pt-2">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-[150px] items-center justify-between p-10">
                        <div
                            className={`text-black text-xl font-semibold w-24 text-center ${isLeftFlip ? "word-flip-left" : "word-flip-right"
                                }`}
                        >
                            {firstBoxWords[firstBoxIndex]}
                        </div>
                        <div
                            className={`text-black text-xl font-semibold w-24 text-center ${isLeftFlip ? "word-flip-left" : "word-flip-right"
                                }`}
                        >
                            {secondBoxWords[secondBoxIndex]}
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-[10vmin] text-black font-medium leading-normal text-center animate-heroHeadingScale">
                                JAMME
                            </h1>

                        </div>
                        <div
                            className={`text-black text-xl font-semibold w-24 text-center ${isLeftFlip ? "word-flip-left" : "word-flip-right"
                                }`}
                        >
                            {thirdBoxWords[thirdBoxIndex]}
                        </div>
                        <div
                            className={`text-black text-xl font-semibold w-24 text-center ${isLeftFlip ? "word-flip-left" : "word-flip-right"
                                }`}
                        >
                            {fourthBoxWords[fourthBoxIndex]}
                        </div>

                    </div>
                    <div className="hidden lg:flex items-center justify-center lg:-mt-8 ">
                        <ArrowDown size={70} className="animate-bounce" />
                    </div>
                    <div className="lg:hidden flex items-center justify-center ">
                        <ArrowDown size={50} className="animate-bounce" />
                    </div>

                </div>
            </div>
        </>

    );
};

export default MainContent;
