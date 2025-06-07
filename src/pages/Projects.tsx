import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Import images
import calendar from "../images/nyc.png";
import calculator from "../images/hd.png";
import dc from "../images/meal.png";
import age from "../images/bc.png";
import sims from "../images/academic.png";
import blog from "../images/pp.png";
import clo from "../images/clo.png";
import sim from "../images/sims.png"
import vii from "../images/dc.png"

const projects = [
  {
    title: "Full-Stack Finance Dashboard with ML-Based Forecasting",
    description:
      "Developed a MERN-based Finance Dashboard with ML predictions using Vite, Redux Toolkit, MUI, and Recharts.",
    link: "https://github.com/viswanandMuruganantham/Finance-Tracker-App",
    image: calendar,
  },
  {
    title: "Smart Agriculture System Using IoT",
    description:
      "Led a team to develop an IoT-based smart agriculture system that monitored environmental parameters and integrated real-time data visualization through ThingSpeak.",
    link: "https://github.com/viswanandMuruganantham/React-IOT",
    image: calculator,
  },
  {
    title: "Cloud-Hosted Banking Data Analytics and Reporting System on AWS",
    description:
      "Led a team to develop a Flask-based cloud banking application on AWS. Utilized Amazon EC2, RDS (MySQL), and CloudWatch for deployment, monitoring, and scalability.",
    link: "https://github.com/viswanandMuruganantham/naanmudulvanIT161",
    image: clo,
  },
  {
    title: "AI-Powered Blood Report Parsing and Analysis System ",
    description:
      "Developed a full-stack application to extract, parse, and analyze medical data from blood reports using OCR and AI. Integrated React with an AI model for named entity recognition (NER). Enabled secure patient data handling and insightful diagnostics through a responsive UI.",
    link: "https://github.com/viswanandMuruganantham/blood-report-parser-FullStack",
    image: sim,
  },
  {
    title: "WeatherMate - Real-Time Weather App",
    description:
      "Built a real-time weather application using React and Tailwind CSS to display live weather updates based on user location.",
    link: "https://github.com/viswanandMuruganantham/react-weather",
    image: dc,
  },
  {
    title: "Blockchain Based Application",
    description:
      "Successfully built a Transtaction Handler application using a blockchain network as part of a TCS iON internship.",
    link: "https://github.com/viswanandMuruganantham/blockchain",
    image: age,
  },
  {
    title: "AR and VR Experience (Meta Spark Studio)",
    description:
      "Created an interactive AR and VR experience using Meta Spark Studio, showcasing immersive technology for enhanced user engagement.",
    link: "#",
    image: sims,
  },
  {
    title: "React & Tailwind Blog Application",
    description:
      "Developed a responsive blog application using React and Tailwind CSS, focusing on a clean UI and smooth user experience.",
    link: "https://github.com/viswanandMuruganantham/react-tailwind?tab=readme-ov-file",
    image: blog,
  },
  {
    title: "E-Commerce Product Page with React & React Router",
    description:
      "Developed an interactive e-commerce product page using React and React Router, enhancing navigation and user experience.",
    link: "https://github.com/viswanandMuruganantham/react-ecommerce-routing",
    image: calculator,
  },
  {
    title: "Social Media Sentiment Analyzer",
    description:
      "Built a tool to analyze sentiment from social media posts using NLP techniques.Fetched tweets/comments via APIs and classified sentiment as Positive, Negative, or Neutral.Visualized sentiment distribution with graphs for better insights.Trained a machine learning model using labeled datasets for improved accuracy.",
    link: "https://github.com/viswanandMuruganantham/social-media-sentiment-analysis",
    image: vii,
  },
  {
    title: "AI-Powered Baby Cry Detector",
    description:
      "Developed an intelligent system that detects infant crying using audio signal processing and machine learning. Trained a classifier to distinguish between baby cries and ambient noise with high accuracy.Triggered real-time alerts (sound or message) to notify caregivers for quick response.Enhanced parental monitoring and safety using AI-driven acoustic analysis.",
    link: "https://github.com/viswanandMuruganantham/baby-cry-detector",
    image: sim,
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center w-full px-4 md:px-10 py-10 bg-gradient-to-r from-gray-900 to-black text-gray-200 font-sans">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-400 drop-shadow-lg">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gray-800 shadow-2xl hover:shadow-blue-500/50 rounded-xl overflow-hidden transform transition-all duration-300 h-[400px] flex flex-col justify-between">
              <CardContent className="p-0 h-full group relative flex flex-col">
                {/* Image area with overlay */}
                <div className="relative h-[65%] w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Visible only on hover */}
                  <div className="absolute inset-0 hidden group-hover:flex bg-black bg-opacity-80 text-white text-sm p-4 items-center justify-center transition-all duration-300">
                    <p className="text-center leading-relaxed overflow-auto">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Bottom area with title and button */}
                <div className="h-[35%] bg-black bg-opacity-80 text-white p-4 flex flex-col justify-center items-center space-y-2">
                  <h3 className="text-lg font-semibold text-blue-300 text-center">
                    {project.title}
                  </h3>
                  <Button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition-transform transform hover:scale-105"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
