import {
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  api,
  csharp,
  github,
  github2,
  compiladorCsharp,
  inno_eyes,
  pokemon_api,
  pagina_web_retbot,
  web_cv_roberto,
  curso_django,
  escuela_aspnet,
  chatdynamix,
  retbot_portafolio,

  fullstack,
  icc, 
  vb6, 
  devexpress, 
  flutter, 
  jquery, 
  movildev,
  ciudadlaencantada,
  propiedadesmexico,
  operacionescrece,

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
    title: "FullStack Developer",
    icon: fullstack,
  },
  {
    title: "Mobile Developer",
    icon: movildev,
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
    name: "DevExpress",
    icon: devexpress,
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
    name: "JQuery",
    icon: jquery,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "github",
    icon: github2,
  },
  {
    name: "vb6",
    icon: vb6,
  },
];

const experiencesEs = [
  {
    title: "Desarrollador web y móvil jr.",
    company_name: "Ingeniería Computacional Creativa S.A de C.V.",
    icon: icc,
    iconBg: "#FFFFFF",
    date: "Oct 2023 - Presente",
    points: [
      "Desarrollo de aplicaciones móviles con Flutter para plataformas Android e iOS.",
      "Actualización de sitios web utilizando jQuery, HTML, CSS y DevExpress.",
      "Modificación y soporte de programas existentes en Visual Basic 6.",
      "Gestión de APIs desarrolladas en Visual Basic 6 y SQL Server para aplicaciones móviles y web.",
    ]
  },
  {
    title: "React.js y C# Asp.net Developer",
    company_name: "API Inmobiliaria & Asesores S.A. de C.V.",
    icon: api,
    iconBg: "#FFFFFF",
    date: "Ene 2023 - Oct 2023",
    points: [
      "Desarrollador de software en C# utilizando el patrón de diseño MVC y el framework .NET Core.",
      "Amplia experiencia en el desarrollo de aplicaciones web y especializado en la creación de scrapers para extraer datos de diversas fuentes en línea y automatizar la recopilación de información.",
      "Utilización efectiva de tecnologías como HtmlAgilityPack, HTML, JavaScript y CSS para implementar soluciones de scraping y mejorar la eficiencia en la recopilación de datos.",
      "Colaborador destacado en equipos interfuncionales, asegurando la entrega de soluciones eficientes y de alta calidad.",
      "Participación activa en revisiones de código y proporcionando comentarios constructivos para mejorar la calidad del software.",
      "Experiencia en el desarrollo de aplicaciones web utilizando la pila MERN, incluyendo React.js, Express.js, Node.js y MongoDB.",
      "Participación activa en revisiones de código, brindando comentarios constructivos y mejorando la calidad del software."
    ]
  }
];

const experiencesEn = [
  {
    title:  "Jr. web and mobile developer",
    company_name: "Ingeniería Computacional Creativa S.A de C.V.",
    icon: icc,
    iconBg: "#FFFFFF",
    date: "Oct 2023 - Present",
    points: [
      "Developing mobile applications with Flutter for Android and iOS platforms.",
      "Updating websites using jQuery, HTML, CSS, and DevExpress.",
      "Modifying and providing support for existing programs in Visual Basic 6.",
      "Managing APIs developed in Visual Basic 6 and SQL Server for mobile and web applications.",
    ],
  },
  {
    title: "React.js and C# Asp.net Developer",
    company_name: "API Inmobiliaria & Asesores S.A. de C.V.",
    icon: api,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Oct 2023",
    points: [
      "Software developer in C#, utilizing the MVC design pattern and .NET Core framework.",
      "Extensive experience in web application development, specializing in creating scrapers to extract data from various online sources and automate information collection.",
      "Effective utilization of technologies like HtmlAgilityPack, HTML, JavaScript, and CSS to implement scraping solutions and enhance data collection efficiency.",
      "Outstanding collaborator in cross-functional teams, ensuring the delivery of efficient and high-quality solutions.",
      "Active participation in code reviews and providing constructive feedback to improve software quality.",
      "Experience in web application development using the MERN stack, including React.js, Express.js, Node.js, and MongoDB.",
      "Active participation in code reviews, offering constructive feedback and enhancing software quality."
    ],
  }
];

const projectsEn = [
  {
    name: "Crece Operations",
    description:
      "Mobile application created for the company 'Crece con Vales,' used for the financial management of coordinators.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
      {
        name: "VB6",
        color: "pink-text-gradient",
      },
    ],
    image: operacionescrece,
    icon: icc,
    source_code_link: "https://apps.apple.com/us/app/operaciones-crece/id6476694787",
  },
  {
    name: "Propiedades México",
    description:
      "During my employment at Api Inmobiliaria, I established the foundations of the Propiedades México website.",
    tags: [
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
    ],
    image: propiedadesmexico,
    icon: api,
    source_code_link: "https://www.propiedadesmexico.com/",
  },
  {
    name: "Ciudad La Encantada",
    description:
      "During my employment at Api Inmobiliaria, I was responsible for providing support, maintenance, and website improvements",
    tags: [
      {
        name: "React.js",
        color: "green-text-gradient",
      },
    ],
    image: ciudadlaencantada,
    icon: api,
    source_code_link: "https://ciudadlaencantada.com/",
  },
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
    icon: github, 
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
    icon: github, 
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
    icon: github, 
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
    icon: github, 
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
    icon: github, 
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
    icon: github, 
    source_code_link: "https://github.com/RETBOT/retbot_portafolio",
  },
  {
    name: "DevPlayCloud",
    description: "Create and test your web projects in a secure and scalable environment using your own Linux server on AWS. Harness the power and flexibility of the cloud to take your development to the next level.",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient"
      },
      {
        name: "Express.js",
        color: "blue-text-gradient"
      },
      {
        name: "React.js",
        color: "green-text-gradient"
      },
      {
        name: "Node.js",
        color: "pink-text-gradient"
      }
    ],
    image: "web_cv_roberto",
    icon: github, 
    source_code_link: "https://github.com/RETBOT/DevPlayCloud"
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
    icon: github, 
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
    icon: github, 
    source_code_link: "https://github.com/RETBOT/Escuela",
  },
];

const projectsEs = [
  {
    name: "Operaciones Crece",
    description:
      "Aplicación móvil creada para la empresa Crece con Vales, utilizada para la gestión financiera de los coordinadores.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
      {
        name: "VB6",
        color: "pink-text-gradient",
      },
    ],
    image: operacionescrece,
    icon: icc,
    source_code_link: "https://apps.apple.com/us/app/operaciones-crece/id6476694787",
  },
  {
    name: "Propiedades México",
    description:
      "Durante mi empleo en Api Inmobiliaria, establecí las bases de la página web de Propiedades México.",
    tags: [
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
    ],
    image: propiedadesmexico,
    icon: api,
    source_code_link: "https://www.propiedadesmexico.com/",
  },
  {
    name: "Ciudad La Encantada",
    description:
      "Durante mi empleo en la empresa Api Inmobiliaria, me encargué del soporte, mantenimiento y mejoras en la página.",
    tags: [
      {
        name: "React.js",
        color: "green-text-gradient",
      },
    ],
    image: ciudadlaencantada,
    icon: api,
    source_code_link: "https://ciudadlaencantada.com/",
  },
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
    icon: github, 
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
    icon: github, 
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
    icon: github, 
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
    icon: github, 
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
    icon: github, 
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
    icon: github, 
    source_code_link: "https://github.com/RETBOT/ChatDynamix",
  },
  {
    name: "DevPlayCloud",
    description:
      "Crea y prueba tus proyectos web en un entorno seguro y escalable utilizando tu propio servidor Linux en AWS. Puedes aprovechar la potencia y flexibilidad de la nube para llevar tu desarrollo al siguiente nivel.",
    tags: [
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
    image: web_cv_roberto,
    icon: github, 
    source_code_link: "https://github.com/RETBOT/DevPlayCloud",
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
    icon: github, 
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
    icon: github, 
    source_code_link: "https://github.com/RETBOT/Escuela",
  },
];


export { services, technologies, experiencesEs, experiencesEn, projectsEn, projectsEs };
