// data/portfolioData.ts
export const staticData = {
    main: {
      name: "Adarsh Pandey",
      titles: ["Software Developer", "Web Developer", "Full Stack Developer"],
      heroImage: "/images/hero-image.jpg",
      shortDesc: "Building digital experiences with modern technologies",
      techStackImages: [
        // "/images/tech/react.png",
        // "/images/tech/nextjs.png",
        // "/images/tech/typescript.png",
        // "/images/tech/tailwind.png",
      ],
    },
    about: {
      aboutImage: "/images/about-image.jpg",
      aboutImageCaption: "Working on projects",
      title: "About Me",
      about: "I'm a dedicated software developer with expertise in building modern web applications, adept at simplifying complex problems into intuitive, user-friendly solutions.",
      resumeUrl: "/Resume.pdf",
      callUrl: "https://calendly.com/your-calendar-link"  // or any scheduling link
    },
    skills: [
      {
        name: "React",
        image: "/react.png",
        category: "Frontend"
      },
      {
        name: "Next.js",
        image: "/nextjs.svg",
        category: "Frontend"
      },
      {
        name: "JavaScript",
        image: "/javascript--v1.webp",
        category: "Frontend"
      },
      {
        name: "TypeScript",
        image: "/typescript.webp",
        category: "Frontend"
      },
      {
        name: "Tailwind",
        image: "/tailwindcss.webp",
        category: "Frontend"
      },
      {
        name: "HTML5",
        image: "/html.webp",
        category: "Frontend"
      },
      {
        name: "Bootstrap",
        image: "/bootstrap.webp",
        category: "Frontend"
      },
      {
        name: "CSS3",
        image: "/css3.webp",
        category: "Frontend"
      },
      {
        name: "Node.js",
        image: "/node-js.png",
        category: "Backend"
      },
      {
        name: "ExpressJS",
        image: "/express-js.webp",
        category: "Backend"
      },
      {
        name: "MongoDB",
        image: "/mongodb.webp",
        category: "Backend"
      },
      {
        name: "MySQL",
        image: "/mysql-logo.webp",
        category: "Backend"
      },
      {
        name: "PostgreSQL",
        image: "/PostgreSQL.png",
        category: "Backend"
      },
      // Add more skills as needed
    ],
    projects: [
      {
        name: "E-commerce Platform",
        image: "/images/projects/ecommerce.jpg",
        techstack: "React, Node.js, MongoDB",
        category: "Full Stack",
        links: {
          visit: "https://project1.com",
          code: "https://github.com/yourusername/project1",
          video: "https://youtube.com/your-project-demo"
        }
      },
      {
        name: "Task Management App",
        image: "/images/projects/task-app.jpg",
        techstack: "Next.js, TypeScript, Prisma",
        category: "Full Stack",
        links: {
          visit: "https://project2.com",
          code: "https://github.com/yourusername/project2",
          video: "https://youtube.com/your-project-demo"
        }
      }
    ],
    experiences: [
      {
        company: "CodeQuotient",
        position: "Internship",
        startDate: "Feb 2023",
        endDate: "April 2023",
        desc: [
          "Crafted dynamic web applications using the MERN stack under expert mentorship",
          "Built RESTful APIs, interactive React.js interfaces, and optimized PostgreSQL databases",
          "Enhanced application quality by resolving critical bugs for seamless performance."
        ]
      },
      {
        company: "JIO Platforms Limited",
        position: "Full Stack Developer",
        startDate: "2023",
        endDate: "Present",
        desc: [
          "Engineered automated de-clustering solutions with Node.js, boosting customer connection rates by 30%",
          "Designed robust backend systems with ReactJS and APIs, reducing inflight cancellations from 8% to 2%",
          "Contributed to 5G feasibility by optimizing database management and enhancing POS system performance."
        ]
      }
    ],
    educations: [
      {
        institute: "United College Of Engineering And Management",
        degree: "Bachelor of Technology",
        startDate: "2019",
        endDate: "2023"
      },
     
    ],
    socials: [
      {
        name: "GitHub",
        icon: "FaGithub",  // assuming you're using react-icons
        link: "https://github.com/AdarshPandey011"
      },
      {
        name: "LinkedIn",
        icon: "FaLinkedin",
        link: "linkedin.com/in/AdarshPandey11"
      },
      {
        name: "Twitter",
        icon: "FaTwitter",
        link: "https://twitter.com/Adarsh100x"
      }
    ]
  };