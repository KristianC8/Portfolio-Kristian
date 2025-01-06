import './Projects.css'
import { ProjectItem } from './ProjectItem'

export const Projects = () => {
  const projects = [
    {
      id: 1,
      image: 'https://iili.io/d1SqYEF.webp',
      title: 'SPA VIDEOGAMES',
      description:
        'Página con un extenso catálogo de videojuegos de diversas plataformas. Desarrollada como una Single Page Application (SPA), con Vanilla JavaScript. Todos los datos de los videojuegos fueron obtenidos desde una API externa.',
      linkSite: 'https://stunning-druid-49424c.netlify.app/',
      linkCode: 'https://github.com/KristianC8/SPA-Vanilla-Javascript'
    },
    {
      id: 2,
      image: 'https://iili.io/d1SBLPt.png',
      title: 'ONLINE STORE WITH REACT       ',
      description:
        'Página de comercio electrónico completamente funcional que incluye un carrito de compras. Desarrollada con React, React Router y Tailwind CSS. Los productos se obtuvieron usando AJAX desde una API externa.',
      linkSite: 'https://react-shop-bib.pages.dev/',
      linkCode: 'https://github.com/KristianC8/React-Shop'
    },
    {
      id: 3,
      image: 'https://iili.io/2UHA22V.jpg',
      title: 'KANBAN BOARD APP',
      description:
        'Tablero Kanban diseñado para optimizar la organización y gestión de tareas. La página fue desarrollada en el backend con Java Spring Boot y el frontend con React. Permite crear, mover y actualizar tareas en tiempo real. ',
      linkSite: 'https://kanban-app-front.vercel.app/',
      linkCode: 'https://github.com/KristianC8/Kanban-App-Front'
    }
  ]

  return (
    <section id='projects' className='projects'>
      <h2 className='projects-title'>Proyectos/</h2>
      <div className='projects-container'>
        {projects.map((el) => (
          <ProjectItem
            key={el.id}
            srcImg={el.image}
            title={el.title}
            description={el.description}
            linkSite={el.linkSite}
            linkCode={el.linkCode}
          />
        ))}
      </div>
    </section>
  )
}
