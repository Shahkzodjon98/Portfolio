import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    arken,
    tesla,
    shopify,
    carrent,
    jobit,
    turkona_blog,
    threejs,
  } from "../assets";
  


  export const navLinks = [
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
 
  

  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
 
  ];
  
  const experiences = [
    {
      title: "HTML 5 CSS 3 JS",
      company_name: "Arken",
      icon: arken,
      iconBg: "#fff",
      date: "July 2023 - August 2023",
      points: [
        "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Свое свой журчит использовало, наш заманивший текстов даже имеет единственное, семантика правилами имени! Переписали за предупреждал, составитель на берегу текст ведущими!"
      ],
    },

    {
      title: "React and Next JS",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
          "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Свое свой журчит использовало, наш заманивший текстов даже имеет единственное, семантика правилами имени! Переписали за предупреждал, составитель на берегу текст ведущими!"
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Свое свой журчит использовало, наш заманивший текстов даже имеет единственное, семантика правилами имени! Переписали за предупреждал, составитель на берегу текст ведущими!"
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Свое свой журчит использовало, наш заманивший текстов даже имеет единственное, семантика правилами имени! Переписали за предупреждал, составитель на берегу текст ведущими!"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto corporis corrupti? Inventore, eos quis voluptatibus illum facilis ipsa. Ipsam aut ex quod quam cupiditate?.",
      tags: [
        {
          name: "Next js",
          color: "blue-text-gradient",
        },
    
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },


    {
      name: "Job IT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto corporis corrupti? Inventore, eos quis voluptatibus illum facilis ipsa. Ipsam aut ex quod quam cupiditate?.",
      tags: [
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
    
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },


    {
      name: "Turkona - Bloger",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto corporis corrupti? Inventore, eos quis voluptatibus illum facilis ipsa. Ipsam aut ex quod quam cupiditate?.",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
      
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: turkona_blog,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };