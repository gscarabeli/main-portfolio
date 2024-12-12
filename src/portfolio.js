/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Gustavo Scarabeli's Portfolio",
  description:
    "An enthusiastic developer focused on creating full-stack web systems and mobile applications, committed to delivering innovative, scalable, and impactful solutions.",
  og: {
    title: "Gustavo Correia Scarabeli Portfolio",
    type: "website",
    url: "http://gustavoscarabeli.com/",
  },
};

//Home Page
const greeting = {
  title: "Gustavo Correia Scarabeli",
  logo_name: "Gustavo C. Scarabeli",
  nickname: "gscarabeli",
  subTitle:
    "An enthusiastic developer focused on creating full-stack web systems and mobile applications, committed to delivering innovative, scalable, and impactful solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1x6nMNztSw78hg_4pwNXX4Qc5S-N4MUo2/view?usp=drive_link",
  portfolio_repository: "https://github.com/gscarabeli/masterPortfolio",
  githubProfile: "https://github.com/gscarabeli?tab=repositories",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/gscarabeli",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gustavo-scarabeli/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_scarabeli/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:gustavocorreiascarabeli@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites end to end using C#, Java or Php",
        "⚡ Integrating and managing databases with SQLServer, MySQL or PostgreSQL",
        "⚡ Developing scalable RESTful APIs",
      ],
      softwareSkills: [
        {
          skillName: "C#",
          fontAwesomeClassname: "devicon-plain:csharp",
          style: {
            color: "#512bd4",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#4F5B93",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "SQLServer",
          fontAwesomeClassname: "devicon:microsoftsqlserver-wordmark",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#699eca",
          },
        },
      ],
    },
    {
      title: "Mobile Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience working on Flutter and React-Native mobile apps",
        "⚡ Building RESTful APIs in Node with database integration",
        "⚡ Deploying on ios and android stores",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "React-Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#58d4dc",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178c6",
          },
        },
        {
          skillName: "NodeJs",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#417e38",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Apple",
          fontAwesomeClassname: "simple-icons:apple",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "LeetCode",
//       iconifyClassname: "simple-icons:leetcode",
//       style: {
//         color: "#F79F1B",
//       },
//       profileLink: "https://leetcode.com/layman_brother/",
//     },
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "https://www.hackerrank.com/layman_brother",
//     },
//     {
//       siteName: "Codechef",
//       iconifyClassname: "simple-icons:codechef",
//       style: {
//         color: "#5B4638",
//       },
//       profileLink: "https://www.codechef.com/users/ashutosh_1919",
//     },
//     {
//       siteName: "Codeforces",
//       iconifyClassname: "simple-icons:codeforces",
//       style: {
//         color: "#1F8ACB",
//       },
//       profileLink: "http://codeforces.com/profile/layman_brother",
//     },
//     {
//       siteName: "Hackerearth",
//       iconifyClassname: "simple-icons:hackerearth",
//       style: {
//         color: "#323754",
//       },
//       profileLink: "https://www.hackerearth.com/@ashutosh391",
//     },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "https://www.kaggle.com/laymanbrother",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "Escola Técnica Estadual Jorge Street",
      subtitle: "Mechatronics Technician",
      logo_path: "etec_logo.png",
      alt_name: "ETEC Jorge Street",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ Full-time integrated high school and technical Mechatronics course, including mandatory MEC subjects such as Mathematics, History, and Portuguese, as well as technical subjects like Industrial Automation, General Mechanics, Computing, and Electronics.",
        "⚡ Experience in knowledge competitions and project fairs.",
      ],
      website_link: "https://www.jorgestreet.com.br/",
    },
    {
      title: "Faculdade Engenheiro Salvador Arena",
      subtitle: "B.S. in Computer Engineering",
      logo_path: "fesa_logo.png",
      alt_name: "FESA",
      duration: "2021 - PRESENT",
      descriptions: [
        "⚡ Participation in extracurricular activities such as soccer and swimming.",
        "⚡ Experience in Scientific Research Initiatives.",
        "⚡ Coursework includes general engineering subjects like Calculus, Mechanics, and Transport Phenomena, as well as computer-focused subjects such as Programming Languages, Data Structures, and Embedded Systems.",
      ],
      website_link: "https://faculdadesalvadorarena.org.br/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title:
        "C# Collections: Lists, Arrays, Linked Lists, Dictionaries and Sets",
      subtitle: "Alura",
      logo_path: "alura_logo.png",
      certificate_link: "./certificates/CSharp_Collections_Part_1.pdf",
      alt_name: "Alura",
      color_code: "#041435",
    },
    {
      title: "C# Advanced Collections and LINQ",
      subtitle: "Alura",
      logo_path: "alura_logo.png",
      certificate_link: "./certificates/CSharp_Collections_Part_2.pdf",
      alt_name: "Alura",
      color_code: "#041435",
    },
    {
      title: "Challenge Day 2022",
      subtitle: "FESA",
      logo_path: "fesa_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1LKTkP4fb67xyDnw-NAEpwXiLVtUwjt-9/view?usp=drive_link",
      alt_name: "FESA",
      color_code: "#FFFFFF",
    },
    {
      title: "High-Advanced (Level 14) - English",
      subtitle: "ILAC Certificate",
      logo_path: "ilac_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ECqEz8MjC67GXX5VY8Vt0pro-UXDap6u/view?usp=drive_link",
      alt_name: "ILAC",
      color_code: "#FFFFFF",
    },
    {
      title: "Wise Up Teens English Program",
      subtitle: "WiseUp Certificate",
      logo_path: "wiseup_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1eomb2I9NOfING0enbcFFFuXkr5QGHekj/view?usp=drive_link",
      alt_name: "WiseUp",
      color_code: "#FFFFFF",
    },
    {
      title: "Scientific Initiation Program",
      subtitle: "PIC Certificate",
      logo_path: "fesa_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1O1pR1tMiYk5mA55gi4jsJsKmK57TGshl/view?usp=drive_link",
      alt_name: "FESA PIC",
      color_code: "#FFFFFF",
    },
    {
      title: "Scientific Initiation Presentation",
      subtitle: "Scientific Initiation National Program - (BR)",
      logo_path: "conic_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1DnQ7KKtefL2nLPvenTS2KT5QTPZ1a0l_/view?usp=drive_link",
      alt_name: "CONIC",
      color_code: "#FFFFFF",
    },
    {
      title: "Startup in School",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1tj4W1WdPfQ0rGcZUDBj1ItzW8t0dii7W/view?usp=drive_link",
      alt_name: "Google",
      color_code: "#FFFFFF",
    },
    {
      title: "Leadership Course",
      subtitle: "SEBRAE",
      logo_path: "sebrae_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1jubQ5rYbMMIu99N6v6pSlgAOgLG6YFK2/view?usp=drive_link",
      alt_name: "SEBRAE",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have a diverse professional background, including work as a Full-Stack Developer, customer service roles, and community volunteering. My projects often focus on improving systems, monitoring databases, and ensuring operational efficiency. I enjoy contributing to innovative solutions and making a difference through my skills and dedication.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Database Trainee",
          company: "BR2B Consulting",
          company_url: "https://www.br2bconsulting.com.br/",
          logo_path: "br2b_logo.jpg",
          duration: "Jul 2021 - Nov 2021",
          location: "São Paulo, Brazil",
          description:
            "I was responsible for monitoring cloud backups, analyzing errors and bugs in sensitive files, and preparing comprehensive monthly performance reports to ensure efficiency and reliability.",
          color: "#515e65",
        },
        {
          title: "Attendant",
          company: "OAKBERRY",
          company_url: "https://www.oakberry.com/",
          logo_path: "oakberry_logo.png",
          duration: "Feb 2021 - Jul 2021",
          location: "São Caetano do Sul, Brazil",
          description:
            "As an attendant, I handled customer service, order delivery, stock and cash control, and team coordination. I ensured cleanliness through general and deep cleaning and prepared monthly performance reports to support improvements.",
          color: "#7d5393",
        },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Computer Engineering Intern",
          company: "Termomecanica",
          company_url: "https://www.termomecanica.com.br/EN/",
          logo_path: "termomecanica_logo.png",
          duration: "Jan 2023 - Jul 2024",
          location: "São Bernado do Campo, Brazil",
          description:
            "Through support tickets submitted via the HelpDesk platform, I address system errors within the company's applications and develop enhancements and new projects. I work as a Full-Stack Developer using Visual Studio, complemented by SQL Server for database monitoring and management.",
          color: "#000000",
        },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Community Vonlunteer",
          company: "Nova Jerusalém Baptist Church",
          company_url: "https://ibnj.com.br/",
          logo_path: "ibnj_logo.png",
          duration: "Nov 2018 - Mar 2024",
          location: "São Paulo, Brazil",
          description:
            "I volunteered in various ministries at my church, including media, sound, children's, cleaning, reception, parking, and more. I always strive to serve God with all my heart and make a difference by giving my best.",
          color: "#951e19",
        },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My main projects center on web-based systems and mobile apps, leveraging a diverse array of modern technology tools. However, I'm always eager to learn, explore, and experiment with new innovations!",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description: "Some of my published Articles, Blogs and Research.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "gustavo_picture.png",
    description:
      "I am available on those social medias below. You can message or email me, I will reply as soon as possible.",
    bible:
      '"Seek the Kingdom of God above all else, and live righteously, and he will give you everything you need."\nMatthew 6.33 - NLT',
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  // addressSection: {
  //   title: "Address",
  //   subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
  //   locality: "San Jose",
  //   country: "USA",
  //   region: "California",
  //   postalCode: "95129",
  //   streetAddress: "Saratoga Avenue",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  // },
  // phoneSection: {
  //   title: "asdasdas",
  //   subtitle: "aasdasd",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
