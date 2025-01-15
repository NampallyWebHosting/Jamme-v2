import SecondaryHeader from "@/components/layout/SecondaryHeader";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React, { useRef, useState } from "react";

type FAQKey =
    | "voiceMessageEncryption"
    | "moderation"
    | "blockingUsers"
    | "interestBasedAds"
    | "adPreferences"
    | "accountCreation";

const faqContent: Record<FAQKey, JSX.Element> = {
    voiceMessageEncryption: (
        <>
            <p className="mb-4 font-semibold">Are voice audio messages end-to-end encrypted?</p>
            <p className="mb-4">
                Users can enable message encryption in their settings. In the app with message
                encryption turned on, each message is encrypted end-to-end: Both on-device and cloud
                processing were designed with layers of security to help keep your Jamme experience
                safe. We have safeguards in place to protect data from being hacked. Data sent to
                our cloud is encrypted and securely stored in the cloud servers.
            </p>
            <p className="mb-4 font-semibold">A brief description of our encryption model follows:</p>
            <ul className="list-disc list-inside space-y-2">
                <li>
                    End-to-end encryption for audio streams involves accessing the audio frame or
                    packet and encrypting it post-compression before transmission to the Media
                    Server or cloud. Currently, the cloud manages encryption.
                </li>
                <li>
                    For storage in the cloud, we utilize SSE-S3 encryption, and for data
                    transmission from the cloud to mobile devices, we employ HTTPS through
                    CloudFront to ensure secure transmission.
                </li>
                <li>
                    We also follow a hybrid encryption model. Initially, we generate a pair of
                    asynchronous encryption keys on the client-side. The private key is stored
                    within the device's Keychain, while the public key is stored on our servers.
                </li>
                <li>
                    For each message that's sent, a unique symmetric AES-128 key (a message key) is
                    generated. This key is used to encrypt the actual content of the message. The
                    generated message key is then encrypted asymmetrically using the private key
                    from the sender's Keychain and the public keys of the other participants.
                </li>
                <li>
                    Upon receiving the message, the recipients can decrypt the message key using
                    their respective private keys. Once the message key is decrypted, it can be used
                    to decrypt the actual message content. The encrypted content of the messages is
                    persistently stored on our servers.
                </li>
            </ul>
        </>
    ),
    moderation: (
        <>
            <p className="mb-4 font-semibold">How is Jamme moderated?</p>
            <p className="mb-4">
                Jamme has a self-moderation policy: users have powerful tools to fully moderate
                behavior on their content—tools that other platforms typically reserve for
                themselves. You don't need to appeal to us as you can remove offending content
                yourself! You can delete, hide, and block troublemakers.
            </p>
            <p className="mb-4">
                We don't remove people platform-wide for polite disagreement or politics but do
                remove people for harassment, impersonation, foul behavior, and illegal content.
            </p>
        </>
    ),
    blockingUsers: (
        <>
            <p className="mb-4 font-semibold">What happens when I block someone?</p>
            <p className="mb-4">
                Users can block accounts on the platform they don't like. Blocking a user prevents
                the user from seeing or interacting with any of your content. When you block a user:
            </p>
            <ul className="list-disc list-inside space-y-2">
                <li>The user cannot see any content hosted by you in its entirety.</li>
                <li>
                    The user is removed from any of your interactions they might have previously
                    been registered.
                </li>
                <li>
                    The user cannot see any post or comment posted by you across the platform.
                </li>
            </ul>
        </>
    ),
    interestBasedAds: (
        <>
            <p className="mb-4 font-semibold">What is interest-based ads?</p>
            <p className="mb-4">
                Interest-based ads highlight products and services relevant to you based on your
                interests. For example, if you listen to a 'Nike shoe' audio advertisement, you may
                later receive a relevant ad on the platform related to footwear.
            </p>
            <p className="mb-4">
                We share advertising IDs with third-party skill and content providers who want to
                deliver ads on Jamme. An advertising ID is a unique string of letters and numbers
                that does not contain information directly identifying you, like your name or email
                address. It's a privacy-protecting way to help advertisers deliver ads while keeping
                track of your preferences.
            </p>
            <p className="mb-4">
                Each Jamme user advert interest has unique advertising IDs specific to each skill
                developer and content provider, designed to prevent developers and advertisers from
                creating advertising profiles based on interactions.
            </p>
        </>
    ),
    adPreferences: (
        <>
            <p className="mb-4 font-semibold">How do I manage my advertising preferences on Jamme?</p>
            <p className="mb-4">
                You can instruct us not to use the advertising IDs to deliver interest-based audio
                ads to you. You only need to set this preference once for all third parties because
                this setting applies to your Jamme account.
            </p>
            <p className="mb-4">
                Manage these preferences or reset your advertising preferences in the Jamme app
                (Settings &gt; Jamme Privacy &gt; Manage Audio Ad Permissions and Ad Preferences).
            </p>
        </>
    ),
    accountCreation: (
        <>
            <p className="mb-4 font-semibold">
                Why Jamme asks for certain info to create an account?
            </p>
            <p className="mb-4">
                When you create a Jamme Account, we ask for some personal information to help keep
                your account secure and make our services more useful. To learn more, read the Jamme
                Privacy Policy.
            </p>
            <p className="mb-4">What we ask for and why:</p>
            <ul className="list-disc list-inside space-y-2">
                <li>
                    <strong>Full Name:</strong> Used when sharing content with others to display
                    your identity.
                </li>
                <li>
                    <strong>Username:</strong> Your unique identifier to sign in and use Jamme
                    services.
                </li>
                <li>
                    <strong>Password:</strong> A strong password ensures account security.
                </li>
                <li>
                    <strong>Birthday:</strong> Required to meet age restrictions in certain regions
                    or services.
                </li>
                <li>
                    <strong>Gender:</strong> Used for personalization but not visible unless shared.
                </li>
                <li>
                    <strong>Phone Number:</strong> Optional but useful for recovery and
                    authentication.
                </li>
                <li>
                    <strong>Email Address:</strong> Helps keep your account secure and facilitates
                    recovery.
                </li>
                <li>
                    <strong>Professions:</strong> Build professional networks and opportunities.
                </li>
                <li>
                    <strong>Interests:</strong> Help others understand your hobbies and values.
                </li>
            </ul>
        </>
    ),
};



const FAQ: React.FC = () => {
    const sectionRefs = useRef<Record<FAQKey, HTMLDivElement | null>>({
        voiceMessageEncryption: null,
        moderation: null,
        blockingUsers: null,
        interestBasedAds: null,
        adPreferences: null,
        accountCreation: null,
    });

    const [activeSection, setActiveSection] = useState<FAQKey>("voiceMessageEncryption");

    const handleSectionClick = (section: FAQKey) => {
        setActiveSection(section);
        sectionRefs.current[section]?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <SecondaryHeader />
            <div className="flex flex-col font-Inter">
                {/* Banner */}
                <div className="lg:mt-10">
                    <div className="container mx-auto py-6 px-4 flex flex-col gap-4 md:items-center md:justify-center">
                        <h1 className="scroll-m-20 text-6xl font-semibold leading-tight text-center">Frequently Asked Questions (FAQs)</h1>
                        <p className="text-xl text-center">Here’s some of the most frequently asked questions about Jamme.</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col-reverse md:flex-row md:mt-10 gap-4 md:px-10 lg:px-40">
                    <div className="flex-1 p-4">
                        <div className="pb-8 text-2xl font-semibold tracking-wider leading-6">
                            Our CSAE policy ensures a safe digital environment by prioritizing child safety and leveraging technology.
                        </div>
                        {Object.keys(faqContent).map((key) => {
                            const csaeKey = key as FAQKey;
                            return (
                                <div
                                    key={csaeKey}
                                    ref={(el) => (sectionRefs.current[csaeKey] = el)}
                                    className="section-content mb-8"
                                >
                                    <div className="capitalize tracking-wider text-lg font-semibold leading-tight text-left">
                                        {csaeKey.replace(/([A-Z])/g, " $1").trim()}
                                    </div>
                                    <div className="mt-4 text-gray-500 tracking-normal text-sm">
                                        {faqContent[csaeKey]}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Table of Contents */}
                    <div className="w-full md:w-72 lg:w-1/4 p-4">
                        <CardTitle className="font-bold text-xl mb-2 ml-2 tracking-wider">Table of contents</CardTitle>
                        <Card className="text-sm p-2">
                            {Object.keys(faqContent).map((key) => {
                                const csaeKey = key as FAQKey;
                                return (
                                    <CardContent
                                        key={csaeKey}
                                        className="relative cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 p-2 rounded flex items-center"
                                        onClick={() => handleSectionClick(csaeKey)}
                                    >
                                        {/* Active indicator */}
                                        {activeSection === csaeKey && (
                                            <span
                                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 w-1 h-5"
                                                style={{
                                                    borderRadius: "4px 0 0 4px",
                                                }}
                                            />
                                        )}
                                        <span className="text-gray-900 font-semibold tracking-wider">
                                            {csaeKey.replace(/([A-Z])/g, " $1").trim()}
                                        </span>
                                    </CardContent>
                                );
                            })}
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;
