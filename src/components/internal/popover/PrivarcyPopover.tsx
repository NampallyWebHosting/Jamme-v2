import React from "react";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

interface PopoverFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacyPopover: React.FC<PopoverFormProps> = ({ isOpen, onClose }) => {
    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg font-ch">
                {/* Close Button */}
                <div className="absolute top-4 right-4">
                    <AlertDialogCancel
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
                    >
                        <X size={20} />
                    </AlertDialogCancel>
                </div>

                {/* Header */}
                <AlertDialogHeader className="border-b pb-4 mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Privacy Policy</h3>
                </AlertDialogHeader>

                {/* Content */}
                <AlertDialogDescription className="space-y-4 text-sm text-gray-700 overflow-y-auto max-h-[70vh]">
                    <div className="space-y-4">
                        <p>
                            Effective Date: July 7<sup>th</sup>, 2021
                        </p>
                        <p>Protecting your private information is our priority.</p>
                        <p>
                            This Privacy Policy governs data collection and usage. For the purposes of this Privacy
                            Policy, unless otherwise noted, all references to Voiaxis include Voiaxis's website(s)
                            including without limitation, jamme.app and any mobile applications, including without
                            limitation, Jamme (collectively the “Site”) and Voiaxis Ltd., its subsidiaries and affiliates
                            (“Voiaxis”, “We” or “Us”).
                        </p>
                        <p>
                            The terms “You” or “Your” refer to You, the user(s) of the Site, regardless of whether you
                            are a sole natural person, using the Site jointly with another person or people, or an
                            entity.
                        </p>
                        <p>
                            Voiaxis is a messaging and chat platform (the “Services”). For the purposes of these Terms,
                            Services shall be defined broadly, and include other services provided by Voiaxis in the
                            future.
                        </p>
                        <p>
                            Our Terms are hereby incorporated in this Privacy Policy. If you access the Site via a
                            mobile application, you also agree to our EULA (End User License Agreement).
                        </p>
                        <p>
                            <strong>Collection of Your Personal Information:</strong> Voiaxis may collect personal
                            information, about you, including but not limited to your:
                        </p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Full Name</li>
                            <li>Contact information (e.g., email, address, phone number, profession)</li>
                            <li>Information about your devices (e.g., ISP information)</li>
                            <li>Information about your voice (view, hear, and delete your voice recordings)</li>
                            <li>Credit Card/Payment Information for processing by a third-party</li>
                        </ul>
                        <p>
                            Any other information you voluntarily provide to us including but not limited to
                            information which you provide while registering on the Site, including but not limited to
                            information about your personal identity such as name, location, preferences, or content
                            you put on the Site.
                        </p>

                        <h5 className="text-lg font-medium text-gray-900 mt-6">Tracking User Behaviour</h5>
                        <p>
                            Voiaxis may at its sole discretion keep track of the websites and pages our users visit
                            within Voiaxis whether by desktop or mobile device, in order to determine what Voiaxis
                            services are the most popular.
                        </p>

                        <h5 className="text-lg font-medium text-gray-900 mt-6">Automatically Collected Information</h5>
                        <p>
                            Information about your computer hardware, mobile devices, and software may be automatically
                            collected by Voiaxis. This information can include: your IP address, browser type, domain
                            names, access times, and referring website addresses.
                        </p>

                        <h5 className="text-lg font-medium text-gray-900 mt-6">Use of Cookies</h5>
                        <p>
                            The Voiaxis website may use “cookies” to help you personalize your online experience. A
                            cookie is a text file that is placed on your hard disk by a web page server.
                        </p>

                        <h5 className="text-lg font-medium text-gray-900 mt-6">Minors</h5>
                        <p>
                            Our services are not intended for—and we don't direct them to—anyone under 13. And that's
                            why we do not knowingly collect personal information from anyone under 13.
                        </p>

                        <h5 className="text-lg font-medium text-gray-900 mt-6">E-mail Communications</h5>
                        <p>
                            From time to time, we may contact you via email for the purpose of providing announcements,
                            promotional offers, alerts, confirmations, surveys, and/or other general communication. You
                            may opt out of such communication by contacting us.
                        </p>

                        <p className="font-medium text-red-500">
                            VOIAXIS LTD. <br />
                            25, The Junction, Slough, London. SL2 5GE <br />
                            <a
                                href="mailto:support@jamme.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-blue-600 hover:text-blue-800"
                            >
                                support@jamme.app
                            </a>
                        </p>
                    </div>
                </AlertDialogDescription>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default PrivacyPopover;
