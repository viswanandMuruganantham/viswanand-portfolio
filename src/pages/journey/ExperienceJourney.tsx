
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";

function ExperienceJourney() {
  return (
    <div className="mt-10 px-4 md:px-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 mb-12"
      >
        Experience Journey
      </motion.h1>

      <VerticalTimeline lineColor="rgb(124, 58, 237)">
        {/* Acmegrade */}
        <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{
    background: "rgb(78 22 112)",
    color: "#fbd9ad",
    borderRadius: "1rem",
  }}
  contentArrowStyle={{
    borderRight: "7px solid rgb(78 22 112)",
  }}
    // ✅ Just use a plain string
  iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
  icon={<PersonIcon />}
>
  <h5 className="font-semibold">
    Acmegrade - Data Science Intern (Certificate)
  </h5>
  <h6 className="mt-2">Remote Internship</h6>
  <p>• Data preprocessing, ML model development, statistical analysis.</p>
  <p>• Used Python, Pandas, NumPy, and visualization libraries.</p>
  <p className="italic">Nov 2023 – Jan 2024</p>
</VerticalTimelineElement>



        {/* TCS iON */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work custom-date-right"
          contentStyle={{
            background: "rgb(78 22 112)",
            color: "#fbd9ad",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{
            borderLeft: "7px solid rgb(78 22 112)",
          }}
          
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="font-semibold">
            TCS iON - Remote Internship (Certificate)
          </h5>
          <h6 className="mt-2">Blockchain and DevOps</h6>
          <p>• Built Docker containers for blockchain apps.</p>
          <p>• Learned containerization & DevOps best practices.</p>
          <p className="italic">July 2024 – Oct 2024</p>
        </VerticalTimelineElement>

        {/* Emblock */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work custom-date-left"
          contentStyle={{
            background: "rgb(78 22 112)",
            color: "#fbd9ad",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(78 22 112)",
          }}
          
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="font-semibold">
            Emblock - Full Stack Developer Intern
          </h5>
          <h6 className="mt-2">Remote Internship</h6>
          <p>• Built MERN stack apps with REST APIs.</p>
          <p>• Collaborated on frontend/backend modules and deployment.</p>
          <p className="italic">Feb 2025 – Present</p>
        </VerticalTimelineElement>

        {/* Star */}
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
