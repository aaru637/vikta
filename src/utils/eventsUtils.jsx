// images
import mrEngineer from "../assets/images/mr_engineer.jpg";
import sqlMaestro from "../assets/images/sql_maestro.jpg";
import bugSpotter from "../assets/images/bug_spotter.jpg";
import slideToSuccess from "../assets/images/slide_to_success.jpg";
import webWizard from "../assets/images/web_wizard.jpg";
import brilliantMind from "../assets/images/brilliant_mind.jpg";
import scavenger_hunt from "../assets/images/scavenger_hunt.jpg";

// text
const technical = "Technical Events";
const nonTechnical = "Non Technical Events";

// co-ordinator details
const techCoOrdinator = {
  title: "Coordinator",
  name: "Sivasakthi V",
};
const nonTechCoOrdinator = {
  title: "Coordinator",
  name: "Vinothkumar N",
};
// event details
const technicalEventDetails = [
  {
    id: "mr_engineer",
    name: "Mr Engineer",
    image: mrEngineer,
    about: [
      "Mr Engineer is an exhilarating event designed to bring together the brightest minds from various disciplines to tackle real-world challenges through technology.",
      "It is a unique oppurtunity for students to unleash their creativity and hone their coding skills",
      "Based on Interview Concepts.",
    ],
    venue: "Lab - IV",
  },
  {
    id: "sql_maestro",
    name: "SQL Maestro",
    image: sqlMaestro,
    about: [
      "SQL Maestro is an electrifying event designed for college students passionate about database management and SQL Querying.",
      "Hosted by the Computer Science Department, this event calls upon students from all backgrounds to demonstrate their prowess in SQL.",
      "Whether you are a beginner eager to learn or a seasoned maestro ready to showcase your skills.",
    ],
    venue: "Lab - IV",
  },
  {
    id: "bug_spotter",
    name: "Bug Spotter",
    image: bugSpotter,
    about: [
      "Designed for the sharp-eyed color, this event puts your debugging skills to the test in a thrilling competition.",
      "Whether you're a seasoned developer, a budding programmer, or someone passionate about software quality.",
      "Bug Spotter offers an unmatched oppurtunity to showcase your abilities, learn from the best, and connect with like-minded individuals.",
    ],
    venue: "Lab - IV",
  },
  {
    id: "slide_to_success",
    name: "Slide to Success",
    image: slideToSuccess,
    about: [
      "Join our slide to success event at the college symposium and propel your journey to new heights.",
      "Fuel your ambition with captivating speeches from industry trailblazers and thought leaders.",
      "Discover untapped abilities and talents through engaging activities tailored for growth.",
      "Challenge yourself to reach new heights and exceed your own expectations.",
    ],
    venue: "Lab - I",
  },
];

const nonTechnicalEventDetails = [
  {
    id: "web_wizard",
    name: "Web Wizard",
    image: webWizard,
    about: [
      "Web Wizard event is to enhance participants search skills, making them more proficient in finding accurate information quickly.",
      "It challenges students to think critically about search queries, evaluate sources for credibility and use advanced search techniques to filter results effectively.",
      "Participants can either complete individually or in teams, depending on the event's rules.",
    ],
    venue: "Lab - I",
  },
  {
    id: "brilliant-mind",
    name: "Brilliant Mind",
    image: brilliantMind,
    about: [
      "Brilliant Mind is a Non Tech event which could refer to a competition or showcase designed to celebrate and challenge the intellectual and creative capabilities of students outside the realm of technology.",
      "Bridge the gap between different fields of study, showing how a well-rounded education can lead to innovative ideas and solutions.",
      "Provide a platform for students who excel in areas outside of technology and engineering to shine.",
    ],
    venue: "Lab - I",
  },
  {
    id: "scavenger_hunt",
    name: "Scavenger Hunt",
    image: scavenger_hunt,
    about: [
      "Join us for the ultimate Scavenger Hunt event, where excitement awaits around every corner.",
      "Put your wit and cunning to the test as you solve clues and unravel mysteries throughout the symposium grounds.",
      "Think outside the box and strategize with your team to conquer challenges and emerge victorious.",
    ],
    venue: "-----",
  },
];

export {
  mrEngineer,
  technicalEventDetails,
  nonTechnicalEventDetails,
  technical,
  nonTechnical,
  techCoOrdinator,
  nonTechCoOrdinator,
};
