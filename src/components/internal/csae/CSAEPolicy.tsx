import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React, { useRef, useState } from "react";
import AgeRestrictImg from "@/assets/above age pop up (1).png";
import SecondaryHeader from "@/components/layout/SecondaryHeader";
type CSAEKey =
  | "policyRationale"
  | "commitmentToChildSafety"
  | "prohibitedContentAndActivities"
  | "childSexualExploitation"
  | "solicitationOfSexualActivity"
  | "inappropriateInteractionsWithChildren"
  | "exploitativeIntimateImageryAndSextortion"
  | "sexualizationOfChildren"
  | "childNudity"
  | "ageVerificationOptions"
  | "enforcementAndSafetyMeasures"
  | "contentModeration"
  | "reportingMechanisms"
  | "cooperationWithAuthorities"
  | "preventiveMeasures"
  | "educationalResourcesAndAwareness"
  | "contextualConsiderations"
  | "visionForSafePlatform";

const csaeContent: Record<CSAEKey, JSX.Element> = {
  policyRationale: (
    <p className="mb-4">
      At Jamme, safeguarding children is our highest priority. We uphold a zero-tolerance policy towards Child Sexual Abuse and Exploitation (CSAE) and are deeply committed to providing a safe, inclusive, and secure digital environment. Our policies and practices are designed to detect, prevent, and address any form of CSAE content or behavior.
    </p>
  ),

  commitmentToChildSafety: (
    <p className="mb-4">
      We strictly prohibit any content or actions that exploit or endanger children. Any indications of child exploitation are promptly reported to the appropriate authorities, including the National Center for Missing and Exploited Children (NCMEC) at <a href="https://report.cybertip.org/reporting" target="_blank" rel="noopener noreferrer">https://report.cybertip.org/reporting</a>, in accordance with applicable laws. We also remove content involving children, even when shared with good intentions, to mitigate potential misuse and safeguard against harm.
    </p>
  ),

  prohibitedContentAndActivities: (
    <p className="mb-4">
      We do not tolerate the following:
    </p>
  ),

  childSexualExploitation: (
    <ul className="mb-4 list-disc pl-6">
      <li>Content depicting, promoting, supporting, or facilitating the sexual exploitation of children.</li>
      <li>Sexualized depictions of children, whether real, fictional, or AI-generated.</li>
      <li>Mocking or identifying victims of child exploitation.</li>
    </ul>
  ),

  solicitationOfSexualActivity: (
    <ul className="mb-4 list-disc pl-6">
      <li>Soliciting sexual content or activity involving children.</li>
      <li>Distributing child sexual abuse material (CSAM) or sexualized depictions of children.</li>
    </ul>
  ),

  inappropriateInteractionsWithChildren: (
    <ul className="mb-4 list-disc pl-6">
      <li>Attempts to arrange or facilitate sexual encounters with children.</li>
      <li>Engaging children in sexual conversations or obtaining explicit content from them.</li>
    </ul>
  ),

  exploitativeIntimateImageryAndSextortion: (
    <ul className="mb-4 list-disc pl-6">
      <li>Coercing or threatening children to obtain intimate imagery or favors.</li>
      <li>Sharing or threatening to share private sexual content involving children.</li>
    </ul>
  ),

  sexualizationOfChildren: (
    <ul className="mb-4 list-disc pl-6">
      <li>Depictions of children in sexualized contexts, including nudity, explicit poses, or costumes designed to sexualize.</li>
    </ul>
  ),

  childNudity: (
    <ul className="mb-4 list-disc pl-6">
      <li>Content portraying child nudity, such as visible genitalia, anus, or uncovered female nipples (except in breastfeeding contexts). Exceptions are made for recognized works of art, health-related materials, or cultural representations with proper contextual consideration.</li>
    </ul>
  ),

  ageVerificationOptions: (
    <p className="mb-4">
      We’re developing innovative ways to help ensure the right experience for every age group on Jamme, starting with users in India. If someone tries to update their date of birth from under 18 to 18 or older, we’ll guide them through a new age verification process. Users can now choose options: upload an ID, capture a video selfie, or ask mutual friends to vouch for their age.
    </p>
  ),

  enforcementAndSafetyMeasures: (
    <p className="mb-4">
      To protect children, Jamme employs a comprehensive set of tools and measures:
    </p>
  ),

  contentModeration: (
    <ul className="mb-4 list-disc pl-6">
      <li>AI-Based Moderation: Advanced AI models detect inappropriate audio, text, and image content in real-time.</li>
      <li>Manual Review: A dedicated moderation team ensures accurate enforcement of guidelines.</li>
      <li>Proactive Monitoring: AI systems monitor user interactions to detect violations proactively.</li>
    </ul>
  ),

  reportingMechanisms: (
    <ul className="mb-4 list-disc pl-6">
      <li>In-App Reporting: Users can report offensive content directly via the “Report” button.</li>
      <li>24/7 Moderation Support: A dedicated helpline addresses CSAE concerns promptly (<a href="https://jamme.app/" target="_blank" rel="noopener noreferrer">https://jamme.app/</a>).</li>
      <li>Immediate Actions: Flagged content is removed swiftly, offending accounts are suspended or banned, and relevant authorities are notified when necessary.</li>
    </ul>
  ),

  cooperationWithAuthorities: (
    <p className="mb-4">
      Jamme collaborates with law enforcement and child protection organizations to:
    </p>
  ),

  preventiveMeasures: (
    <ul className="mb-4 list-disc pl-6">
      <li>Age Verification: AI-driven verification ensures users meet age requirements. Minors under 18 have restricted access to high-risk features.</li>
      <li>Content Filters: Keywords, phrases, and audio cues associated with inappropriate content are automatically flagged and blocked. </li>
      <li>Safety Made Simple: Our platform ensures compliance with age guidelines through an advanced age-verification feature. By detecting a user’s age instantly from their DOB, we restrict access for those under 18, creating a safe and secure digital space. </li>
      <img src={AgeRestrictImg} alt="Age Verification Image" className="mt-4 w-96" />
    </ul>
  ),

  educationalResourcesAndAwareness: (
    <p className="mb-4">
      Jamme promotes education as a key tool against CSAE by providing:
    </p>
  ),

  contextualConsiderations: (
    <p className="mb-4">
      Certain content, such as imagery of child nudity in humanitarian reporting, is evaluated carefully to balance awareness and protection. Non-sexual depictions may be allowed under strict guidelines, with sensitive labeling applied as needed.
    </p>
  ),

  visionForSafePlatform: (
    <p className="mb-4">
      Jamme is dedicated to fostering authentic voice-based connections while prioritizing child safety. By leveraging cutting-edge technology, partnering with experts, and empowering our community to report abuse, we aim to create a secure environment where minors are protected from harm, exploitation, and abuse.
    </p>
  ),
};


const CASEPolicy: React.FC = () => {
  const sectionRefs = useRef<Record<CSAEKey, HTMLDivElement | null>>({
    policyRationale: null,
    commitmentToChildSafety: null,
    prohibitedContentAndActivities: null,
    childSexualExploitation: null,
    solicitationOfSexualActivity: null,
    inappropriateInteractionsWithChildren: null,
    exploitativeIntimateImageryAndSextortion: null,
    sexualizationOfChildren: null,
    childNudity: null,
    ageVerificationOptions: null,
    enforcementAndSafetyMeasures: null,
    contentModeration: null,
    reportingMechanisms: null,
    cooperationWithAuthorities: null,
    preventiveMeasures: null,
    educationalResourcesAndAwareness: null,
    contextualConsiderations: null,
    visionForSafePlatform: null
  });

  const [activeSection, setActiveSection] = useState<CSAEKey>("policyRationale");

  const handleSectionClick = (section: CSAEKey) => {
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
              CSAE Policy
            </h1>
            <span className="text-sm font-normal tracking-wider text-gray-600">
              Last Updated: January 5, 2025
            </span>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex  flex-col-reverse md:flex-row md:mt-10 gap-4 md:px-10 lg:px-40">
          <div className="flex-1 p-4">
            <p className="pb-8 text-2xl font-semibold tracking-wider leading-6">
              Our CSAE policy ensures a safe digital environment by prioritizing child safety and leveraging technology.
            </p>
            {Object.keys(csaeContent).map((key) => {
              const csaeKey = key as CSAEKey;
              return (
                <div
                  key={csaeKey}
                  ref={(el) => (sectionRefs.current[csaeKey] = el)}
                  className="section-content mb-8"
                >
                  <h2 className=" capitalize tracking-wider text-lg font-semibold leading-tight  text-left">
                    {csaeKey.replace(/([A-Z])/g, " $1").trim()}
                  </h2>
                  <p className="mt-4 text-gray-500 tracking-normal text-sm">{csaeContent[csaeKey]}</p>
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-72 lg:w-1/4 p-4">
            <CardTitle className="font-bold text-xl mb-2 ml-2 tracking-wider ">Table of contents</CardTitle>
            <Card className="text-sm p-2">
              {Object.keys(csaeContent).map((key) => {
                const csaeKey = key as CSAEKey;
                return (
                  <CardContent
                    key={csaeKey}
                    className="relative cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 p-2 rounded flex items-center"
                    onClick={() => handleSectionClick(csaeKey)}
                  >
                    {/* Active indicator */}
                    {activeSection === csaeKey && (
                      <span
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 w-1 h-5 "
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

export default CASEPolicy;