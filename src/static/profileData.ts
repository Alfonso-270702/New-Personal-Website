import AlfonsoImg from "../assets/alfonso.png";
import GithubImg from "../assets/github.png";
import LinkedinImg from "../assets/linkedin-nobg-png.webp";
import EmailImg from "../assets/email.png";

export const profileData = {
  name: "ALFONSO SIRAIT",
  desc: "Frontend Developer with 4 years of experience in creating intuitive, responsive, and high performance web solutions. Skilled in user experience design, CMS enhancement, and cross browser compatibility. Proven track record of improving operational efficiency by 20% and delivering projects within 6 months.",
  image: AlfonsoImg,
};

export const contactInfo = ["email", "github", "linkedin"];

export const contactData = {
  email: {
    text: "alfonsohaseasirait@gmail.com",
    containerClass: "flex items-center gap-[10px] mt-[30px]",
    icon: EmailImg,
    imageStyle: "w-[60px] h-[60px] object-cover",
  },
  github: {
    text: "github.com/Alfonso-270702",
    containerClass: "flex items-center gap-[10px] mt-[15px]",
    icon: GithubImg,
    imageStyle: "w-[60px] h-[60px] object-cover",
  },
  linkedin: {
    text: "linkedin.com/in/alfonso-sirait",
    containerClass: "flex items-center gap-[10px] mt-[15px]",
    icon: LinkedinImg,
    imageStyle: "w-[60px] h-[60px] object-cover",
  },
};
