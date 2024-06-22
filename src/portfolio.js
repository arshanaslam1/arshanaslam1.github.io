/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Arshan's Portfolio",
  description:
    "Experienced Software Engineer proficient in Python, Django, ReactJS, and Next.js, with expertise in web scraping. Dedicated to developing robust web applications, I specialize in integrating cutting-edge technologies to innovate and optimize efficiency.",
  og: {
    title: "Arshan Aslam Portfolio",
    type: "website",
    url: "http://arshanaslam.me/",
  },
};

//Home Page
const greeting = {
  title: "Arshan Aslam",
  logo_name: "ArshanAslam",
  nickname: "arshanaslam1",
  subTitle:
    "Experienced Software Engineer proficient in Python, Django, ReactJS, and Next.js, with expertise in web scraping. Dedicated to developing robust web applications, I specialize in integrating cutting-edge technologies to innovate and optimize efficiency.",
  resumeLink: "http://resume.arshanaslam.me",
  portfolio_repository: "https://github.com/arshanaslam1",
  githubProfile: "https://github.com/arshanaslam1",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/arshanaslam1",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/arshanaslam1/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@arshanaslam1",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:arshan.aslam94@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/arshanaslam1",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/arshanaslam1/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/arshanaslam1/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React, Next.js, Redux, and Material UI with JavaScript and TypeScript",
        "⚡ Developing backend APIs using Python, Django, Flask, and Django Rest Framework (DRF) with JWT authentication",
        "⚡ Implementing real-time features and task scheduling with Python, Django, Celery, and Redis",
        "⚡ Managing databases like PostgreSQL, MySQL, and SQL Server for robust data storage and retrieval",
      ],
      softwareSkills: [
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
          skillName: "TypeScript",
          fontAwesomeClassname: "devicon:typescript",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJs",
          fontAwesomeClassname: "devicon:nextjs-wordmark",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "devicon:python-wordmark",
          style: {
            color: "#f3ad00",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "skill-icons:django",
          style: {
            color: "#0c3502",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos:flask",
          style: {
            color: "#272525",
          },
        },
        {
          skillName: "Celery",
          fontAwesomeClassname: "simple-icons:celery",
          style: {
            color: "#272525",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "devicon:redis-wordmark",
          style: {
            color: "#ec0c0c",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "devicon:postgresql-wordmark",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#00758f",
          },
        },
        {
          skillName: "SQLServer",
          fontAwesomeClassname: "devicon:microsoftsqlserver-wordmark",
          style: {
            color: "#231f1f",
          },
        },
      ],
    },
    {
      title: "Web Scraping",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Expertise in advanced web scraping techniques using Python and sophisticated libraries such as BeautifulSoup, Scrapy, and Selenium.",
        "⚡ Proficient in handling JavaScript-rendered content and dynamic elements with Selenium and headless browsers like Puppeteer.",
        "⚡ Implementing strategies for effective web scraping, including the use of proxies and rotating user agents to circumvent anti-scraping measures.",
        "⚡ Extracting, processing, and storing scraped data efficiently in databases like PostgreSQL, MySQL, and MongoDB.",
        "⚡ Orchestrating and managing complex web scraping workflows using Celery and Redis for distributed task execution and monitoring.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Scrapy",
          fontAwesomeClassname: "simple-icons:scrapy",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          skillName: "Selenium",
          fontAwesomeClassname: "logos:selenium",
          style: {
            backgroundColor: "transparent",
            color: "#55e41b",
          },
        },
        {
          skillName: "Puppeteer",
          fontAwesomeClassname: "devicon:puppeteer",
          style: {
            backgroundColor: "transparent",
            color: "#55e41b",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms, including AWS, Azure, GCP, Heroku, and DigitalOcean.",
        "⚡ Hosting and maintaining websites on virtual machine instances, integrating databases like PostgreSQL, MySQL, and SQL Server.",
        "⚡ Deploying web applications using Docker and setting up CI/CD pipelines for seamless integration and deployment.",
        "⚡ Utilizing cloud storage solutions such as AWS S3, Azure Blob Storage, and Google Cloud Storage for efficient data management and retrieval.",
        "⚡ Configuring and managing cloud databases with Amazon RDS, Azure Database for PostgreSQL, and Google Cloud SQL",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "DigitalOcean",
          fontAwesomeClassname: "devicon:digitalocean-wordmark",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
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
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#0c4f9c",
      },
      profileLink: "https://www.coursera.org/learner/arshanaslam1",
    },
    {
      siteName: "DataCamp",
      iconifyClassname: "simple-icons:datacamp",
      style: {
        color: "#55e41b",
      },
      profileLink: "https://www.datacamp.com/portfolio/arshanaslam1",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/arshanaslam1",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/arshanaslam1/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/arshanaslam1",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Virtual University Of Pakistan",
      subtitle: "BS in Computer Science",
      logo_path: "vu.png",
      alt_name: "Virtual University",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied core software engineering subjects such as Data Structures, Algorithms, Database Management Systems (DBMS), Operating Systems (OS), Computer Architecture (CA), and Artificial Intelligence (AI).",
        "⚡ Additionally, I have completed courses in Deep Learning, Data Science, Cloud Computing, and Full Stack Development to expand my knowledge in modern technologies.",
        "⚡ I have received recognition from the respected director for consistently achieving top performance in academics.",
      ],
      website_link: "https://vu.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python Developer",
      subtitle: "- DataCamp",
      logo_path: "python-developer.png",
      certificate_link:
        "https://www.datacamp.com/completed/statement-of-accomplishment/track/e8df1095119a946d90845cb16ff0345cc6e72836",
      alt_name: "DataCamp",
      color_code: "#2c9105",
    },
    {
      title: "Python for Everybody",
      subtitle: "- University of Michigan",
      logo_path: "python-for-everybody.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/MMLHNNYNB2KR",
      alt_name: "Python for Everybody",
      color_code: "#00000099",
    },
    {
      title: "Python",
      subtitle: "- HackerRank",
      logo_path: "python-hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/dd7dec4d8432",
      alt_name: "Python",
      color_code: "#0C9D5899",
    },
    {
      title: "Python",
      subtitle: "- Kaggle",
      logo_path: "python-kaggle.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/arshanaslam1/python",
      alt_name: "Kaggle",
      color_code: "#1F70C199",
    },
    {
      title: "Django for Everybody",
      subtitle: "- University of Michigan",
      logo_path: "django-for-everbody.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/AJ9QGEMCA2YQ",
      alt_name: "Django for Everybody",
      color_code: "#D83B0199",
    },
    {
      title: "Advance Your Skills as a Django Developer",
      subtitle: "- Linkedin",
      logo_path: "Advance-Your-Skills-as-a-Django-Developer.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/e1fc65fbc57589cbd0a463fb772af15e38ad218785f72dd365284d644ab0f29b",
      alt_name: "Linkedin",
      color_code: "#00000099",
    },
    {
      title: "Modern Big Data Analysis with SQL",
      subtitle: "- Cloudera",
      logo_path: "Modern-Big-Data-Analysis.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/RHNTUQ4HBZGR",
      alt_name: "Cloudera",
      color_code: "#1F70C199",
    },
    {
      title: "DevOps, Cloud, and Agile Foundations",
      subtitle: "- IBM",
      logo_path: "DevOps-Cloud-and-Agile.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/AFMCP33SPGQ2",
      alt_name: "IBM",
      color_code: "#0C9D5899",
    },
    {
      title: "Explore React.js Development",
      subtitle: "- Linkedin",
      logo_path: "Explore-Reactjs-Development.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/2857ba1aca9b6526f12126113c2da0d38e05b9618ee09c6cdc0033c888766981",
      alt_name: "Linkedin",
      color_code: "#00000099",
    },
    {
      title: "Improve Your React Skills",
      subtitle: "- Linkedin",
      logo_path: "Improve-Your-React-Skills.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/531a4b4e28b6e5749f2491a8c5ae83f8a24cd9d79afffcbe8545e726c3bd6b2d",
      alt_name: "Linkedin",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I am a versatile Software Engineer specializing in Full Stack Web Development, with proficiency in Python, Django, React.js, and Next.js. I've contributed to startups and established companies, fulfilling roles as a Developer. Alongside my technical expertise, I actively organize events and represent open-source communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "DigiPops.TV",
          company_url: "https://digipops.tv/",
          logo_path: "digipops.png",
          duration: "Feb 2023 - Present",
          location: "New York, United States",
          description:
            "Accomplished Software Engineer adept in Python, Django, and ReactJS, with extensive experience in crafting and maintaining web applications. Proficient in utilizing a diverse toolkit including Celery, Djangoq, Redex, and Reabitq. Skilled in designing and managing CI/CD pipelines using GitHub CI and other tools, ensuring smooth integration and deployment. Demonstrated expertise in writing robust unit and integration tests using unittest and Django-unittest. Passionate about fostering collaborative environments, contributing to feature enhancements, and staying updated on the latest trends in DevOps, cloud computing.",
          color: "#000000",
        },
        {
          title: "Django Developer",
          company: "Ignicube Private Limited",
          company_url: "https://www.ignicube.com/",
          logo_path: "ignicube.png",
          duration: "June 2022 - Aug 2023",
          location: "Lahore, Pakistan",
          description:
            "Experienced Software Engineer proficient in Python, Django, and ReactJS, with a strong track record in developing innovative web solutions. Skilled in leveraging Celery, Djangoq, Redex, and Reabitq for optimal performance. Expertise lies in implementing and managing CI/CD workflows using GitHub CI and other tools. Demonstrated proficiency in crafting robust unit and integration tests using Django-unittest. Committed to fostering collaborative environments, contributing to feature enhancements, and staying updated on the latest trends in DevOps, cloud computing, and WebSockets.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "arshanaslam.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Python, Django, Flask, React, Next.js, TypeScript, JavaScript, and web scraping, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blog.arshanaslam.me/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lahore, Pakistan",
    locality: "Lahore",
    country: "Pakistan",
    region: "Punjab",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
