import type { MetaFunction } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaCode, FaUsers, FaCheck } from "react-icons/fa";

export const meta: MetaFunction = () => {
  return [
    { title: "About Us | TriWikiTech" },
    {
      name: "description",
      content:
        "Meet the passionate team behind TriWikiTech, dedicated to revolutionizing technical education.",
    },
  ];
};

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Stawa",
    role: "Founder & Lead Developer",
    bio: "No idea what to write here.",
    image: "https://avatars.githubusercontent.com/u/69102292?v=4",
    social: {
      github: "https://github.com/Stawa",
      twitter: "https://twitter.com/StawaDev",
    },
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function AnimatedContent() {
  return (
    <>
      {/* Goals Section */}
      <section
        id="goals"
        className="relative bg-white dark:bg-gray-900 overflow-hidden"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-gray-900/80 dark:to-gray-900"></div>

        {/* Goals Content */}
        <div className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-center"
          >
            <span className="inline-flex items-center rounded-full px-6 py-2 text-sm font-medium bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mb-8 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-400/20">
              Our Goals
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
              Building the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                Future
              </span>
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              At TriWikiTech, we're committed to transforming how people learn
              and master technology. Here's our roadmap to achieve this vision:
            </p>
          </motion.div>

          {/* Steps List */}
          <div className="relative max-w-3xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-12">
                {[
                  {
                    title: "Accessible Education Platform",
                    description:
                      "Create comprehensive, easy-to-follow learning paths that make technical education accessible to everyone.",
                    icon: FaGraduationCap,
                    percent: 15,
                    status: "in-progress", // completed, in-progress
                  },
                  {
                    title: "Interactive Learning Content",
                    description:
                      "Develop hands-on projects and real-world examples that build practical, industry-relevant skills.",
                    icon: FaCode,
                    percent: 0,
                    status: "in-progress",
                  },
                  {
                    title: "Community Features",
                    description:
                      "Build collaboration tools where learners can share knowledge and grow together.",
                    percent: 0,
                    icon: FaUsers,
                    status: "in-progress",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    variants={item}
                    className="relative flex gap-6"
                  >
                    {/* Step indicator */}
                    <div className="flex-none">
                      <div
                        className={`
                        w-12 h-12 rounded-full flex items-center justify-center
                        ${
                          step.status === "completed"
                            ? "bg-green-100 dark:bg-green-900/30"
                            : step.status === "in-progress"
                            ? "bg-indigo-100 dark:bg-indigo-900/30"
                            : "bg-gray-100 dark:bg-gray-800/50"
                        }
                        ${
                          step.status === "completed"
                            ? "text-green-600 dark:text-green-400"
                            : step.status === "in-progress"
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-gray-400 dark:text-gray-500"
                        }
                        ring-2
                        ${
                          step.status === "completed"
                            ? "ring-green-600/20 dark:ring-green-400/20"
                            : step.status === "in-progress"
                            ? "ring-indigo-600/20 dark:ring-indigo-400/20"
                            : "ring-gray-300/20 dark:ring-gray-700/20"
                        }
                      `}
                      >
                        {step.status === "completed" ? (
                          <FaCheck className="w-5 h-5" />
                        ) : (
                          <step.icon className="w-5 h-5" />
                        )}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold mb-2
                        ${
                          step.status === "completed"
                            ? "text-green-600 dark:text-green-400"
                            : step.status === "in-progress"
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-gray-400 dark:text-gray-500"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                      {step.status === "in-progress" && (
                        <div className="mt-4">
                          <div className="relative h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                            {/* Background shimmer effect */}
                            {step.percent === 0 && (
                              <div className="absolute inset-0 w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />
                            )}

                            {/* Progress bar */}
                            {step.percent > 0 && (
                              <div
                                className="relative h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 bg-[length:200%_100%] animate-[gradient_2s_ease-in-out_infinite] transition-all duration-300 ease-out overflow-hidden"
                                style={{ width: `${step.percent}%` }}
                              >
                                {/* Shine effect */}
                                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_2s_ease-in-out_infinite]" />

                                {/* Glow effect */}
                                <div className="absolute inset-0 w-full h-full bg-indigo-400/20 blur-sm" />
                              </div>
                            )}
                          </div>

                          {/* Percentage display */}
                          <div className="mt-2 flex items-center justify-between text-sm">
                            <p className="font-medium text-indigo-600 dark:text-indigo-400">
                              Progress
                            </p>
                            <div className="flex items-center">
                              {step.percent > 0 && (
                                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mr-2 animate-pulse" />
                              )}
                              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                                {step.percent}%
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="relative bg-white dark:bg-gray-900 overflow-hidden"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-gray-900/80 dark:to-gray-900"></div>

        {/* Hero Content */}
        <div className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <span className="inline-flex items-center rounded-full px-6 py-2 text-sm font-medium bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mb-8 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-400/20">
              Our Team
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
              Meet the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                Creator
              </span>
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              Starting as an alone developer, this platform is currently being
              built to bring people, excited educators and developers, joining
              their skills to create outstanding learning experiences.
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative max-w-sm mx-auto px-4 sm:px-6 lg:px-8 pb-32"
        >
          <div className="grid grid-cols-1 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={item}
                className="group relative"
              >
                <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-white via-white to-indigo-50/20 dark:from-gray-800 dark:via-gray-800 dark:to-indigo-900/20 shadow-xl hover:shadow-2xl transition-all duration-500 border border-indigo-100/20 dark:border-indigo-500/10 backdrop-blur-sm">
                  {/* Top accent bar with enhanced design */}
                  <div className="relative">
                    {/* Main gradient bar */}
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />

                    {/* Animated shine effect */}
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

                    {/* Blurred overflow effect */}
                    <div className="absolute -top-1 inset-x-0 h-3 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 opacity-50 blur-sm" />
                  </div>

                  <div className="relative pt-10 px-8 pb-8">
                    {/* Image and name section */}
                    <div className="flex flex-col items-center">
                      {/* Image container with decorative ring */}
                      <div className="relative group-hover:scale-105 transition-all duration-500">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500" />
                        <div className="relative w-28 h-28 rounded-full overflow-hidden ring-[3px] ring-white dark:ring-gray-800 shadow-lg">
                          <img
                            className="w-full h-full object-cover"
                            src={member.image}
                            alt={member.name}
                          />
                        </div>
                      </div>

                      {/* Name and role */}
                      <div className="mt-6 text-center relative">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {member.name}
                        </h3>
                        <div className="mt-1 text-sm font-medium text-indigo-600/80 dark:text-indigo-400/80 uppercase tracking-wider">
                          {member.role}
                        </div>
                        {/* Decorative line */}
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="mt-6 text-center">
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    {/* Social links */}
                    <div className="mt-6 flex justify-center gap-3">
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="group/link relative p-2 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub"
                        >
                          <div className="absolute inset-0 rounded-xl bg-gray-50/80 dark:bg-gray-900/50 ring-1 ring-gray-200/50 dark:ring-gray-700/50 group-hover/link:ring-indigo-200 dark:group-hover/link:ring-indigo-800 transition-all duration-300" />
                          <FaGithub className="relative h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="group/link relative p-2 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Twitter"
                        >
                          <div className="absolute inset-0 rounded-xl bg-gray-50/80 dark:bg-gray-900/50 ring-1 ring-gray-200/50 dark:ring-gray-700/50 group-hover/link:ring-indigo-200 dark:group-hover/link:ring-indigo-800 transition-all duration-300" />
                          <FaTwitter className="relative h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="relative bg-white dark:bg-gray-900 overflow-hidden"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-gray-900/80 dark:to-gray-900"></div>

        {/* Mission Content */}
        <div className="relative py-40 md:py-52 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center rounded-full px-6 py-2 text-sm font-medium bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mb-8 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-400/20">
              Our Mission
            </span>
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
              Empowering Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                Education
              </span>
            </h2>
            <p className="mt-8 max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 dark:text-gray-400">
              We believe in making high-quality technical education accessible
              to everyone. Our platform combines cutting-edge technology with
              expert-crafted content to create an engaging learning experience.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ClientOnly fallback={null}>
        {() => (
          <AnimatePresence mode="wait">
            <AnimatedContent />
          </AnimatePresence>
        )}
      </ClientOnly>
    </div>
  );
}
