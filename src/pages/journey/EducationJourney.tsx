
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";

function EducationJourney() {
  return (
    <div className="mt-10 px-4 md:px-12">
      {/* Heading with framer motion */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 mb-12"
      >
        Qualification Journey
      </motion.h1>

      {/* Timeline */}
      <VerticalTimeline lineColor="rgb(124, 58, 237)">
        {/* Schooling */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "rgba(124, 58, 237, 0.2)",
            color: "#f9f9f9",
            borderRadius: "1rem",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(124, 58, 237)",
          }}
          
          iconStyle={{
            background: "rgb(124, 58, 237)",
            color: "#fff",
          }}
          icon={<SchoolIcon />}
        >
          <h4 className="text-xl font-bold">Trinity Academy (CBSE Board)</h4>
          <h5 className="text-sm text-gray-300 mt-1">Tamil Nadu, India</h5>
          <p className="mt-2 text-gray-200">
            Completed schooling from LKG to 12th grade. Built a strong academic
            foundation and actively participated in co-curricular activities.
          </p>
          <p className="italic">"2007 - 2022"</p>
        </VerticalTimelineElement>

        {/* College */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "rgba(124, 58, 237, 0.2)",
            color: "#f9f9f9",
            borderRadius: "1rem",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(124, 58, 237)",
          }}
          
          iconStyle={{
            background: "rgb(124, 58, 237)",
            color: "#fff",
          }}
          icon={<SchoolIcon />}
        >
          <h4 className="text-xl font-bold">
            B.Tech in Information Technology
          </h4>
          <h5 className="text-sm text-gray-300 mt-1">
            Panimalar Engineering College, Chennai
          </h5>
          <p className="mt-2 text-gray-200">
            Currently pursuing with a focus on full-stack development, data
            structures, algorithms, and real-world applications.
            <br />
            CGPA: <strong>8.9 / 10</strong>
          </p>
          <p 
          className="italic">2022 - 2026</p>
        </VerticalTimelineElement>

        {/* Star icon at the end */}
        <VerticalTimelineElement
          iconStyle={{ background: "#facc15", color: "#000" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;
