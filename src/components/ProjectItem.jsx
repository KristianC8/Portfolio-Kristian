import './ProjectItem.css'
import { ComponentGithub } from './icons/ComponentGithub'
import { ComponentLinksite } from './icons/ComponentLinksite'
import PropTypes from 'prop-types'

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
                    <a href={linkSite} rel="noopener noreferer" target="_blank" className='projectItem-button button-siteLink'>
                            <span>Ver más</span>
                            {<ComponentLinksite />}
                    </a>
                    <a href={linkCode} rel="noopener noreferer" target="_blank" className='projectItem-button button-codeLink'>
                            <span>Código</span>
                            <ComponentGithub />
                    </a>
                </div>
            </div>

        </article>
    )
}

ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    srcImg: PropTypes.string.isRequired,
    linkSite: PropTypes.string.isRequired,
    linkCode: PropTypes.string.isRequired,
}
