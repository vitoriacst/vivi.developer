import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    common: {
      greeting: 'Hello,',
      apresentation: 'I am Vitória Holanda',
      position: 'Software Developer',
      aboutMe: 'I began my development journey with the goal of transforming challenges into effective solutions, where each project represents an opportunity for innovation and continuous improvement.',
      projects: 'My Projects',
      seeMoreButton: 'See More',
      projectsDescription: [
        {
          musicPlataform: 'Music Plataform',
          musicPlataformDescription: 'Music Plataform was the development of a music app similar to Spotify, where I consumed an API and used its responses.',
          musicPlataformLink: "https://github.com/vitoriacst/Music_Plataform",
          daaiProject: "Daai Component",
          daaiDescription: "Daai Component is an open-source project I created while working at Doctor Assistant. It focuses on externalizing an AI-powered component to be integrated into other systems.",
          daaiLink: "https://www.npmjs.com/package/@doctorassistant/daai-component",
          beersApp: "App Delivery Beers",
          beersAppDescription: "Beers App is a website I built to practice my skills with React, TypeScript, and JavaScript — themed around Studio Ghibli.",
          beersAppLink: "https://github.com/vitoriacst/App_delivery_Beers",
        }
      ],
      experiences: 'My Experiences',
      experiencesDescription: 'I m a full stack developer with over 3 years of experience in technologies such as React.js, TypeScript, Node.js, and Python. I have expertise in developing complete solutions, covering front-end, back-end, and database, with a strong focus on agile methodologies (Scrum/Kanban). Throughout my career, I ve worked with several modern frameworks and tools, such as Tailwind CSS, Styled-components, FastAPI, Redux, and Docker. My focus is on delivering robust, scalable, and easy-to-maintain applications.',
      download:'Resume',
      footerText:'made with',
      footerSecondText:'by Vitória Holanda'
    }
  },
  pt: {
    common: {
      greeting: 'Olá,',
      apresentation: 'Eu sou a  Vitória Holanda',
      position: 'Desenvolvedora de software',
      aboutMe: 'Iniciei minha jornada no desenvolvimento com o objetivo de transformar desafios em soluções eficazes, onde cada projeto representa uma oportunidade de inovação e aprimoramento contínuo.',
      projects: 'Meus Projetos',
      seeMoreButton: 'Ver mais',
      projectsDescription: [
        {

          musicPlataform: 'Plataforma de música',
          musicPlataformDescription: 'music plataform houve a criação de uma aplicação voltada para um aplicativo de música semelhante ao spotify , nele consumi uma api e utilzei os seus retornos.',
          musicPlataformLink: "https://github.com/vitoriacst/Music_Plataform",
          daaiProject: 'Daai component',
          daaiDescription: 'Daai component foi um projeto open source criado durante o meu trabalho na empresa doctor assistant, focado em externalizar um componente com inteligência artificial para outros sistemas.',
          beersApp: 'App de delivery de bebidas',
          daaiLink: "https://www.npmjs.com/package/@doctorassistant/daai-component",
          beersAppDescription: 'Beers App é um site que fiz para praticar minhas habilidades com React, TypeScript, JavaScript. com a tematíca do studio Ghibli.',
          beersAppLink: "https://github.com/vitoriacst/App_delivery_Beers",
        }
      ],
      experiences: 'Minhas Experiências',
      experiencesDescription: 'Sou uma desenvolvedora Full Stack com mais de 3 anos de experiência em tecnologias como React.js, TypeScript, Node.js e Python. Tenho expertise no desenvolvimento de soluções completas, abrangendo front-end, back-end e banco de dados, com forte atuação em metodologias ágeis (Scrum/Kanban). Ao longo da minha carreira, trabalhei com diversos frameworks e ferramentas modernas, como Tailwind CSS, Styled-components, FastAPI, Redux, e Docker. Meu foco está em entregar aplicações robustas, escaláveis e de fácil manutenção.',
      download:'Currículo',
      footerText:'feito com',
      footerSecondText:'por Vitória Holanda'
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
