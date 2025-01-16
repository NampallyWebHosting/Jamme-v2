import SecondaryHeader from "@/components/layout/SecondaryHeader";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React, { useRef, useState } from "react";

type TermsKey =
  | "introduction"
  | "changes"
  | "privacyPolicy"
  | "termsOfUse"
  | "sweepstakes"
  | "intellectualProperty"
  | "legalComplaints"
  | "userSubmissions"
  | "thirdPartyContent"
  | "feeBasedOfferings"
  | "acceptableUse"
  | "accessToServicesAndAccounts"
  | "indemnification"
  | "disclaimersLimitationOfLiability"
  | "governingLawVenueJurisdiction"
  | "mobileApplicationUseLicense"
  | "governingLawAndDisputeResolution"
  | "classActionWaiver"
  | "severability"
  | "noJointVenture";

const termsContent: Record<TermsKey, JSX.Element> = {
  introduction: (
    <>
      <p className="mb-4 font-semibold">Introduction</p>
      <p className="mb-4">
        These terms of use (“Terms of Use” or “Terms”) shall govern your use of various web pages
        and mobile applications (collectively the “Website”) operated by Voiaxis Ltd., and any
        affiliates or subsidiaries (collectively “Voiaxis“, “We”, or “Us”). The terms “You” or
        “Your” refer to You, the user(s) regardless of whether you are a sole natural person,
        using our Services jointly with another person or people, or an entity.
      </p>
      <p className="mb-4">
        Certain provisions of these Terms apply only to specified Services. For example, special
        provisions applicable to Jamme mobile app (“Jamme”). If you subscribe to Jamme mobile
        application, your use of Jamme mobile application is governed in Section 14 and the EULA,
        which you are required to enter into in order to use Jamme mobile application. You can
        subscribe to one of the option plans offered for Jamme mobile application through an App
        Store of your choice. At this time subscription to Jamme mobile application is free of
        charge. EULA applies by its terms to all mobile applications of Voiaxis. If you are a user
        of such Service, that section and EULA applies to you, in addition to other provisions of
        these Terms.
      </p>
    </>
  ),
  changes: (
    <>
      <p className="mb-4 font-semibold">Changes</p>
      <p className="mb-4">
        These Terms are effective as of the Effective Date above. If you have not reviewed the
        Terms applicable to a Service since the Effective Date, please review these updated Terms
        carefully before using any Service.
      </p>
      <p className="mb-4">
        We may change these Terms in the future, so we encourage you to review periodically the
        Terms of Use applicable to each Service you use. The most current version of the applicable
        Terms of Use (along with its effective date) will be linked from each of the Services. If
        you do not agree with any changes to these Terms, your sole remedy is not to use the Website
        and the Services. If you continue to use the Website and the Services after we change these
        Terms, you accept all changes.
      </p>
    </>
  ),
  privacyPolicy: (
    <>
      <p className="mb-4 font-semibold">Privacy Policy</p>
      <p className="mb-4">
        Our Privacy Policy describes our practices concerning data that you provide or that we may
        collect about you through the Services, and you consent to our use of data in compliance with
        the Privacy Policy. Our Privacy Policy can be found at{" "}
        <a href="https://www.jamme.app/privacy-policy" target="_blank" rel="noopener noreferrer">
          www.jamme.app/privacy-policy
        </a>
        .
      </p>
    </>
  ),
  termsOfUse: (
    <>
      <p className="mb-4 font-semibold">Terms of Use</p>
      <p className="mb-4">
        These Terms of Use, along with our Privacy Policy, Mobile Application End User License
        Agreement, and Terms of Use (“EULA”) as applicable (collectively, the “Terms”) govern your
        use of the Website, software, mobile applications, features, products, and services that
        include an authorized link to these Terms (collectively, the “Services”).
      </p>
      <p className="mb-4">
        Please review these Terms carefully before using the Services because they affect your
        rights. By using the Website and any of the Services, you accept these Terms and agree to
        be legally bound by them.
      </p>
      <p className="mb-4">
        Additional terms may apply to your use of certain Services, including features of our
        Services that are provided by third parties. These terms will be provided to you or posted
        on the Services to which they apply, and they are incorporated by reference into these
        Terms. If there is a conflict between these Terms and any additional terms that apply to a
        particular Service, the additional terms will control.
      </p>
    </>
  ),
  sweepstakes: (
    <>
      <p className="mb-4 font-semibold">Sweepstakes</p>
      <p className="mb-4">
        Sweepstakes, contests, and promotions on the Services may also have additional rules and
        eligibility requirements, such as certain age or geographic area restrictions. You are
        responsible for complying with these rules and requirements.
      </p>
    </>
  ),
  intellectualProperty: (
    <>
      <p className="mb-4 font-semibold">Intellectual Property</p>
      <p className="mb-4">
        The audio and video materials, photographs, text, graphics, logos, layouts, designs,
        interfaces, software, data, and other content associated with the Website and the Services
        (“Content”) are protected by intellectual property and other laws in the United Kingdom,
        India, and in other countries. You must comply with all such laws and applicable copyright,
        trademark, or other legal notices or restrictions. You shall not remove or alter any
        copyright, trademark, or other legal notices marked on the Content. As between you and
        Voiaxis, Voiaxis will retain all right, title, and interest in and to the Services and the
        Content. No transfer of ownership to any portion of the Content shall be made as a result
        of any access you are granted.
      </p>
      <p className="mb-4">
        You are only permitted to access and view the Content for personal, non-commercial purposes
        in accordance with these Terms, and may not build a business or other enterprise utilizing
        any of the Content, whether for profit or not. Except as specifically provided below, we
        and our licensors reserve all rights to the Services and Content.
      </p>
      <p className="mb-4">
        You may not either directly or through the use of any software, device, Internet site,
        web-based service, or other means download, stream capture, store in a database, archive,
        or otherwise copy any part of the Services or Content; upload, sell, rent, lease, lend,
        broadcast, transmit or otherwise disseminate, distribute, display or perform any part of
        the Services or Content; license or sublicense any part of the Services or Content; or in
        any way exploit any part of the Services or Content.
      </p>
      <p className="mb-4">
        You may not modify, interfere with, enhance, remove, or otherwise alter in any way any
        portion of the Website or the Services that contain streaming, downloading, uploading,
        discussion board, forum, or other interactive features (“Features”).
      </p>
      <p className="mb-4">
        We may expressly authorize you to redistribute certain Content on a personal, non-commercial
        basis. We will identify the Content that you are authorized to redistribute and describe ways
        you may redistribute it. We may revoke this authorization at any time.
      </p>
      <p className="mb-4">
        You must obtain our written permission for commercial use of the Content or the Services. If
        you wish to license Content from the Services, please contact us at{" "}
        <a href="mailto:legal@jamme.app">legal@jamme.app</a>.
      </p>
    </>
  ),
  legalComplaints: (
    <>
      <p className="mb-4 font-semibold">Legal Complaints</p>
      <p className="mb-4 font-semibold">a. Copyright Claims</p>
      <p className="mb-4">
        <strong>Copyright, Designs and Patents Act 1988 Notice and Policy</strong>
      </p>
      <p className="mb-4">
        We respect the intellectual property rights of others. If you believe that any material
        available on or through the Application infringes upon any copyright you own or control,
        please immediately notify us using the contact information provided below (a “Notification”).
        A copy of your Notification will be sent to the person who posted or stored the material
        addressed in the Notification. Please be advised that pursuant to U.K. law you may be held
        liable for damages if you make material misrepresentations in a Notification. Thus, if you
        are not sure that material located on or linked to by the Application infringes your copyright,
        you should consider first contacting an attorney.
      </p>
      <p className="mb-4">
        All Notifications should meet the requirements of the DMCA Copyright, Designs and Patents
        Act 1988 and include the following information:
      </p>
      <ul className="list-disc pl-6">
        <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
        <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works on the Application are covered by the Notification, a representative list of such works on the Application;</li>
        <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material;</li>
        <li>Information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number, and, if available, an email address at which the complaining party may be contacted;</li>
        <li>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law;</li>
        <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed upon.</li>
      </ul>

      <p className="mb-4 font-semibold">b. Other Complaints</p>
      <p className="mb-4">
        If you have a complaint regarding any Content on the Services that is not related to copyright
        infringement, but concerns Content that is objectionable and/or violates the terms of this
        Agreement, you may contact us at{" "}
        <a href="mailto:support@jamme.app">support@jamme.app</a>. In your complaint, please provide the
        reason for your complaint, identify the relevant Service and the location of the Content on the
        Service, the specific type of Content, and the name of the author, if available or applicable.
      </p>
    </>
  ),
  userSubmissions: (
    <>
      <p className="mb-4">
        We are constantly updating product and Service offerings. We may experience delays in
        updating information on the Website or on a Service and in our advertising on other
        websites. The information found on the Service may contain errors or inaccuracies and
        may not be complete or current. Products or services may be mispriced, described
        inaccurately, or unavailable on the Service and we cannot guarantee the accuracy or
        completeness of any information found on the Service. We therefore reserve the right to
        change or update information and to correct errors, inaccuracies, or omissions at any
        time without prior notice.
      </p>
      <p className="mb-4">
        Some of the Services may allow you to submit or transmit to or through the Services
        audio, video, text, or other materials, including so-called “user generated content“
        and “feedback” and postings to third-party social media sites (collectively, “User
        Submissions”). When you provide User Submissions, you grant to Voiaxis and its affiliates
        and partners a nonexclusive, worldwide, royalty-free, perpetual, irrevocable, fully
        sublicensable license to use, reproduce, archive, edit, translate, create derivative works
        of, make available, distribute, sell, display, perform, transmit, broadcast and in any other
        way exploit those User Submissions, and any names, voices, likenesses and other identifying
        information of persons that is part of those User Submissions, in any form, media, software,
        or technology of any kind now known or developed in the future, including, without limitation,
        for developing, manufacturing, and marketing products. You hereby waive any moral rights you
        may have in your User Submissions.
      </p>
      <p className="mb-4">
        For clarity, we are not required to and will not provide any form of compensation for any
        use of your User Submissions.
      </p>
      <p className="mb-4">
        We respect your ownership of User Submissions. If you owned a User Submission before
        providing it to us, you will continue owning it after providing it to us, subject to any
        rights granted in these Terms and any access granted to others.
      </p>
      <p className="mb-4">
        Please note that even where a Service provides a deletion capability for User Submissions,
        and you delete a User Submission from the Service:
      </p>
      <ul className="list-disc pl-6">
        <li>The User Submission may still exist in our backup copies, which are not publicly available;</li>
        <li>If your User Submission was shared with third parties, those third parties may have retained copies of your User Submissions, and neither we nor our affiliates have any responsibility for any uses of your User Submission that they might make;</li>
        <li>We retain the license specified above. Thus, for example, if we or one of our sublicensees obtained your User Submission for use in creating a derivative work before you deleted it, we or our sublicensee would remain free to complete the creation of that derivative work and thereafter exploit that derivative work for all purposes and at all times.</li>
      </ul>
      <p className="mb-4">
        We may impose limits on the size or number of User Submissions (e.g., limits on storage
        space or inbound or outbound messages) or otherwise refuse or remove a User Submission
        with or without cause and without notice to you. However, we have no obligation to monitor
        User Submissions, and you agree that neither we nor our affiliates will be liable for:
      </p>
      <ul className="list-disc pl-6">
        <li>User Submissions;</li>
        <li>Any failure to store, receive or deliver User Submissions; or</li>
        <li>Any loss or damage resulting from User Submissions.</li>
      </ul>
      <p className="mb-4">
        Except as provided in the Privacy Policy, we do not guarantee that User Submissions will be
        private, even if the User Submission is in a password-protected area. Accordingly, you should
        not provide User Submissions that you want protected from others.
      </p>
      <p className="mb-4">
        You bear all responsibility for your User Submissions. You represent and warrant that you have
        all rights necessary to grant to Voiaxis the license above and that your User Submissions do
        not violate Section 10 of these Terms.
      </p>
    </>
  ),
  thirdPartyContent: (
    <>
      <p className="mb-4">
        We may provide third-party content (including advertisements), products or services or link
        to third-party websites or other services on the Services. We do not necessarily endorse or
        evaluate third-party content, products, and services; we do not assume responsibility for
        third parties' actions or omissions; and we have no liability whatsoever for goods and services
        you may obtain from or through other services, even if you were directed or linked to such a
        service through our Service. You should review third parties' terms of use and privacy policies
        before you use their services.
      </p>
      <p className="mb-4">
        In certain instances, you may be able to connect and/or link your account to certain third-party
        social media sites (“Social Media Sites”), including, without limitation, Facebook and Twitter.
      </p>
      <p className="mb-4">
        BY CONNECTING OR LINKING YOUR ACCOUNT TO ANY SOCIAL MEDIA SITE, YOU ACKNOWLEDGE AND AGREE THAT
        YOU ARE CONSENTING TO THE CONTINUOUS RELEASE OF INFORMATION ABOUT YOU TO OTHERS, INCLUDING TO
        THE SOCIAL MEDIA SITE (IN ACCORDANCE WITH YOUR PRIVACY SETTINGS ON SUCH SOCIAL MEDIA SITE). IF
        YOU DO NOT WANT INFORMATION ABOUT YOU TO BE SHARED IN THIS MANNER, DO NOT CONNECT OR LINK YOUR
        ACCOUNT TO ANY SOCIAL MEDIA SITE.
      </p>
    </>
  ),
  feeBasedOfferings: (
    <>
      <p className="mb-4">
        If you accept fee-based Services other than Jamme, you agree to the additional terms governing
        all such purchases or subscriptions as provided to you or posted on the Services to which they
        apply, including all requirements to pay applicable fees and taxes. Except as otherwise provided
        in such additional terms, the provisions of this Section apply to such fee-based Services.
      </p>
      <p className="mb-4">
        Unless otherwise stated, all fees and charges are non-refundable, including for unused portions
        of cancelled subscriptions. We do not provide price protection or refunds in the event of a price
        drop or promotional offering.
      </p>
      <p className="mb-4">
        Voiaxis reserves the right to change the pricing of all Services and to impose subscription or
        other fees on previously free Services at any time. In the event of a price change, Voiaxis will
        post the new pricing on the relevant Service and attempt to notify you by sending an email to the
        address you have registered.
      </p>
      <p className="mb-4">
        We may offer trial subscriptions to paid Services for free or at special discounted prices. Unless
        otherwise stated, these trial subscriptions will automatically become paying subscriptions at the
        current subscription rate if you do not cancel before the end of the trial period.
      </p>
      <p className="mb-4">
        The Website and/or the Services may offer various products for sale (“Products”). You are
        responsible for any taxes imposed on the sale or use of Products, and applicable taxes will be added
        to the amount charged for Products purchased on through the Services.
      </p>
    </>
  ),
  acceptableUse: (
    <>
      <p className="mb-4">
        Without limiting any other provision in these Terms, you agree not to do the following, or assist others to do the following:
      </p>
      <ul className="list-disc pl-6">
        <li>Access the Services using any interface other than ours, including by making any automated use of the Services such as using scripts to interact with the Services;</li>
        <li>Maintain any link to the Services that we ask you to remove, in our sole discretion;</li>
        <li>Frame the Services or Content, make the Services or Content available via in-line or “deep“ links, otherwise display the Services or Content in connection with an unauthorized logo or mark, or do anything that could falsely suggest a relationship between Voiaxis or its affiliates and any third party or potentially deprive us of revenue (including, without limitation, revenue from advertising, branding, or promotional activities);</li>
        <li>Threaten, defame, stalk, abuse, or harass other persons or engage in illegal activities, or encourage conduct that would constitute a criminal offense or give rise to civil liability;</li>
        <li>Transmit any material that is inappropriate, profane, vulgar, offensive, false, disparaging, defamatory, obscene, illegal, sexually explicit, racist, that promotes violence, racial hatred, or terrorism, or that we deem, in our sole discretion, to be otherwise objectionable;</li>
        <li>Violate any person's or entity's legal rights (including, without limitation, intellectual property, privacy, and publicity rights), transmit material that violates or circumvents such rights, or remove or alter intellectual property or other legal notices;</li>
        <li>Transmit files that contain viruses, spyware, adware, or other harmful code;</li>
        <li>Advertise or promote goods or services without our permission (including, without limitation, by sending unsolicited email through a Service or linking to a Service);</li>
        <li>Interfere with others using the Services or otherwise disrupt the Services;</li>
        <li>Disassemble, decompile or otherwise reverse engineer any software or other technology included in the Content or used to provide the Services;</li>
        <li>Transmit, collect, or access personally identifiable information about other users without the consent of those users and Voiaxis;</li>
        <li>Engage in unauthorized spidering, “scraping,“ data mining or harvesting of Content, or use any other unauthorized automated means to gather data from or about the Services;</li>
        <li>Impersonate any person or entity or otherwise misrepresent your affiliation or the origin of materials you transmit;</li>
        <li>Remove, avoid, interfere with, or otherwise circumvent any access control measures for the Services or Content, including password-protected areas and geo-filtering mechanisms, or any digital rights management measures used in connection with Content;</li>
        <li>Access any portion of the Services that we have not authorized you to access (including password-protected areas), link to password-protected areas, attempt to access or use another user's account or information, or allow anyone else to use your account or access credentials;</li>
        <li>Manipulate the entry or registration process for contests, sweepstakes, surveys, opinion polls or other features of the Services.</li>
      </ul>
      <p className="mb-4">
        If we believe you have violated this Section 9, we may immediately terminate your access to the Services, and take any other actions or seek any remedies permitted by law.
      </p>
    </>
  ),
  accessToServicesAndAccounts: (
    <>
      <p className="mb-4">
        To access the Website and the Services, your device must be connected to the Internet, and you are solely responsible for the cost and maintenance of your Internet connection. You are also responsible for ensuring that you have the hardware and software platforms that are necessary to access the Services.
      </p>
      <p className="mb-4">
        The quality of the display of the Content available through the Website and the Services may vary from device to device, and may be affected by a variety of factors, including your location, the bandwidth available through and/or the speed of your Internet connection.
      </p>
      <p className="mb-4">
        Voiaxis will not be liable to you for any blackouts, location-based limitations, device-based limitations, Content-viewing windows, availability of Content, or other restrictions or limitations in connection with the Services or the Content.
      </p>
      <p className="mb-4">
        We may take any of the following actions in our sole discretion at any time, and without giving you prior notice:
      </p>
      <ul className="list-disc pl-6">
        <li>Change how we offer and operate Services (e.g., to begin charging a fee to certain Services or mobile applications, access features or Content that we previously made available without charge);</li>
        <li>Restrict, suspend or terminate your access to one or more Services or features thereof;</li>
        <li>Deactivate your accounts and delete all related information and files in your accounts.</li>
      </ul>
      <p className="mb-4">
        We will not be liable to you or any third party for taking any of these actions and we will not be limited to the remedies above if you violate these Terms. If Voiaxis terminates your access to any of the Services, you must immediately stop using such Service.
      </p>
      <p className="mb-4">
        Voiaxis reserves the right to test various aspects of the Services. Voiaxis reserves the right to, and by using our Services you agree that we may, include you in or exclude you from these tests without notice.
      </p>
    </>
  ),
  indemnification: (
    <>
      <p className="mb-4">
        You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of:
      </p>
      <ul className="list-disc pl-6">
        <li>Your User submissions and related content;</li>
        <li>Your use of the Website, Jamme, and the Services;</li>
        <li>Your breach of these Terms of Use;</li>
        <li>Any breach of your representations and warranties set forth in these Terms of Use;</li>
        <li>Your violation of the rights of a third party, including but not limited to intellectual property rights;</li>
        <li>Any overt harmful act toward any other user of the Services with whom you connected with through us.</li>
      </ul>
      <p className="mb-4">
        Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it. You may not settle any claim covered by this Section without Voiaxis's prior written approval.
      </p>
    </>
  ),
  disclaimersLimitationOfLiability: (
    <>
      <p className="mb-4">
        VOIAXIS DOES NOT WARRANT: (1) THAT THE SERVICES, ANY OF THE SERVICES' FUNCTIONS OR ANY CONTENT WILL BE UNINTERRUPTED OR FREE OF ERRORS OR OMISSIONS; (2) THAT DEFECTS WILL BE CORRECTED; (3) THAT THE SERVICES OR THE SERVERS HOSTING THEM ARE FREE OF VIRUSES OR OTHER HARMFUL CODE; OR (4) THAT THE SERVICES OR INFORMATION AVAILABLE THROUGH THE SERVICES WILL CONTINUE TO BE AVAILABLE. VOIAXIS SHALL HAVE NO LIABILITY FOR ANY SUCH ISSUES.
      </p>
      <p className="mb-4">
        VOIAXIS DISCLAIMS ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION, NONINFRINGEMENT, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND AS TO QUALITY, AVAILABILITY AND SUBJECT MATTER OF CONTENT. THE SERVICES, INCLUDING ALL CONTENT AND FUNCTIONS MADE AVAILABLE ON OR ACCESSED THROUGH OR SENT FROM THE SERVICES, ARE PROVIDED “AS IS,“ “AS AVAILABLE,“ “WITH ALL FAULTS“ AND “AT YOUR OWN RISK.“ NO ADVICE OR INFORMATION OBTAINED BY YOU FROM US, OR FROM OR THROUGH THE SITE, SHALL CREATE ANY WARRANTY. YOUR ACCESS TO AND USE OF THE SERVICES (INCLUDING THEIR FUNCTIONS AND CONTENT) IS AT YOUR RISK.
      </p>
      <p className="mb-4">
        IF YOU ARE DISSATISFIED WITH THE SERVICES, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE ACCESSING AND USING THE SERVICES.
      </p>
      <p className="mb-4">
        VOIAXIS WILL NOT BE LIABLE FOR ANY FAILURE OR DELAY IN THEIR PERFORMANCE DUE TO ANY CAUSE BEYOND THEIR REASONABLE CONTROL, INCLUDING ACTS OF WAR, ACTS OF GOD, ACTS OF THIRD PARTY SERVICE PROVIDERS, EARTHQUAKE, FLOOD, EMBARGO, RIOT, SABOTAGE, LABOR SHORTAGE OR DISPUTE, GOVERNMENTAL ACT, POWER FAILURE OR FAILURE OF THE INTERNET OR COMPUTER EQUIPMENT.
      </p>
      <p className="mb-4">
        VOIAXIS WILL NOT BE LIABLE TO YOU OR ANYONE ELSE FOR ANY SPECIAL, INDIRECT, INCIDENTAL, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL DAMAGES IN CONNECTION WITH THE SERVICES (INCLUDING THEIR FUNCTIONS, CONTENT AND ANY PRODUCTS OR SERVICES ACQUIRED THROUGH THE SERVICES), YOUR USE OF THE SERVICES (INCLUDING THEIR FUNCTIONS AND CONTENT AND ANY PRODUCTS OR SERVICES ACQUIRED THROUGH THE SERVICES), THESE TERMS OR YOUR USER SUBMISSIONS, EVEN IF FORESEEABLE OR EVEN IF VOIAXIS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES (INCLUDING, WITHOUT LIMITATION, WHETHER CAUSED IN WHOLE OR IN PART BY NEGLIGENCE, GROSS NEGLIGENCE, OR OTHERWISE, BUT EXCLUDING WILLFUL MISCONDUCT).
      </p>
      <p className="mb-4">
        IN NO EVENT WILL VOIAXIS'S LIABILITY FOR OTHER DAMAGES EXCEED THE AMOUNT PAID BY YOU TO VOIAXIS FOR ACCESS TO THE RELEVANT SERVICE IN THE THREE MONTHS PRECEDING THE CLAIM, OR FOR THE PURCHASE OF THE RELEVANT PRODUCT, AS APPLICABLE.
      </p>
      <p className="mb-4">
        YOU ACKNOWLEDGE AND AGREE THAT IF YOU INCUR ANY DAMAGES THAT ARISE OUT OF VOIAXIS' ACTS OR OMISSIONS, THE DAMAGES, IF ANY, ARE NOT IRREPARABLE AND ARE NOT SUFFICIENT TO ENTITLE YOU TO AN INJUNCTION OR OTHER EQUITABLE RELIEF RESTRICTING OPERATION OF THE SERVICES OR ANY OTHER SERVICE, PROPERTY, PRODUCT, PROGRAM, TELEVISION SHOW, DOCUMENTARY, OR OTHER CONTENT OWNED OR CONTROLLED BY VOIAXIS.
      </p>
      <p className="mb-4">
        SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OF THE ABOVE LIMITATIONS AND EXCLUSIONS MAY NOT APPLY TO YOU.
      </p>
    </>
  ),
  governingLawVenueJurisdiction: (
    <>
      <p className="mb-4">
        These Terms and all claims arising from or related to your use of the Services will be governed by and construed in accordance with the laws of the United Kingdom, except its conflict of law rules. These Terms will not be governed by the United Nations Convention on Contracts for the International Sale of Goods, if applicable.
      </p>
      <p className="mb-4">
        With respect to all disputes or claims arising out of your use of the Website and/or the Services and in connection with these Terms, you hereby agree to exclusive jurisdiction in the United Kingdom and waive your right to a jury trial. Notwithstanding any other provision of these Terms, we may seek injunctive or other equitable relief from any court of competent jurisdiction.
      </p>
      <p className="mb-4">
        Regardless of any statute or law to the contrary, you must file any claim or action related to use of the Website or the Services or with respect to these Terms within one year after such claim or action accrued. Otherwise, you will waive the claim or action.
      </p>
    </>
  ),
  mobileApplicationUseLicense: (
    <>
      <p className="mb-4">
        If you access our Services via a mobile application, including but not limited to Jamme, conditioned upon your acceptance of our EULA, we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the mobile application on wireless electronic devices owned or controlled by you, and to access and use the mobile application on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Terms.
      </p>
      <p className="mb-4">
        You shall not: (1) decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the application; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the application; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the application; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the application; (5) use the application for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the application available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the application for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the application; (8) use the application to send automated queries to any web application or to send any unsolicited commercial e-mail; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the application.
      </p>
    </>
  ),
  governingLawAndDisputeResolution: (
    <>
      <p className="mb-4">
        These Terms of Use and your use of the Application are governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law principles.
      </p>
      <p className="mb-4">
        If the parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the Central Arbitration Committee (“CAC”) and, where appropriate, the CAC’s Supplementary Procedures for Consumer Related Disputes (“CAC Consumer Rules”), both of which are available at the CAC website <a href="https://www.gov.uk/" target="_blank" rel="noopener noreferrer">https://www.gov.uk/</a>. Your arbitration fees and your share of arbitrator compensation shall be governed by the CAC Consumer Rules and, where appropriate, limited by the CAC Consumer Rules. The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except where otherwise required by the applicable CAC rules or applicable law, the arbitration will take place in a location mutually agreed by both parties, and United Kingdom law shall apply. Except as otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.
      </p>
      <p className="mb-4">
        The Parties hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in the United Kingdom courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from these Terms of Use. Instead, this agreement shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law principles.
      </p>
      <p className="mb-4">
        In no event shall any Dispute brought by either Party related in any way to the Application be commenced more than 2 years after the cause of action arose. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable, and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
      </p>
      <p className="mb-4">
        The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
      </p>
    </>
  ),
  classActionWaiver: (
    <>
      <p className="mb-4">
        Any legal dispute, arbitration, or litigation under these Terms will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted.
      </p>
      <p className="mb-4">
        THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH'S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/OR REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE ATTORNEY GENERAL ACTION AGAINST THE OTHER.
      </p>
      <p className="mb-4">
        Further, unless both you and Squad agree otherwise, the arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of a representative or class proceeding.
      </p>
    </>
  ),
  severability: (
    <>
      <p className="mb-4">
        If any part of these Terms is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the Terms shall continue in effect.
      </p>
    </>
  ),
  noJointVenture: (
    <>
      <p className="mb-4">
        You agree that no joint venture, partnership, employment, or agency relationship exists between you and Voiaxis solely as a result of these Terms or use of our Services.
      </p>
    </>
  ),
};


const TermsAndConditions: React.FC = () => {
  const sectionRefs = useRef<Record<TermsKey, HTMLDivElement | null>>({
    introduction: null,
    changes: null,
    privacyPolicy: null,
    termsOfUse: null,
    sweepstakes: null,
    intellectualProperty: null,
    legalComplaints: null,
    userSubmissions: null,
    thirdPartyContent: null,
    feeBasedOfferings: null,
    acceptableUse: null,
    accessToServicesAndAccounts: null,
    indemnification: null,
    disclaimersLimitationOfLiability: null,
    governingLawVenueJurisdiction: null,
    mobileApplicationUseLicense: null,
    governingLawAndDisputeResolution: null,
    classActionWaiver: null,
    severability: null,
    noJointVenture: null,
  });

  const [activeSection, setActiveSection] = useState<TermsKey>("introduction");

  const handleSectionClick = (section: TermsKey) => {
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
              Terms and Conditions
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
              Please review our Terms and Conditions to understand your rights and responsibilities as a user.
            </p>
            {Object.keys(termsContent).map((key) => {
              const termsKey = key as TermsKey;
              return (
                <div
                  key={termsKey}
                  ref={(el) => (sectionRefs.current[termsKey] = el)}
                  className="section-content mb-8"
                >
                  <h2 className="capitalize tracking-wider text-lg font-semibold leading-tight text-left">
                    {termsKey.replace(/([A-Z])/g, " $1").trim()}
                  </h2>
                  <p className="mt-4 text-gray-500 tracking-normal text-sm">
                    {termsContent[termsKey]}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-72 lg:w-1/4 p-4">
            <CardTitle className="font-bold text-xl mb-2 ml-2 tracking-wider">
              Table of contents
            </CardTitle>
            <Card className="text-sm p-2">
              {Object.keys(termsContent).map((key) => {
                const termsKey = key as TermsKey;
                return (
                  <CardContent
                    key={termsKey}
                    className="relative cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 p-2 rounded flex items-center"
                    onClick={() => handleSectionClick(termsKey)}
                  >
                    {activeSection === termsKey && (
                      <span
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 w-1 h-5"
                        style={{
                          borderRadius: "4px 0 0 4px",
                        }}
                      />
                    )}
                    <span className="text-gray-900 font-semibold tracking-wider">
                      {termsKey.replace(/([A-Z])/g, " $1").trim()}
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

export default TermsAndConditions;
