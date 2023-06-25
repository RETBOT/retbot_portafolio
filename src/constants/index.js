import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  scss,
  nodejs,
  mongodb,
  git,

  reactjs2,
  api,
  csharp,
  expressjs,
  github2,
  python,

  compiladorCsharp,
  inno_eyes,
  pokemon_api,
  pagina_web_retbot,
  curso_django,
  escuela_aspnet,
  chatdynamix,
  retbot_portafolio,

} from "../assets";

export const navLinksEn = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const navLinksEs = [
  {
    id: "about",
    title: "Acerca de",
  },
  {
    id: "work",
    title: "Trabajo",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "C# ASP.NET Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: reactjs2,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Scss CSS",
    icon: scss,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express js",
    icon: expressjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github2,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiencesEs = [
  {
    title: "React.js and C# Asp.net Developer",
    company_name: "API Inmobiliaría & Asesores S.A. de C.V.",
    icon: api,
    iconBg: "#FFFFFF",
    date: "Ene 2023 - Presente",
    points: [
      "Desarrollando aplicaciones web utilizando React.js y tecnologías relacionadas para crear productos de alta calidad.",
      "Aplicando mi experiencia en el desarrollo de scrapers para extraer datos de diversas fuentes en línea y automatizar la recopilación de información.",
      "Colaborando con equipos interfuncionales para asegurar la entrega de soluciones eficientes.",
      "Implementando diseño receptivo y garantizando la compatibilidad entre navegadores.",
      "Participando en revisiones de código y proporcionando comentarios constructivos."
    ],
  }
];

const experiencesEn = [
  {
    title: "React.js and C# Asp.net Developer",
    company_name: "API Inmobiliaría & Asesores S.A. de C.V.",
    icon: api,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Present",
    points: [
      "Developing web applications using React.js and related technologies to create high-quality products.",
      "Applying my experience in scraper development to extract data from various online sources and automate information gathering.",
      "Collaborating with cross-functional teams to ensure efficient solution delivery.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback."
    ],
  }
];

const projectsEn = [
  {
    name: "C# Compiler",
    description:
      "Final project for Automatas 2 course.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
    ],
    image: compiladorCsharp,
    source_code_link: "https://github.com/RETBOT/Compilador",
  },
  {
    name: "Inno_Eyes",
    description:
      "Smart cane to assist visually impaired individuals.",
    tags: [
      {
        name: "C",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "blue-text-gradient",
      },
    ],
    image: inno_eyes,
    source_code_link: "https://github.com/RETBOT/Inno_Eyes",
  },
  {
    name: "RETBOT Website",
    description:
      "My first project developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
    tags: [
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: pagina_web_retbot,
    source_code_link: "https://github.com/RETBOT/Web-Stack-MERN",
  },
  {
    name: "Pokedex API",
    description:
      "API developed from scratch for a Pokédex.",
    tags: [
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      }
    ],
    image: pokemon_api,
    source_code_link: "https://github.com/RETBOT/Pokedex_Api",
  },
  {
    name: "ChatDynamix",
    description:
      "A chat project using OpenAI and GPT4All technology.",
    tags: [
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: chatdynamix,
    source_code_link: "https://github.com/RETBOT/ChatDynamix",
  },
  {
    name: "Roberto's Portfolio",
    description: "Portfolio website using Three.js and React.js. Added MongoDB for website comments.",
    tags: [
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: retbot_portafolio,
    source_code_link: "https://github.com/RETBOT/retbot_portafolio",
  },
  {
    name: "Practical Django Course",
    description:
      "Practical Django course from GNU/Linux operating systems.",
    tags: [
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "GNU/Linux",
        color: "blue-text-gradient",
      },
    ],
    image: curso_django,
    source_code_link: "https://github.com/RETBOT/Django-X-Linux",
  },
  {
    name: "ASP.NET Core MVC C♯ Course",
    description:
      "Practical course on ASP.NET Core MVC with C♯.",
    tags: [
      {
        name: "ASP.NET Core MVC",
        color: "green-text-gradient",
      },
      {
        name: "C♯",
        color: "blue-text-gradient",
      },
    ],
    image: escuela_aspnet,
    source_code_link: "https://github.com/RETBOT/Escuela",
  },
];

const projectsEs = [
  {
    name: "Compilador en C#",
    description:
      "Proyecto final para la materia de Automatas 2.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
    ],
    image: compiladorCsharp,
    source_code_link: "https://github.com/RETBOT/Compilador",
  },
  {
    name: "Inno_Eyes",
    description:
      "Bastón inteligente para ayudar a personas con discapacidad visual.",
    tags: [
      {
        name: "C",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "blue-text-gradient",
      },
    ],
    image: inno_eyes,
    source_code_link: "https://github.com/RETBOT/Inno_Eyes",
  },
  {
    name: "Pagina Web RETBOT",
    description:
      "Mi primer proyecto desarrollado con el stack MERN (MongoDB, Express.js, React.js y Node.js).",
    tags: [
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: pagina_web_retbot,
    source_code_link: "https://github.com/RETBOT/Web-Stack-MERN",
  },
  {
    name: "Pokedex API",
    description:
      "API desarrollada desde cero para una Pokédex.",
    tags: [
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      }
    ],
    image: pokemon_api,
    source_code_link: "https://github.com/RETBOT/Pokedex_Api",
  },
  {
    name: "Portafolio de Roberto",
    description: "Sitio web de portafolio con Three.js y React.js. Se agregó MongoDB para los comentarios del sitio web.",
    tags: [
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: retbot_portafolio,
    source_code_link: "https://github.com/RETBOT/retbot_portafolio",
  },
  {
    name: "ChatDynamix",
    description:
      "Es un proyecto de desarrollo de un chat utilizando la tecnología de OpenAI y GPT4All.",
    tags: [
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: chatdynamix,
    source_code_link: "https://github.com/RETBOT/ChatDynamix",
  },
  {
    name: "Curso Practico de Django",
    description:
      "Curso práctico de Django desde sistemas operativos GNU/Linux.",
    tags: [
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "GNU/Linux",
        color: "blue-text-gradient",
      },
    ],
    image: curso_django,
    source_code_link: "https://github.com/RETBOT/Django-X-Linux",
  },
  {
    name: "Curso ASP.NET Core MVC C♯ ",
    description:
      "Curso práctico de ASP.NET Core MVC con C♯.",
    tags: [
      {
        name: "ASP.NET Core MVC",
        color: "green-text-gradient",
      },
      {
        name: "C♯",
        color: "blue-text-gradient",
      },
    ],
    image: escuela_aspnet,
    source_code_link: "https://github.com/RETBOT/Escuela",
  },
];


export { services, technologies, experiencesEs, experiencesEn, projectsEn, projectsEs };
