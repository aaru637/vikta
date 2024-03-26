import inaugration from "../assets/lottie-files/inauguration.json";
import ceremony from "../assets/lottie-files/closing.json";
import technical from "../assets/lottie-files/technical.json";
import nonTechnical from "../assets/lottie-files/non-technical.json";

const about1 =
  "\t\t\t\tThe Government College of Engineering Dharmapuri, in association with the Association of Computer Science Engineers, is proud to announce a national level technical symposium";
const about2 = " (VIKTA.2-24)";
const about3 =
  " on Computer Science and Engineering. The symposium aims to provide a platform for researchers, scholars, and practitioners to exchange ideas, present research findings, and discuss emerging trends and challenges in the field of computer science and engineering.The symposium";
const about4 =
  " will take place on April 8th, 2024, at the Government College of Engineering Dharmapuri, a leading institution known for its excellence in engineering education. The venue provides state-of-the-art facilities and a conducive environment for academic exchange and networking.The symposium will also provide a platform for participants to showcase their research findings through poster presentations, which will allow them to receive feedback from peers and experts in the field. The symposium will culminate in a networking session, which will enable participants to connect with fellow researchers, scholars, and practitioners, fostering collaboration and professional growth.In summary, the national level symposium on Computer Science and Engineering is an exciting opportunity for participants to engage with cutting-edge research, network with peers and experts, and advance their academic and professional goals. We invite all interested individuals to participate and contribute to this enriching academic event.";

const LottieAnimation = (animationData) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return defaultOptions;
};

const eventData = [
  {
    title: "Inauguration",
    imageURL: LottieAnimation(inaugration),
  },

  {
    title: "Technical Events",
    imageURL: LottieAnimation(technical),
  },
  {
    title: "Non Technical Events",
    imageURL: LottieAnimation(nonTechnical),
  },
  {
    title: "Closing Ceremony",
    imageURL: LottieAnimation(ceremony),
  },
];

export default eventData;
export { about1, about2, about3, about4 };
