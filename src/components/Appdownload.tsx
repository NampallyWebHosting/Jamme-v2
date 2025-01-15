import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@/components/ui/dialog';
import SoonImage from '@/assets/Soon.png';        // Import the Soon.png image
import GooglePlayImage from '@/assets/GooglePlay.png';  // Import the GooglePlay.png image
import AppStoreImage from '@/assets/AppStore.png';  // Import the AppStore.png image
import BeatsGif from '@/assets/Beats.gif';          // Import Beats.gif from assets
import { Button } from './ui/button';
import { ReactTyped } from 'react-typed'; // Import ReactTyped
const Appdownload = () => {
    const [isDialogOpen, setDialogOpen] = useState(false);

    // Function to handle the dialog open state
    const openDialog = () => setDialogOpen(true);

    // String array for the typewriter effect
    const strings = [
        'Unplug to the real world',
        `<img id="beats__gif" src="${BeatsGif}" alt="Beats" class="w-[7.2vmin] h-[7.2vmin] inline-block" />`, // Use same size as text
        "It's human-to-human",
        `<img id="beats__gif" src="${BeatsGif}" alt="Beats" class="w-[7.2vmin] h-[7.2vmin] inline-block" />`, // Same size
        'Collab with people around the world',
        `<img id="beats__gif" src="${BeatsGif}" alt="Beats" class="w-[7.2vmin] h-[7.2vmin] inline-block" />`, // Same size
        'One expression - million decibels',
        `<img id="beats__gif" src="${BeatsGif}" alt="Beats" class="w-[7.2vmin] h-[7.2vmin] inline-block" />`, // Same size
        'Your voice canvas',
        `<img id="beats__gif" src="${BeatsGif}" alt="Beats" class="w-[7.2vmin] h-[7.2vmin] inline-block" />`, // Same size
        'Everyday manifest something',
        `<img id="beats__gif" src="${BeatsGif}" alt="Beats" class="w-[7.2vmin] h-[7.2vmin] inline-block" />`, // Same size
        "For humans over GPT's",
        `<img id="beats__gif" src="${BeatsGif}" alt="Beats" class="w-[7.2vmin] h-[7.2vmin] inline-block" />`, // Same size
        'Jam together - feel better',
        `<img id="beats__gif" src="${BeatsGif}" alt="Beats" class="w-[7.2vmin] h-[7.2vmin] inline-block" />`, // Same size
        'Live a Little',
        `<img id="beats__gif" src="${BeatsGif}" alt="Beats" class="w-[7.2vmin] h-[7.2vmin] inline-block" />`, // Same size
    ];

    return (
        <div className='fixed inset-0 flex items-center justify-center p-8 rounded-lg shadow-md z-10 font-Chillax'>
            <div className=" flex flex-col justify-center items-center">
                {/* Typewriter effect for the string */}
                <div className="text-[7.2vmin] block h-[90px] text-black lowercase text-center font-normal list-none">
                    <ReactTyped
                        strings={strings}
                        typeSpeed={70}
                        backSpeed={70}
                        loop
                        backDelay={1000}
                        showCursor={false}
                        fadeOut
                        fadeOutDelay={500}
                    />
                </div>

                {/* Button to trigger the dialog */}
                <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                        <Button
                            onClick={openDialog}
                            variant="ghost"
                            className="mt-4 h-12 text-black border-2 border-black rounded-full text-center font-medium  w-40 hover:bg-[#25A6E8] "
                        >
                            Get Jamme
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#25a6e8] border-none h-auto">
                        <DialogTitle className="text-center text-2xl font-light tracking-wider">
                            Coming Soon on
                        </DialogTitle>
                        {/* Images inside the dialog */}
                        <div className="flex flex-col justify-center items-center">
                            <img src={SoonImage} alt="Soon" />
                            <div className="flex flex-row items-center justify-center gap-4">
                                <a href={GooglePlayImage || "#"} target="_blank" rel="noopener noreferrer">
                                    <img src={GooglePlayImage} alt="Google Play" className="w-40" />
                                </a>
                                <a href={AppStoreImage || "#"} target="_blank" rel="noopener noreferrer">
                                    <img src={AppStoreImage} alt="Apple Store" className="w-40" />
                                </a>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>

            </div>
        </div>
    );
};

export default Appdownload;
