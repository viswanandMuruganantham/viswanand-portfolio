import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Developed a feature-rich e-commerce website with user authentication, product management, and order processing using HTML, CSS, JavaScript, and PHP.",
    link: "#",
  },
  {
    title: "Smart Agriculture System Using IoT",
    description:
      "Designed and developed an IoT-based smart agriculture system for monitoring environmental conditions using React, Arduino, and ThingSpeak.",
    link: "#",
  },
  {
    title: "WeatherMate - Real-Time Weather App",
    description:
      "Built a real-time weather application using React and Tailwind CSS to display live weather updates based on user location.",
    link: "#",
  },
  {
    title: "Docker & Blockchain Integration",
    description:
      "Successfully set up Docker containers for application development using a blockchain network as part of a TCS iON internship.",
    link: "#",
  },
  {
    title: "AR and VR Experience (Meta Spark Studio)",
    description:
      "Created an interactive AR and VR experience using Meta Spark Studio, showcasing immersive technology for enhanced user engagement.",
    link: "#",
  },
  {
    title: "React & Tailwind Blog Application",
    description:
      "Developed a responsive blog application using React and Tailwind CSS, focusing on a clean UI and smooth user experience.",
    link: "#",
  },
  {
    title: "E-Commerce Product Page with React & React Router",
    description:
      "Developed an interactive e-commerce product page using React and React Router, enhancing navigation and user experience.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center w-full px-4 md:px-10 py-10 bg-gradient-to-r from-gray-900 to-black text-gray-200 font-sans">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-400 drop-shadow-lg">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gray-800 shadow-2xl hover:shadow-blue-500/50 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-blue-300 drop-shadow-md">{project.title}</h3>
                <p className="text-gray-300 mt-2 text-lg">{project.description}</p>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition-transform transform hover:scale-110" onClick={() => window.open(project.link, "_blank")}>
                  View Project
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
