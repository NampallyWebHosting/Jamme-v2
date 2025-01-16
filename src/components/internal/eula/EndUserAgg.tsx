import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React, { useRef, useState } from "react";
import SecondaryHeader from "@/components/layout/SecondaryHeader";

type EULAKey =
  | "nonExclusiveLicense"
  | "yourAccount"
  | "amendments"
  | "noMaintenance"
  | "acceptableUse"
  | "privacy"
  | "consentToCommunication"
  | "noWarranty"
  | "suspensionAndTermination"
  | "legalCompliance"
  | "changesToPolicy"
  | "objectionableContent"
  | "governingLaw"
  | "contactInformation";

const eulaContent: Record<EULAKey, JSX.Element> = {
  nonExclusiveLicense: (
    <p className="mb-4">
      Voiaxis grants You a revocable, non-exclusive, non-transferable, limited license to download, install, and use the Mobile App for Your personal and internal business purposes strictly in accordance with this EULA and the Subscription Agreement.
    </p>
  ),
  yourAccount: (
    <p className="mb-4">
      Your use of the Mobile App requires that You have an account with Voiaxis and agree to the terms of the Subscription Agreement.
    </p>
  ),
  amendments: (
    <p className="mb-4">
      Voiaxis reserves the right to modify this EULA at any time and for any reason. Voiaxis will post the most current version of this EULA at https://www.Voiaxis.com/legal/mobile-eula. If Voiaxis makes material changes to this EULA, You will receive notification via the Mobile App. Notwithstanding the foregoing, You are responsible for complying with the updated terms posted online at Voiaxis’s website even if these updated terms appear online at Voiaxis’s website before being posted on the Mobile App. Your continued use of the Mobile App after Voiaxis publishes notice of changes to this EULA indicates Your consent to the updated terms.
    </p>
  ),
  noMaintenance: (
    <p className="mb-4">
      Voiaxis may deploy changes, updates, or enhancements to the Mobile App at any time. Voiaxis may provide maintenance and support for the Mobile App, but has no obligation whatsoever to furnish such services to You and may terminate such services at any time without notice. You acknowledge that neither Apple (for iOS Mobile App) nor Google (for Android Mobile App) has an obligation to furnish any maintenance or support services in connection with the Mobile App.
    </p>
  ),
  acceptableUse: (
    <p className="mb-4">
      You agree that You will be bound by Voiaxis’s Terms of Use found at www.jamme.app/terms. You also agree not to violate the usage limits or controls set forth by: (a) the App Store Terms of Service, for iOS users accessing the Mobile App on an Apple product, or (b) Google Play Terms of Service for Android users accessing the Mobile App on an Android product.
    </p>
  ),
  privacy: (
    <p className="mb-4">
      In order to operate and provide the Subscription Service and the Mobile App, Voiaxis may collect certain information about You, including technical and telemetry data related to your use of the Mobile App. We use third party service providers to help us collect and analyze this data, including Google Analytics. Voiaxis uses and protects that information in accordance with the Voiaxis Privacy Notice (a current version of which can be found at www.Voiaxis.com/legal/privacy-offerings).
    </p>
  ),
  consentToCommunication: (
    <p className="mb-4">
      By downloading the Mobile App, You authorize Voiaxis to send You (including via email and push notifications) information regarding the Subscription Service and the Mobile App, such as: (a) notices about Your use of the Subscription Service and the Mobile App, including notices of violations of use; (b) updates to the Subscription Service and Mobile App and new features or products; and (c) promotional information and materials regarding Voiaxis's products and services. You can review Your account notification settings and adjust Your messaging preferences, including opting-in to additional messages or unsubscribing to certain messaging through the “Push Notifications” section of the Mobile App settings.
    </p>
  ),
  noWarranty: (
    <p className="mb-4">
      YOUR USE OF THE MOBILE APP IS AT YOUR SOLE RISK. THE MOBILE APP IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. VOIAXIS EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
      <br />
      The Mobile App is only available for supported devices and might not work on every device. Determining whether Your device is a supported or compatible device for use of the Mobile App is solely Your responsibility, and downloading the Mobile App is done at Your own risk. Voiaxis does not represent or warrant that the Mobile App and Your device are compatible or that the Mobile App will work on Your device.
      <br />
      A) iOS Application. In the event of Voiaxis’s failure to conform to any applicable warranty, You may notify Apple, and Apple will refund the purchase price for the Mobile App. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APPLE WILL HAVE NO OTHER WARRANTY OBLIGATION WHATSOEVER WITH RESPECT TO (A) THE MOBILE APP, AND (B) ANY OTHER CLAIMS, LOSSES, LIABILITIES, DAMAGES, COSTS, OR EXPENSES ATTRIBUTABLE TO ANY FAILURE TO CONFORM TO ANY WARRANTY.
      <br />
      B) Android Application. GOOGLE EXPRESSLY DISCLAIMS ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.
    </p>
  ),
  suspensionAndTermination: (
    <p className="mb-4">
      Voiaxis reserves the right to suspend or terminate Your access to the Mobile App at any time based on the status of Your account under the Subscription Agreement. You understand that if Your account is suspended or terminated, You may no longer have access to the content that is stored within the Subscription Service.
    </p>
  ),
  legalCompliance: (
    <p className="mb-4">
      In the first instance you may be able to view or change the information you have provided us with by logging in to your account on our Platform. Your rights in relation to your Personal Information are limited in some situations. For example, if fulfilling your request would reveal personal data about another person or if we have a legal requirement or a compelling legitimate ground, we may continue to process Personal Information which you have asked us to delete. You also may have the right to make a complaint if you feel your personal information has been mishandled. We encourage you to contact us first to deal with your request, but you are entitled to complain directly to the relevant supervisory authority. If you wish to exercise any of the above rights, please contact us at support@jamme.app.
      <br />
      Please note, however, that no information will be provided without verification.
      <br />
      Lastly, if you are not happy with our response, or you believe that your information protection or privacy rights have been infringed, you should contact the UK Information Commissioner's Office, which oversees information protection compliance in the United Kingdom. Details of how to do this can be found at www.ico.org.uk.
    </p>
  ),
  changesToPolicy: (
    <p className="mb-4">
      Voiaxis may update or revise this Policy from time to time. You agree that you will review this Policy periodically. If we make any changes to this Policy, we will change the “Last Updated” date below. You are free to decide whether to accept a modified version of this Policy, but accepting this Policy, as modified, is required for you to continue using our Platform. If you do not agree to the terms of this Policy or any modified version of this Policy, your sole recourse is to terminate your use of our Platform.
    </p>
  ),
  objectionableContent: (
    <>
      <p className="mb-4">
        Voiaxis Ltd maintains a zero tolerance policy regarding objectionable content.
      </p>
      <p className="mb-4">
        Objectionable content may not be uploaded or displayed to the extent such content includes, is in conjunction with, or alongside any Objectionable Content.
      </p>
      <p className="mb-4">
        Objectionable Content includes, but is not limited to:
      </p>
      <p className="mb-4">
        (i) sexually explicit materials;
      </p>
      <p className="mb-4">
        (ii) obscene, defamatory, libelous, slanderous, violent and/or unlawful content or profanity;
      </p>
      <p className="mb-4">
        (iii) content that infringes upon the rights of any third party, including copyright, trademark, privacy, publicity or other personal or proprietary right, or that is deceptive or fraudulent;
      </p>
      <p className="mb-4">
        (iv) content that promotes the use or sale of illegal or regulated substances, tobacco products, ammunition and/or firearms; and
      </p>
      <p className="mb-4">
        (v) gambling, including without limitation, any online casino, sports books, bingo or poker.
      </p>
      <p className="mb-4">
        Any user can flag content they deem objectionable for review.
      </p>
      <p className="mb-4">
        Content will be moderated by Voiaxis Ltd to ensure the timely removal of any and all objectionable content.
      </p>
      <p className="mb-4">
        User accounts which have been confirmed responsible for posting objectionable content will be restricted from access to the app.
      </p>
    </>
  ),

  governingLaw: (
    <p className="mb-4">
      This EULA shall be governed by and construed in accordance with the laws of United Kingdom, without regard to conflicts of law principles.
    </p>
  ),
  contactInformation: (
    <p className="mb-4">
      If You have any questions regarding this EULA, please contact Voiaxis by email at support@Jamme.app, or by mail at VOIAXIS LTD 25, The Junction, Slough, London. SL2 5GE.
    </p>
  ),
};

const EULA: React.FC = () => {
  const sectionRefs = useRef<Record<EULAKey, HTMLDivElement | null>>({
    nonExclusiveLicense: null,
    yourAccount: null,
    amendments: null,
    noMaintenance: null,
    acceptableUse: null,
    privacy: null,
    consentToCommunication: null,
    noWarranty: null,
    suspensionAndTermination: null,
    legalCompliance: null,
    changesToPolicy: null,
    objectionableContent: null,
    governingLaw: null,
    contactInformation: null,
  });

  const [activeSection, setActiveSection] = useState<EULAKey>("nonExclusiveLicense");

  const handleSectionClick = (section: EULAKey) => {
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
              Mobile Application End User License Agreement
            </h1>
            <span className="text-sm font-normal tracking-wider text-gray-600">
              Last Updated: January 5, 2025
            </span>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex flex-col-reverse md:flex-row md:mt-10 gap-4 md:px-10 lg:px-40">
          <div className="flex-1 p-4">
            <p className="pb-8 text-2xl font-semibold tracking-wider leading-6">
              This End User License Agreement outlines the terms and conditions for using the Jamme Mobile App.
            </p>
            {Object.keys(eulaContent).map((key) => {
              const eulaKey = key as EULAKey;
              return (
                <div
                  key={eulaKey}
                  ref={(el) => (sectionRefs.current[eulaKey] = el)}
                  className="section-content mb-8"
                >
                  <h2 className="capitalize tracking-wider text-lg font-semibold leading-tight text-left">
                    {eulaKey.replace(/([A-Z])/g, " $1").trim()}
                  </h2>
                  <p className="mt-4 text-gray-500 tracking-normal text-sm">{eulaContent[eulaKey]}</p>
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-72 lg:w-1/4 p-4">
            <CardTitle className="font-bold text-xl mb-2 ml-2 tracking-wider">Table of contents</CardTitle>
            <Card className="text-sm p-2">
              {Object.keys(eulaContent).map((key) => {
                const eulaKey = key as EULAKey;
                return (
                  <CardContent
                    key={eulaKey}
                    className="relative cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 p-2 rounded flex items-center"
                    onClick={() => handleSectionClick(eulaKey)}
                  >
                    {/* Active indicator */}
                    {activeSection === eulaKey && (
                      <span
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 w-1 h-5 "
                        style={{
                          borderRadius: "4px 0 0 4px",
                        }}
                      />
                    )}
                    <span className="text-gray-900 font-semibold tracking-wider">
                      {eulaKey.replace(/([A-Z])/g, " $1").trim()}
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

export default EULA;
