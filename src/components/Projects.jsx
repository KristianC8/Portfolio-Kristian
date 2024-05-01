import React from 'react'
import './Projects.css'
import { ProjectItem } from './ProjectItem'
import img from '../assets/img/videogames_spa.avif'



export const Projects = () => {

    const projects = [
        {
            id: 1,
            image: { img },
            title: "SPA VIDEOGAMES",
            description: "Página con un extenso catálogo de videojuegos de diversas plataformas. Desarrollada como una Single Page Application (SPA), con Vanilla JavaScript. Todos los datos de los videojuegos fueron obtenidos desde una API externa.",
            linkSite: "https://stunning-druid-49424c.netlify.app/",
            linkCode: "https://github.com/KristianC8/SPA-Vanilla-Javascript"
        }
    ]


    return (
        <section id="projects" className="projects">
            <h2 className="projects-title">Proyectos/</h2>
            <div className="projects-container">
                {projects.map(el => <ProjectItem key={el.id} srcImg={el.image} title={el.title} description={el.description} linkSite={el.linkSite} linkCode={el.linkCode} />)}
            </div>
        </section>
    )
}
