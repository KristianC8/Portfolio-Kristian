import './ProjectItem.css'
import React from 'react'
import { ComponentGithub } from './icons/ComponentGithub'
import { ComponentLinksite } from './icons/ComponentLinksite'

export const ProjectItem = ({ title, description, srcImg, linkSite, linkCode }) => {
    return (
        <article className="projectItem">
            <img className="projectItem-img" src={srcImg} alt={title} />
            <div className="projectItem-content">
                <h3 className="projectItem-title">{title}</h3>
                <div className="projectItem-division">
                    <span className="projectItem-divn divn-left"></span>
                    <span className="projectItem-divn divn-right"></span>
                </div>
                <p className="projectItem-description">{description}</p>
                <div className="projectItem-buttons">
                    <a href={linkSite} rel="noopener noreferer" target="_blank">
                        <button className="projectItem-button button-siteLink">
                            <span>Ver más</span>
                            {<ComponentLinksite />}
                        </button>
                    </a>
                    <a href={linkCode} rel="noopener noreferer" target="_blank">
                        <button className="projectItem-button button-codeLink">
                            <span>Código</span>
                            <ComponentGithub />
                        </button>
                    </a>
                </div>
            </div>

        </article>
    )
}

