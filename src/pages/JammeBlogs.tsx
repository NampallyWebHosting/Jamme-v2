import React from "react";
import JammeVoiceBlogImg from "@/assets/JammeVoiceBlog.png"
import blog3Img from "@/assets/Blog3.png"
import Blog4Img from "@/assets/Blog4.jpg"
import SecondaryHeader from "@/components/layout/SecondaryHeader";
const BlogsPage: React.FC = () => {
  return (
    <>
      <SecondaryHeader />
      <div className="w-full min-h-screen  py-4 px-2 font-Chillax">

        <main className="w-full max-w-[1024px] mx-auto mt-6 flex flex-col items-center gap-12">
          {/* Blog 1 */}
          <article className="w-full flex flex-col items-start gap-3">
            <img
              src={JammeVoiceBlogImg}
              alt="Blog"
              className="w-full h-auto object-cover aspect-video rounded-xl"
            />
            <h2 className="text-left w-full text-xl font-medium text-[#232323]">
              Voice-Based Mobile Apps: The Future of Social User Experience
            </h2>
            <div className="w-full flex flex-col items-start justify-start mt-4 gap-4">
              <p>
                Voice-based apps are becoming increasingly popular due to their
                convenience, speed, and accessibility. These apps offer a
                hands-free experience, allowing users to multitask efficiently
                and reduce screen time. They are also user-friendly, with an
                intuitive interface that caters to a wide range of users,
                including those with disabilities.
              </p>
              <p>
                Hands-Free Usage: Eliminates the need for physical typing, holding
                the mobile - enabling efficient multitasking. Whether it’s
                composing an email while doing household chores or overseeing
                children during meal preparation, this feature champions a new
                wave of practical feminism at home.
              </p>
              <p>
                One of the significant advantages of voice-activated apps is their
                ability to enhance accessibility. Individuals with visual or motor
                disabilities can benefit greatly from voice commands, enabling
                them to navigate apps and perform tasks effortlessly.
              </p>
              <p>
                Voice-based apps also offer personalized experiences based on
                individual needs. With advancements in natural language processing
                (NLP), artificial intelligence (AI) and machine learning (ML),
                these apps can understand and respond to user commands more
                accurately.
              </p>
            </div>
            <p className="text-base font-medium text-[#232323]">
              - Saandip Mytreya N
            </p>
          </article>

          <div className="w-full h-[2px] bg-[#232323]"></div>

          {/* Blog 2 */}
          <article className="w-full flex flex-col items-start gap-3">
            <img
              src="https://miro.medium.com/v2/1*yGljPZovP3xY8EJ04yDDrg.jpeg"
              alt="Blog"
              className="w-full h-auto object-cover aspect-video rounded-xl"
            />
            <h2 className="text-left w-full text-xl font-medium text-[#232323]">
              Google Gemini AI
            </h2>
            <div className="w-full flex flex-col items-start justify-start mt-4 gap-4">
              <p>This is AMAZINGLY SCARY as HEAVENLY HELL.</p>
              <p>Google has now introduced GEMINI to the world!</p>
              <p>
                Machine learning combined with object recognition seems
                increasingly imminent, prompting me to maintain a polite
                interaction with my phone's apps just in case we need to justify
                our relevance to future artificial intelligence.
              </p>
              <p>
                It’s anticipated that AI will revolutionize society, potentially
                comparable in impact to historical shifts like the move from
                Genetics to Politics to Planets or the advent of Electricity to
                Astrophysics to Wars.
              </p>
            </div>
            <p className="text-base font-medium text-[#232323]">
              - Saandip Mytreya N
            </p>
          </article>

          <div className="w-full h-[2px] bg-[#232323]"></div>

          {/* Blog 3 */}
          <article className="w-full flex flex-col items-start gap-3">
            <img
              src={blog3Img}
              alt="Blog"
              className="w-full h-auto object-cover aspect-video rounded-xl"
            />
            <h2 className="text-left w-full text-xl font-medium text-[#232323]">
              AI the 4IR
            </h2>
            <div className="w-full flex flex-col items-start justify-start mt-4 gap-4">
              <p>
                To capitalize on the tremendous wealth creation, the role of
                harnessing AI and its impact on the working population.
              </p>
              <ul className="list-disc ml-5">
                <li>Semiconductor</li>
                <li>GPUs</li>
                <li>Hyperscale Cloud Infrastructure</li>
                <li>AI Applications</li>
                <li>Humans</li>
              </ul>
              <p>
                These ambitious AI endeavors may have strain on the country’s
                future fiscal, leading to unprecedented borrowing and potential
                stock sales.
              </p>
            </div>
            <p className="text-base font-medium text-[#232323]">
              - Saandip Mytreya N
            </p>
          </article>

          <div className="w-full h-[2px] bg-[#232323]"></div>

          {/* Blog 4 */}
          <article className="w-full flex flex-col items-start gap-3">
            <img
              src={Blog4Img}
              alt="Blog"
              className="w-full h-auto object-cover aspect-video rounded-xl"
            />
            <h2 className="text-left w-full text-xl font-medium text-[#232323]">
              A New Dawn for Indian Entrepreneurs: A thrilling chapter in the
              Indian entrepreneurial saga
            </h2>
            <div className="w-full flex flex-col items-start justify-start mt-4 gap-4">
              <p>
                A Visionary Step by The Kamath Brothers: Known for their
                trailblazing success with Zerodah, Nitin and Nikhil Kamath have
                now embarked on an initiative that promises to nurture and empower
                the next generation of Indian entrepreneurs: the ‘WTF Fund.’
              </p>
              <p>
                This historic step will not just be remembered; it will be
                celebrated in the annals of Indian entrepreneurial history as a
                golden day.
              </p>
            </div>
            <p className="text-base font-medium text-[#232323]">
              - Saandip Mytreya N
            </p>
          </article>
        </main>
      </div>
    </>
  );
};

export default BlogsPage;
