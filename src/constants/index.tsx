import project1 from "../assets/projects/CookMeLogo.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/THakarni.jpg";


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
    title: "Web Application",
    image: project1,
    link: "https://myapp-cookme.onrender.com/",
    description:
      "A fully functional web application that generates recipes based \n" +
        "on user-provided ingredients",
    technologies: ["HTML", "CSS", "React", "TypeScript" ,"Java","Spring Boot", "MongoDB"],
  },
  {
    title: " Concept UI UX mobile app design.",
    image: project1,
    link: "https://www.figma.com/proto/BkBoPQyD7z7qfLDybfsYte/CookMeApp?node-id=7-888&p=f&t=NjsLpKuXAPYMmhUE-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    description:
        "Design of the prototype for the CookMe recipe app  \n" +
        "with a focus on creating an intuitive and user-friendly interface.",
    technologies: ["Figma"],
  },
  {
    title: "Task Management App",
    image: project2,
    link: "https://myapp-cookme.onrender.com/",
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Thakarni",
    image: project3,
    link: "https://drive.google.com/file/d/1ececiPudTXi_WSx6RhDW5ol1ntdv6pym/view",
    description: "A planner designed to help people become more organized and stay on top of their tasks and goals.",
    technologies: ["Canva", "Facebook Ads", "Instagram Ads", "Mailchimp", "Video Editing"],
  }
];

export const CONTACT = {
  address: "Hamburg, Germany",
  phoneNo: "+4915752380073",
  email: "malekchenennaoui@gmail.com",
};
