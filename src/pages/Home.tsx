import { motion } from "framer-motion";
import profilePic from "@/assets/profile.jpg";
import { FaReact, FaNodeJs, FaEthereum } from "react-icons/fa";
import { SiNestjs, SiPostgresql, SiTailwindcss } from "react-icons/si";

export default function Home() {
  return (
    <div className="w-full bg-gray-900 text-white flex flex-col items-center relative px-4">
      {/* Profile Picture - Positioned Left Below Navbar (Responsive) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-20 left-6 md:left-10 lg:left-16 flex flex-col items-center"
      >
        <img
          src={profilePic}
          alt="Viswanand"
          className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 border-4 border-blue-500 shadow-lg shadow-blue-500/40 object-cover"
        />
        <span className="mt-2 text-gray-300 font-semibold text-xs md:text-sm lg:text-base text-center">
          🚀 Let's build something amazing!
        </span>
      </motion.div>

      {/* Center Content - Adjusted for Responsiveness */}
      <div className="flex flex-col justify-center items-center min-h-screen text-center mt-32 md:mt-40 lg:mt-20">
        <div>
          {/* Title & Subtitle */}
          <h1 className="text-3xl md:text-5xl font-bold">Hi, I'm Viswanand</h1>
          <p className="mt-2 text-gray-400 text-sm md:text-lg">
            Full Stack Developer | Blockchain Enthusiast
          </p>

          {/* Quote Section with Animation */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mt-4 text-lg md:text-2xl font-bold bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 bg-clip-text text-transparent"
          >
            "Start where you are. Use what you have. <br /> Unleash your potential."
          </motion.p>
        </div>
      </div>

      {/* What I Do Section */}
      <section className="px-4 py-8 bg-gray-800 text-center w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          <motion.div whileHover={{ scale: 1.1 }} className="p-6 bg-gray-700 rounded-xl shadow-lg">
            <FaReact className="text-4xl text-blue-400 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">Frontend Development</h3>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="p-6 bg-gray-700 rounded-xl shadow-lg">
            <FaNodeJs className="text-4xl text-green-400 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">Backend Development</h3>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="p-6 bg-gray-700 rounded-xl shadow-lg">
            <FaEthereum className="text-4xl text-yellow-400 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">Blockchain & Smart Contracts</h3>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-4 py-12 bg-gray-900 text-center w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech Stack</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-4xl text-gray-400 justify-center">
          <FaReact title="React" className="hover:text-blue-400 transition duration-300" />
          <FaNodeJs title="Node.js" className="hover:text-green-400 transition duration-300" />
          <SiNestjs title="NestJS" className="hover:text-red-400 transition duration-300" />
          <SiPostgresql title="PostgreSQL" className="hover:text-blue-500 transition duration-300" />
          <FaEthereum title="Ethereum" className="hover:text-yellow-400 transition duration-300" />
          <SiTailwindcss title="Tailwind CSS" className="hover:text-blue-300 transition duration-300" />
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className="px-4 py-12 bg-gray-800 text-center w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">✨ Fun Fact ✨</h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-lg mx-auto text-sm md:text-lg font-semibold 
                     bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 
                     bg-clip-text text-transparent italic"
        >
          "The first website I built had more console errors than lines of code! <br />
          Now, I architect full-stack applications and deploy decentralized solutions. <br />
          🚀 Progress is just **consistency** over time!"
        </motion.p>
      </section>
    </div>
  );
}
