import React from "react";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

interface TermsPopoverProps {
    isOpen: boolean;
    onClose: () => void;
}

const TermsPopover: React.FC<TermsPopoverProps> = ({ isOpen, onClose }) => {
    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg overflow-y-auto max-h-[70vh] font-Chillax">
                <div className="absolute top-4 right-4">
                    <AlertDialogCancel
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
                    >
                        <X size={20} />
                    </AlertDialogCancel>
                </div>
                <AlertDialogHeader className="border-b pb-4 mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Terms and Conditions</h3>
                </AlertDialogHeader>
                <AlertDialogDescription className="space-y-4 text-sm text-gray-700">
                    <div className="space-y-4">
                        <p>
                            Effective Date: July 7<sup>th</sup>, 2021
                        </p>
                        <p>
                            These "Terms of Use" or simply "Terms" dictate your interaction with a variety of web pages
                            and mobile apps ("Website") managed by Voiaxis Ltd., its affiliates, or subsidiaries
                            ("Voiaxis", "We", or "Us"). "You" or "Your" refer to you as the user, whether as an
                            individual, a group, or an entity.
                        </p>
                        <p>
                            Some sections of these Terms are specific to certain Services. For instance, special
                            conditions apply to the Jamme mobile app ("Jamme"). Your use of Jamme is regulated under
                            Section 14 and the End User License Agreement (EULA), which is mandatory to agree to when
                            using the Jamme app.
                        </p>
                        <h5 className="text-lg font-medium text-gray-900 mt-6">1. Changes</h5>
                        <p>
                            These Terms are effective as of the Effective Date above. If you have not reviewed the Terms
                            applicable to a Service since the Effective Date, please review these updated Terms
                            carefully before using any Service.
                        </p>
                        <h5 className="text-lg font-medium text-gray-900 mt-6">2. Privacy Policy</h5>
                        <p>
                            Our Privacy Policy describes our practices concerning data that you provide or that we may
                            collect about you through the Services, and you consent to our use of data in compliance
                            with the Privacy Policy. Our Privacy Policy can be found at{" "}
                            <a
                                href="https://jamme.app/pages/privacy.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                https://jamme.app/pages/privacy.html
                            </a>
                        </p>
                        <h5 className="text-lg font-medium text-gray-900 mt-6">3. Access to the Services</h5>
                        <p>
                            The Services are intended solely and exclusively for residents of the United Kingdom, its
                            territories, and possessions while they are located in the U.K. Use of and registration for
                            the Services are void where prohibited.
                        </p>
                        <h5 className="text-lg font-medium text-gray-900 mt-6">4. Intellectual Property; License</h5>
                        <p>
                            The audio and video materials, photographs, text, graphics, logos, layouts, designs,
                            interfaces, software, data, and other content associated with the Website and the Services
                            ("Content") are protected by intellectual property and other laws in the United Kingdom,
                            India, and other countries.
                        </p>
                        <h5 className="text-lg font-medium text-gray-900 mt-6">5. Legal Complaints</h5>
                        <p>
                            If you believe that any material available on or through the Application infringes upon any
                            copyright you own or control, please notify us at{" "}
                            <a
                                href="mailto:legal@jamme.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                legal@jamme.app
                            </a>
                            .
                        </p>
                        <h5 className="text-lg font-medium text-gray-900 mt-6">Community Guidelines</h5>
                        <p>
                            Share only your original voice recordings and photos, and maintain respect for the Jamme
                            community. Avoid explicit content and inappropriate language.
                        </p>
                        <h5 className="text-lg font-medium text-gray-900 mt-6">16. Class Action Waiver</h5>
                        <p>
                            Any legal dispute under these Terms will take place on an individual basis; class actions
                            are not permitted.
                        </p>
                        <p className="font-medium text-red-500">
                            For more details, contact us at{" "}
                            <a
                                href="mailto:legal@jamme.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                legal@jamme.app
                            </a>
                            .
                        </p>
                    </div>
                </AlertDialogDescription>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default TermsPopover;
