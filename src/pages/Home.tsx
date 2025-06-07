import { useEffect, useRef, useState } from "react";
import profilePic from "@/assets/profile.jpg";
import profileIllustration from "@/assets/undraw_hello_ccwj.svg";
import {  FaLinkedinIn, FaCode } from "react-icons/fa";

import { AiFillGithub } from "react-icons/ai";
import { motion, useInView } from "framer-motion";

// Roles to be typed
const roles = [
  "Full Stack Developer",
  "Software Engineer",
  
  "Backend Developer",
  "Frontend Expert",
];

// Typing hook
function useTypewriter(words: string[], typingSpeed = 100, pauseTime = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pauseTime);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((v) => !v);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : ""}`;
}

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const typedText = useTypewriter(roles);

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 to-black text-white px-4 relative z-0">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center min-h-screen pt-10 gap-10 z-10 relative">
        <div className="flex flex-col items-start gap-4 lg:w-1/2 text-center lg:text-left z-10">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={profilePic}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-purple-500 lg:self-start lg:ml-4 mb-2"
          />

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mt-2"
          >
            Hello, I'm Viswanand
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 h-10"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold">
              {typedText}
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-4 text-lg md:text-2xl font-bold bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 bg-clip-text text-transparent"
          >
            Passionate about building high-performing web apps. 👨‍💻
          </motion.p>

          <div className="flex justify-center lg:justify-start gap-4 mb-2 text-2xl text-white z-20 relative">
            <a href="https://github.com/viswanandMuruganantham" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition duration-300">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/viswanand-muruganantham-28147a253/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition duration-300">
              <FaLinkedinIn />
            </a>
            <a href="https://leetcode.com/u/VISWANAND_M/" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition duration-300">
              <FaCode />
            </a>
          </div>
        </div>

        {/* Illustration */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="flex justify-center items-center lg:w-1/2">
          <img src={profileIllustration} alt="Illustration" className="w-64 md:w-80 lg:w-[28rem] h-auto z-0" />
        </motion.div>
      </div>

      {/* What I Do Section */}
      <section className="py-16 bg-gray-900 text-center relative overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent"
        >
          🚀 What I Do
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto px-4 text-gray-300 text-lg"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.3 }}
          viewport={{ once: true }}
        >
          {["I build scalable and maintainable web applications using modern JavaScript frameworks like React for the frontend and server-side technologies like Node.js and NestJS.",
            " I enjoy crafting responsive user interfaces with TailwindCSS, building robust RESTful APIs, and ensuring smooth frontend-backend integration for seamless user experiences. ",
            "I'm currently focused on full-stack development and also deepening my expertise in Java-based backend development, working on real-world projects that demand performance and scalability."]
            .map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="mb-4"
              >
                {line}
              </motion.p>
            ))}
        </motion.div>

        {/* Decorative moving background light */}
        <motion.div
          className="absolute -top-10 -left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </section>

      {/* Tech Quote Section */}
<section className="py-20 bg-gray-950 text-center relative overflow-hidden">
  {/* Background Glow Animation */}
  <motion.div
    className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[30rem] h-[30rem] bg-gradient-to-br from-yellow-400 via-pink-500 to-red-500 opacity-10 blur-3xl rounded-full z-0"
    animate={{ scale: [1, 1.15, 1] }}
    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
  />
  
  {/* Quotation Icon */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="text-6xl text-pink-500 mb-6 z-10 relative"
  >
    “
  </motion.div>

  {/* Quote Text */}
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.4 }}
    viewport={{ once: true }}
    className="text-xl md:text-3xl leading-relaxed font-semibold max-w-4xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-red-400 z-10 relative"
  >
    Start where you are. Use what you have. <br className="hidden md:block" />
    Unleash your potential.
  </motion.p>

  {/* Signature */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.4, delay: 0.4 }}
    viewport={{ once: true }}
    className="mt-6 text-base md:text-lg font-medium text-gray-400 italic z-10 relative"
  >
    – Viswanand
  </motion.p>
</section>


      {/* Fun Fact Section */}
      <section ref={ref} className="px-4 py-16 bg-gray-800 text-center overflow-hidden relative">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold mb-4 text-white"
        >
          ✨ Fun Fact ✨
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-xl mx-auto text-lg font-semibold bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent italic"
        >
          "The first website I built had more console errors than lines of code! <br />
          Now, I architect full-stack apps & decentralized solutions."
        </motion.p>

        <motion.div
          className="absolute -bottom-10 left-10 w-80 h-80 bg-pink-500 rounded-full blur-2xl opacity-25"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
      </section>
    </div>
  );
}
