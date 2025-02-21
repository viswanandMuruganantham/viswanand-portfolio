import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCloud, FaEthereum, FaJava } from "react-icons/fa";
import { SiNestjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiDocker, SiFlutter } from "react-icons/si";

export default function About() {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500" />, bg: "bg-blue-900" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, bg: "bg-green-900" },
    { name: "NestJS", icon: <SiNestjs className="text-red-500" />, bg: "bg-red-900" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, bg: "bg-blue-800" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, bg: "bg-cyan-900" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" />, bg: "bg-blue-700" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, bg: "bg-green-700" },
    { name: "Cloud Computing", icon: <FaCloud className="text-gray-400" />, bg: "bg-gray-800" },
    { name: "Blockchain", icon: <FaEthereum className="text-yellow-400" />, bg: "bg-yellow-700" },
    { name: "Docker", icon: <SiDocker className="text-blue-500" />, bg: "bg-blue-900" },
    { name: "Flutter", icon: <SiFlutter className="text-cyan-400" />, bg: "bg-cyan-700" },
    { name: "Java", icon: <FaJava className="text-red-500" />, bg: "bg-red-800" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-10 py-10 bg-gradient-to-r from-gray-900 to-black text-gray-200 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center w-full max-w-3xl mb-12"
      >
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          About Me
        </h2>
        <Card className="mt-6 bg-gray-900 shadow-2xl rounded-xl p-8">
          <CardContent>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-lg font-medium text-center"
            >
              Hi, I'm Viswanand, a passionate Full Stack Developer specializing in modern web technologies, blockchain, and cloud computing. With a strong foundation in React, Node.js, and NestJS, I strive to build scalable and performance-driven applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-4 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-lg font-medium text-center"
            >
              My experience spans across various domains, including e-commerce, IoT, and decentralized applications. I enjoy tackling complex problems and leveraging cutting-edge technologies to create meaningful solutions.
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>

      <div className="flex flex-col items-center w-full max-w-5xl">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
          My Skills
        </h2>

        <div className="overflow-hidden w-full">
          <motion.div
            className="flex space-x-6"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  className={`p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-xl ${skill.bg}`}
                >
                  <CardContent className="flex flex-col items-center">
                    <div className="text-5xl">{skill.icon}</div>
                    <p className="mt-3 text-white font-semibold text-lg">{skill.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
