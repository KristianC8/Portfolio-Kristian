import React from 'react'
import './Projects.css'
import { ProjectItem } from './ProjectItem'



export const Projects = () => {

    const projects = [
        {
            id: 1,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPbzDSQB6b1RVUMI_1fX82MXlEmeSMVdvUKmSvUSJhK4M8cNLifiWFRM_1OWCOUqbH_QtQ20whLCpqC_JVB1-k44KqONuns4WwqKGlY2hIBMvHuDk_sfXmKU2UBgYcw9PFnrSlVaG_fYCRg3Dh57wpnqriM8rc3lHd8YsuSwze9jnN8d6PM7VQkUtk-_HBXncrSO6Ak7zszzkBcXLBKixEFFj-BDfqrmjhd5iSCufKKrcKMxhA5Ep-w-3s4WtKMh1e47dfa6c3V6Z7d5S-O4aQxcTiQ_2z9hYr_lY6wm11LS7i5eHGfRmiiY0HNUuAPX35UKCA1ZrybCuODM6Hfl2sPLlLCiXoFGjTN1od8_9Ex5fH8wN43ZpgAQauxEH-p2AL074_DmsTC_pj0spM-Iz-Se6C691fy8YUCYvlzt5WSbOVNkwRs1_kspSVdzyaaiuLkSpFvCMByfWSrOolS2ve__qrBb882jAG8VbNRwifqpS076I1zJIx2ee9iH8xVgVSbVaoNI38klNJFls1uzbGoJQiVye0gUgE9oZqjEN5E-G8Q-n0QykF7e1BvEqjbmdzuwxbZ8foj0Q5wWKqhX9qwzKfei2KCtq70BH-UOaA58Sv-CxHs99K4PEVhJb7-HaGDf_pRQEkh5zkvjSkz3xaPeeY6bqeLqmpJEgB1GXnf1Pkc27dDysUfCteU_pCkqWlmerdKk8ZdJtomMuq11uiqLdB2UkD57frOcuWlUGOM_QZ5Kcp4n-WR0Sbhb6fsSc2vQSjKjfHtaPaR1KPFQ0VkRodMhxYFVe-n_Kf2O1t2e5U_y090dwqSB4IfLKn8_In0L8hBF-iN4o07XvDu7YoLaXHDcHvlXDmES8Mq8BXQ4fMwd6iJURtvW8ia18RdPWR6fuznbUV1qMKKAtJEk0SZc7y6bT3DrzcPtcVosQgr72ceJtf27Ug_u6k=w1079-h607-s-no-gm?authuser=0",
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
