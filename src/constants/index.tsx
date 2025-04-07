import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = ` Motivated Junior Full Stack Developer with a strong foundation in Java
 and web technologies, recently transitioned from a marketing background after completing an intensive Java Bootcamp at Neuefische. 
 Skilled in building scalable applications using Java, Spring Boot, React, and MongoDB.
  Passionate about turning ideas into real-world solutions through code, and driven by a constant desire to learn, grow,
   and dive deeper into modern technologies. Eager to contribute to meaningful projects while expanding my skills
    in a collaborative, agile environment.
`;

export const ABOUT_TEXT = `I am a motivated and curious Junior Full Stack Developer with a background in marketing and a passion 
for turning ideas into reality through technology. My journey into web development began while working closely
 with developer teams in my previous roles—seeing how they transformed ideas into functional digital products sparked my interest
  and gave me the courage to change careers.

After completing a Java Bootcamp at Neuefische, I gained hands-on experience in building full-stack applications
 using Java, Spring Boot, React, and MongoDB, alongside tools like Node.js, MySQL, and PostgreSQL. 
 I’m constantly inspired by innovative ideas, and I love helping others bring their visions to life—combining my experience in branding and marketing strategy with my growing technical skills to create meaningful digital solutions.

I thrive in collaborative environments, enjoy learning new technologies,
 and am driven by the desire to build impactful applications that make a difference.`;
export const EXPERIENCES = [
  {
    year: "2024",
    role: "Student Java Bootcamp",
    company: "NeueFishe",
    description: `Completed comprehensive training in both backend and frontend development, focusing on Java, Spring (Spring Web, Spring Data, Spring Security), Docker, and MongoDB. Gained practical experience in JavaScript, React, HTML, and CSS, 
    applying a mobile-first approach and working in agile teams using Scrum, Git, and pair programming.`,
    technologies: ["Java","TypeScript","JavaScript", "React.js", "Next.js", "mongoDB","Docker","Git", "GitHub","Postman"],
  },
  {
    year: "2020 - 2021",
    role: "Junior Marketing Manager",
    company: "Wall Street English",
    description: `I have hands-on experience in web content management and technical integration using WordPress, 
    as well as the development and implementation of data-driven marketing strategies that increased engagement by 35%.
     I successfully managed events, optimized budgets, and collaborated with teams and agencies to align marketing 
     initiatives with stakeholder goals, 
    boosting lead generation and brand awareness..`,
    technologies: ["Html", "CSS", "Wordpress", "Elementor","Hubspot","Google_Analytic","FacebookAds","Canva"],
  },
  {
    year: "2019 - 2020",
    role: "Junior Web Marketer",
    company: "Web Media International",
    description: `I was responsible for the technical integration and maintenance of website content
     to enhance user experience, and I developed and implemented successful SEO strategies that led to top Google rankings.
      I collaborated with developers and designers to optimize web structures, 
      led a team in strategic content optimization, and executed social media and email campaigns to increase conversion rates.`,
    technologies: ["Wordpress", "Html", "Css", "Elementor","Google Search Console","SEMrush",
      "Google Ads","Meta Ads Manager","Mailchimp","GetResponse","Canva","Mural"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Hamburg, Germany",
  phoneNo: "+4915752380073",
  email: "malekchenennaoui@gmail.com",
};
