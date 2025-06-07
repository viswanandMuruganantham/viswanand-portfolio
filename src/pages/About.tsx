import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaCloud, FaJava,
} from "react-icons/fa";
import {
  SiNestjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiDocker, 
  SiPostman,
  SiFigma,
} from "react-icons/si";
import EducationJourney from "./journey/EducationJourney";
import ExperienceJourney from "./journey/ExperienceJourney";

export default function About() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");

  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500" />, bg: "bg-blue-900" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, bg: "bg-green-900" },
    { name: "NestJS", icon: <SiNestjs className="text-red-500" />, bg: "bg-red-900" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, bg: "bg-blue-800" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, bg: "bg-cyan-900" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" />, bg: "bg-blue-700" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, bg: "bg-green-700" },
    { name: "Cloud Computing", icon: <FaCloud className="text-gray-400" />, bg: "bg-gray-800" },
    { name: "Docker", icon: <SiDocker className="text-blue-500" />, bg: "bg-blue-900" },
    
    { name: "Java", icon: <FaJava className="text-red-500" />, bg: "bg-red-800" },
    
  { name: "Postman", icon: <SiPostman className="text-orange-500" />, bg: "bg-orange-800" },
  { name: "Figma", icon: <SiFigma className="text-pink-500" />, bg: "bg-pink-800" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-16 bg-gradient-to-br from-gray-950 to-black text-gray-200 font-sans">
      {/* ABOUT ME SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center w-full max-w-6xl mb-16 px-6"
      >
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg mb-8">
          About Me
        </h2>
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl rounded-2xl p-10 border border-purple-800">
          <CardContent>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-lg md:text-xl font-medium text-center mb-4"
            >
              My name is Viswanand Muruganantham, an enthusiastic and dedicated Information Technology student at Panimalar Engineering College – Chennai City Campus in Tamil Nadu.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-4 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-lg md:text-xl font-medium text-center mb-4"
            >
              I am passionate about software development and thrive in solving real-world problems using technology. I have a strong foundation in programming languages like C, Java, Python, and JavaScript, and I enjoy building scalable applications and tools.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-lg md:text-xl font-medium text-center"
            >
              My technical skillset includes working with modern frameworks and libraries such as React.js, Next.js, NestJS. I'm a quick learner, team player, and technology enthusiast who loves experimenting with new tools and turning ideas into reality.
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>

      {/* SKILLS SECTION */}
      <div className="flex flex-col items-center w-full max-w-6xl mb-20 px-4">
  <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-12 text-center">
    My Skills
  </h2>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full"
  >
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 shadow-xl border border-gray-700 hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300"
      >
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <div className="text-4xl">{skill.icon}</div>
          <p className="text-white font-semibold text-sm md:text-base">{skill.name}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>
</div>

      {/* JOURNEY TABS */}
      <div className="mt-8 w-full max-w-5xl z-10">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition duration-300 ${
              activeTab === "education"
                ? "bg-purple-700 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-purple-600"
            }`}
          >
            Education Journey
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition duration-300 ${
              activeTab === "experience"
                ? "bg-purple-700 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-purple-600"
            }`}
          >
            Experience Journey
          </button>
        </div>
        <div key={activeTab} className="transition duration-500 ease-in-out">
          {activeTab === "education" ? <EducationJourney /> : <ExperienceJourney />}
        </div>
      </div>
    </div>
  );
}
