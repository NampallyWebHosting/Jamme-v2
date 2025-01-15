import SecondaryHeader from "@/components/layout/SecondaryHeader";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React, { useRef, useState } from "react";
type PrivacyKey =
  | "overview"
  | "privacyPriority"
  | "dataCollection"
  | "sharingInfo"
  | "userBehavior"
  | "autoCollection"
  | "cookies"
  | "webWatch"
  | "businessTransfer"
  | "links"
  | "security"
  | "minors"
  | "emailCommunication"
  | "externalStorage"
  | "gdprRights"
  | "craRights"
  | "craDeletion"
  | "amendments"
  | "contactInfo";

const privacyContent: Record<PrivacyKey, JSX.Element> = {
  overview: (
    <>
      <p className="mb-4 font-semibold">Privacy Overview</p>
      <p className="mb-4">
        At Jamme Ads, owned and operated by Voiaxis Limited, we prioritize your privacy and the
        responsible use of your data. As part of our commitment to privacy, this policy outlines
        how we collect, use, store, and share your personal data, as well as the steps we take to
        ensure compliance with global data protection laws, including GDPR, CCPA, and COPPA.
      </p>
      <p className="mb-4">
        This policy also addresses concerns regarding the ethical handling of user data,
        particularly that of minors, and our efforts to adhere to government regulations around
        privacy and security.
      </p>
      <p className="mb-4">
        By using Jamme Ads, you agree to this Privacy Policy. If you do not agree, please
        discontinue your use of our services.
      </p>
    </>
  ),
  privacyPriority: (
    <p className="mb-4">Protecting your private information is our priority.</p>
  ),
  dataCollection: (
    <>
      <p className="mb-4 font-semibold">Data Collection</p>
      <p className="mb-4">
        Voiaxis may collect personal information about you, including but not limited to your:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Full Name</li>
        <li>Contact information (e.g., email, address, phone number, profession)</li>
        <li>Information about your devices (e.g., ISP information)</li>
        <li>Information about your voice (view, hear, and delete your voice recordings)</li>
        <li>Credit card/payment information for processing by a third-party</li>
        <li>
          Any other information you voluntarily provide to us, including information about your
          personal identity such as name, location, preferences, and content you put on the Site
          if you use the Services.
        </li>
      </ul>
      <p className="mb-4 mt-4">
        We do not collect any personal information about you unless you voluntarily provide it to
        us. However, you may be required to provide certain personal information to us when you
        elect to use the Services available on the Site. These may include:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Registering for an account on our Site</li>
        <li>Entering information for a link sponsored by us or one of our partners</li>
        <li>Signing up for special offers from selected third parties</li>
        <li>Sending us an email message</li>
        <li>
          Submitting your credit card or other payment information for payment processing by a
          third-party (e.g., Stripe)
        </li>
      </ul>
    </>
  ),
  sharingInfo: (
    <>
      <p className="mb-4 font-semibold">Sharing Information</p>
      <p className="mb-4">
        Voiaxis may share data with trusted partners to help perform statistical analysis, send you
        email or postal mail, provide customer support, or optimize your use of the Services. All
        third parties are prohibited from using your personal information except to provide these
        services to Voiaxis, and we will make reasonable efforts to ensure they are required to
        maintain the confidentiality of your information.
      </p>
    </>
  ),
  userBehavior: (
    <>
      <p className="mb-4 font-semibold">User Behavior</p>
      <p className="mb-4">
        Voiaxis may at its sole discretion keep track of the websites and pages our users visit
        within Voiaxis whether by desktop or mobile device, in order to determine what Voiaxis
        services are the most popular. This data is used to deliver customized content and
        advertising within Voiaxis to customers whose behavior indicates that they are interested
        in a particular subject area.
      </p>
    </>
  ),
  autoCollection: (
    <>
      <p className="mb-4 font-semibold">Automatic Data Collection</p>
      <p className="mb-4">
        Information about your computer hardware, mobile devices, and software may be automatically
        collected by Voiaxis. This information can include: your IP address, browser type, domain
        names, access times, and referring website addresses. This information is used for the
        operation of the service, to maintain quality of the service, and to provide general
        statistics regarding use of the Site.
      </p>
    </>
  ),
  cookies: (
    <>
      <p className="mb-4 font-semibold">Cookies</p>
      <p className="mb-4">
        The Voiaxis website may use “cookies” to help you personalize your online experience. A
        cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot
        be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned
        to you, and can only be read by a web server in the domain that issued the cookie to you.
      </p>
      <p className="mb-4">
        One of the primary purposes of cookies is to provide a convenience feature to save you
        time. For example, if you personalize Voiaxis pages or subdomains, or register with Voiaxis
        or use of the Services, a cookie helps Voiaxis to recall your specific information on
        subsequent visits.
      </p>
      <p className="mb-4">
        You have the ability to accept or decline cookies. Most web browsers automatically accept
        cookies, but you can usually modify your browser setting to decline cookies if you prefer.
        If you choose to decline cookies, you may not be able to fully experience the interactive
        features of the Site or the Services.
      </p>
    </>
  ),
  webWatch: (
    <>
      <p className="mb-4 font-semibold">Web Watch</p>
      <p className="mb-4">
        We may also use a technology called web watch to collect general information about your use
        of our website and your use of special promotions or newsletters. The information we
        collect by web beacons allows us to statistically monitor the number of people who open
        our emails. Web beacons also help us to understand the behavior of our customers, members,
        and visitors.
      </p>
    </>
  ),
  businessTransfer: (
    <>
      <p className="mb-4 font-semibold">Business Transfer</p>
      <p className="mb-4">
        If Voiaxis undergoes a Change of Control, your personal information may become an asset of
        such a transaction. You acknowledge that such transfers may occur, and that any acquirer of
        Voiaxis may continue to use your personal information as set forth in this policy.
      </p>
    </>
  ),
  links: (
    <>
      <p className="mb-4 font-semibold">Links to Third-Party Sites</p>
      <p className="mb-4">
        The Site may contain links to other third-party sites. Please be aware that we are not
        responsible for the content or privacy practices of such other sites. We encourage our
        users to be aware when they leave our site and to read the privacy statements of any other
        site that collects personally identifiable information.
      </p>
    </>
  ),
  security: (
    <>
      <p className="mb-4 font-semibold">Security</p>
      <p className="mb-4">
        Voiaxis secures your personal information from unauthorized access, use, or disclosure.
        Voiaxis uses SSL protocol for encrypting personal information. However, no data
        transmission over the internet or any wireless network can be guaranteed to be 100%
        secure.
      </p>
    </>
  ),
  minors: (
    <>
      <p className="mb-4 font-semibold">Minors</p>
      <p className="mb-4">
        Our services are not intended for—and we don't direct them to—anyone under 13. And that's
        why we do not knowingly collect personal information from anyone under 13.
      </p>
    </>
  ),
  emailCommunication: (
    <>
      <p className="mb-4 font-semibold">Email Communication</p>
      <p className="mb-4">
        From time to time, we may contact you via email for the purpose of providing announcements,
        promotional offers, alerts, confirmations, surveys, and/or other general communication. You
        may opt out of such communication by contacting us.
      </p>
    </>
  ),
  externalStorage: (
    <>
      <p className="mb-4 font-semibold">External Storage</p>
      <p className="mb-4">
        We may store your data on servers provided by third party hosting vendors with whom we have
        contracted.
      </p>
    </>
  ),
  gdprRights: (
    <>
      <p className="mb-4 font-semibold">GDPR Rights</p>
      <p className="mb-4">
        This section only applies to Users and Customers of the Services that are located in the
        European Economic Area, United Kingdom, and/or Switzerland (collectively, the “Designated
        Countries”) at the time of data collection. You may request to receive your personal
        information in a structured, commonly used, and machine-readable format, and to have us
        transfer your personal information directly to another “controller.”
      </p>
    </>
  ),
  craRights: (
    <>
      <p className="mb-4 font-semibold">CRA Rights</p>
      <p className="mb-4">
        The CRA provides British residents with specific rights regarding their personal
        information. You have the right to request that Voiaxis disclose certain information to you
        about our collection and use of your personal information over the past 12 months.
      </p>
    </>
  ),
  craDeletion: (
    <>
      <p className="mb-4 font-semibold">CRA Deletion</p>
      <p className="mb-4">
        You have the right to request that we delete any of your personal information that we
        collected from you and retained, subject to certain exceptions.
      </p>
    </>
  ),
  amendments: (
    <>
      <p className="mb-4 font-semibold">Amendments</p>
      <p className="mb-4">
        We reserve the right to change this Privacy Policy from time to time. Your continued use of
        the Site and/or Services after such modifications will constitute your acknowledgment of
        the modified Privacy Policy.
      </p>
    </>
  ),
  contactInfo: (
    <>
      <p className="mb-4 font-semibold">Contact Information</p>
      <p className="mb-4">
        Voiaxis LTD. 25, The Junction, Slough, London. SL2 5GE support@jamme.app
      </p>
    </>
  ),
};


const PrivacyPolicy: React.FC = () => {
  const sectionRefs = useRef<Record<PrivacyKey, HTMLDivElement | null>>({
    overview: null,
    privacyPriority: null,
    dataCollection: null,
    sharingInfo: null,
    userBehavior: null,
    autoCollection: null,
    cookies: null,
    webWatch: null,
    businessTransfer: null,
    links: null,
    security: null,
    minors: null,
    emailCommunication: null,
    externalStorage: null,
    gdprRights: null,
    craRights: null,
    craDeletion: null,
    amendments: null,
    contactInfo: null,
  });

  const [activeSection, setActiveSection] = useState<PrivacyKey>("overview");

  const handleSectionClick = (section: PrivacyKey) => {
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
            <h1 className="scroll-m-20 text-6xl font-semibold tracking-wide lg:text-[80px]">
              Privacy Policy
            </h1>
            <span className="text-sm font-normal tracking-wider text-gray-600">
              Last Updated: January 5, 2024
            </span>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex  flex-col-reverse md:flex-row md:mt-10 gap-4 md:px-10 lg:px-40">
          <div className="flex-1 p-4">
            <p className="pb-8 text-2xl font-semibold tracking-wider leading-6">
              This Privacy Policy will help you better understand how we collect, use, and share your personal information.
            </p>
            {Object.keys(privacyContent).map((key) => {
              const privacyKey = key as PrivacyKey;
              return (
                <div
                  key={privacyKey}
                  ref={(el) => (sectionRefs.current[privacyKey] = el)}
                  className="section-content mb-8"
                >
                  <h2 className=" capitalize tracking-wider text-lg font-semibold leading-tight  text-left">
                    {privacyKey.replace(/([A-Z])/g, " $1").trim()}
                  </h2>
                  <p className="mt-4 text-gray-500 tracking-normal text-sm">{privacyContent[privacyKey]}</p>
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-72 lg:w-1/4 p-4">
            <CardTitle className="font-bold text-xl mb-2 ml-2 tracking-wider ">Table of contents</CardTitle>
            <Card className="text-sm p-2">
              {Object.keys(privacyContent).map((key) => {
                const privacyKey = key as PrivacyKey;
                return (
                  <CardContent
                    key={privacyKey}
                    className="relative cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 p-2 rounded flex items-center"
                    onClick={() => handleSectionClick(privacyKey)}
                  >
                    {/* Active indicator */}
                    {activeSection === privacyKey && (
                      <span
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 w-1 h-5 "
                        style={{
                          borderRadius: "4px 0 0 4px",
                        }}
                      />
                    )}
                    <span className="text-gray-900 font-semibold tracking-wider">
                      {privacyKey.replace(/([A-Z])/g, " $1").trim()}
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

export default PrivacyPolicy;