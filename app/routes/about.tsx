import type { MetaFunction } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

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
        <div className="relative py-40 md:py-52 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <span className="inline-flex items-center rounded-full px-6 py-2 text-sm font-medium bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mb-8 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-400/20">
              About Us
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                Team
              </span>
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              We're a passionate group of educators, developers, and designers
              working together to revolutionize technical education.
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
