import React from "react";
import JammeVoiceBlogImg from "@/assets/JammeVoiceBlog.png"
import blog3Img from "@/assets/Blog3.png"
import Blog4Img from "@/assets/Blog4.jpg"
import SecondaryHeader from "@/components/layout/SecondaryHeader";
const Blogs: React.FC = () => {
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

          {/* Blog 5 */}
          <article className="w-full flex flex-col items-start gap-3">
            <img
              src="https://saandip-mytreya.notion.site/image/attachment%3Adbebab85-5fd8-40fd-a491-e0b4c35ff44b%3AScreenshot_2025-02-06_at_01.16.49.png?table=block&id=191d0dae-4db6-80f4-afde-fd682737c802&spaceId=af3f3025-5d03-4274-97f0-39266345e51c&width=1420&userId=&cache=v2" // Replace with actual image source
              alt="If the USA, UAE and China Can, Why Not India?"
              className="w-full h-auto object-cover aspect-video rounded-xl"
            />
            <h2 className="text-left w-full text-xl font-medium text-[#232323]">
              If the USA, UAE and China Can, Why Not India?
            </h2>
            <div className="w-full flex flex-col items-start justify-start mt-4 gap-4">
              <p>
                A question that has been making rounds in blogs and vlogs lately is:
                <i> If the USA, UAE and China can, why not India?</i> The answer is simple yet crucial - India’s mindsets and budgets are not enough.
                The country should allocate at least 10% of its GDP to research and development (R&D) to drive real innovation.
              </p>

              <h3 className="text-lg font-semibold">The Ecosystem Challenge: Why Silicon Valley and Shenzhen Are Ahead</h3>
              <p>
                Even today, Silicon Valley stands unmatched in its appreciation for groundbreaking ideas. Dubai and Shenzhen too, offer a similar ecosystem.
                Unfortunately, India’s ecosystem has yet to fully evolve to this level.
              </p>
              <p>
                A new generation of investors is needed to bridge this gap. While the country overflows with ideas, the support systems - be it angel funds,
                VC funds, government grants, or university-backed initiatives - have not yet matured enough to truly nurture and drive innovation.
              </p>

              <h3 className="text-lg font-semibold">Indian Startups: A Reflection on Originality</h3>
              <p>
                Indian startups and businesses need to reflect: <i>How original are we, really?</i> The standout innovations from India in the last two
                decades can be counted on one hand - such as UPI, the COVID-19 vaccines, and Chandrayaan III by ISRO.
              </p>
              <p>
                To foster more visionaries like Nandan, Adar, and Veeramuthuvel, government grants, subsidies, and university funding must play a larger
                role in supporting entrepreneurs. Unfortunately, many Indian investors still follow a "Marwari max 3%" mindset, prioritizing safety and
                short-term profits over long-term growth.
              </p>

              <h3 className="text-lg font-semibold">The Mimicry Trap: Copying Rather Than Creating</h3>
              <p>
                Indian startups often fall into a pattern of mimicry and imitation. The West creates Uber; we respond with Ola. Airbnb paves the way, and
                we come up with Oyo. Amazon inspires Flipkart, and OpenAI leads to Sarvam. Even large IT giants like TCS and Infosys raise the question:
                where are their innovation hubs, think tanks, and groundbreaking original ideas?
              </p>

              <h3 className="text-lg font-semibold">Noteworthy Success Stories vs. Overhyped Narratives</h3>
              <p>
                In recent times, we must acknowledge and appreciate success stories like Wingify. Paras Chopra built a million-dollar company without
                relying on seed funding.
              </p>
              <p>
                On the other hand, we see the overhyped narrative surrounding startups like BYJU'S. Despite raising significant funding, Koo failed to
                deliver meaningful value, remaining a regional replica rather than evolving into a global competitor.
              </p>

              <h3 className="text-lg font-semibold">Building a Culture of Technological Patriotism</h3>
              <p>
                Indian citizens must embrace and actively support homegrown innovations. Countries like China and Japan have set powerful examples by
                wholeheartedly supporting their domestic tech ecosystems - India must follow suit.
              </p>

              <h3 className="text-lg font-semibold">Execution and Scalability: The Missing Link</h3>
              <p>
                The Indian entrepreneurial landscape often falls short in execution and global scalability. While American brands like McDonald's and
                Starbucks thrive here, where are India’s homegrown global brands?
              </p>
              <p>
                Another issue is our obsession with big statements. Claims like *“India’s largest”* or *“we’re addressing billions”* often amount to
                nothing more than vanity metrics, with little substance in terms of real action.
              </p>

              <h3 className="text-lg font-semibold">The Need for Experimentation and Risk-Taking</h3>
              <p>
                Globally, we see side projects like DeepSeek AI - a $6 million, open-source initiative - challenging OpenAI’s future plans.
                Experimentation is essential, and the West embraces it, knowing that failure is often part of the process.
              </p>

              <h3 className="text-lg font-semibold">Final Thoughts</h3>
              <p>
                India has predominantly been seen as a service-driven economy over the past three decades. However, the mindset of late millennials and
                early Gen Z in India aligns more closely with the West. To break free from this narrative, we need a cultural shift that fosters
                originality, bold execution, and a stronger commitment to long-term thinking.
              </p>
              <p>
                Otherwise, we continue as CEOs and CTOs, serving the West and building their success instead of our own.
              </p>
            </div>
            <p className="text-base font-medium text-[#232323]">
              Saandip Mytreya N
            </p>
          </article>
          <div className="w-full h-[2px] bg-[#232323]"></div>
        </main>
      </div>
    </>
  );
};

export default Blogs;
