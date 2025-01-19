import React from "react";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

interface FAQPopoverProps {
    isOpen: boolean;
    onClose: () => void;
}

const FAQPopover: React.FC<FAQPopoverProps> = ({ isOpen, onClose }) => {
    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg overflow-y-auto max-h-[70vh]">
                <div className="absolute top-4 right-4">
                    <AlertDialogCancel
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
                    >
                        <X size={20} />
                    </AlertDialogCancel>
                </div>
                <AlertDialogHeader className="border-b pb-4 mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">FAQ's</h3>
                </AlertDialogHeader>
                <AlertDialogDescription className="space-y-6 text-sm text-gray-700">
                    <p>
                        Effective Date: July 7<sup>th</sup>, 2021
                    </p>
                    <h5 className="text-lg font-medium text-gray-900">Are voice audio messages end-to-end encrypted?</h5>
                    <p>
                        Users can enable message encryption in their settings. In the app with message encryption turned
                        on, each message is encrypted end-to-end: Both on-device and cloud processing were designed with
                        layers of security to help keep your Jamme experience safe.
                    </p>
                    <h5 className="text-lg font-medium text-gray-900">A brief description of our encryption model:</h5>
                    <p>
                        End-to-end encryption for audio streams involves accessing the audio frame or packet and
                        encrypting it post-compression before transmission to the Media Server or cloud.
                    </p>
                    <p>
                        For storage in the cloud, we utilize SSE-S3 encryption, and for data transmission from the cloud
                        to mobile devices, we employ HTTPS through CloudFront to ensure secure transmission.
                    </p>
                    <h5 className="text-lg font-medium text-gray-900">How is Jamme moderated?</h5>
                    <p>
                        Jamme has a self-moderation policy: users have powerful tools to moderate behavior on their
                        content. You can delete, hide, and block troublemakers. We remove individuals for harassment,
                        impersonation, foul behavior, and illegal content.
                    </p>
                    <h5 className="text-lg font-medium text-gray-900">What happens when I block someone?</h5>
                    <p>
                        Blocking a user prevents them from seeing or interacting with any of your content. The user
                        cannot view posts, comments, or participate in any interactions hosted by you.
                    </p>
                    <h5 className="text-lg font-medium text-gray-900">What is interest-based ads?</h5>
                    <p>
                        Interest-based ads highlight products and services relevant to you based on your interests. An
                        advertising ID is used to deliver ads without directly identifying you.
                    </p>
                    <h5 className="text-lg font-medium text-gray-900">
                        How do I manage my advertising preferences on Jamme?
                    </h5>
                    <p>
                        You can manage or reset your advertising preferences in the Jamme app under Settings &gt; Jamme
                        Privacy &gt; Manage Audio Ad Permissions and Ad Preferences.
                    </p>
                    <h5 className="text-lg font-medium text-gray-900">
                        Why Jamme asks for certain information to create an account?
                    </h5>
                    <p>
                        This info helps keep your account secure and makes our services more useful. Examples of
                        requested information include:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Full Name</li>
                        <li>Username</li>
                        <li>Password</li>
                        <li>Birthday</li>
                        <li>Gender</li>
                        <li>Phone Number</li>
                        <li>Email Address</li>
                        <li>Profession</li>
                        <li>Interests</li>
                    </ul>
                    <h5 className="text-lg font-medium text-gray-900">Service-specific age requirements:</h5>
                    <p>
                        Some services have age restrictions. For example, Jamme Connect is available only for users aged
                        18 and above.
                    </p>
                    <h5 className="text-lg font-medium text-gray-900">Contact Us:</h5>
                    <p>
                        For further questions, feel free to reach out to us at{" "}
                        <a
                            href="mailto:feedback@jamme.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            feedback@jamme.app
                        </a>
                        .
                    </p>
                </AlertDialogDescription>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default FAQPopover;
