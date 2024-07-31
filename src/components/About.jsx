import { Badge } from './Badge'
import './About.css'
import { ComponentGithub } from './icons/ComponentGithub'
import { ComponentLinkedIn } from './icons/ComponentLinkedIn'
import { ComponetContact } from './icons/ComponetContact'
import { ComponentCV } from './icons/ComponentCV'
import hv from '../assets/pdf/KRISTIAN DARIO CIFUENTES VERA.pdf'
import PropTypes from 'prop-types'

export const About = ({ foto }) => {
    return (

        <section className="about">
            <div className="about-information">
                <div className="about-containerlogo">
                    <img className="about-logo" src={foto} alt="Foto de Kritian Cifuentes" />
                </div>
                <div className="about-data">
                    {/* <h2>Kristian Cifuentes</h2> */}
                    <h2 className="data-profesion">Desarrollador Web Frontend</h2>
                    <div className="about-social">
                        <Badge name="Github" link="https://github.com/KristianC8" svg={<ComponentGithub />} />
                        <Badge name="LinkedIn" link="https://www.linkedin.com/in/kristian-dario-cifuentes-vera-bb24b5159/" svg={<ComponentLinkedIn />} />
                    </div>
                </div>

                <div className="about-contact">
                    <a className="about-buttonlink about-button button-downloadcv" href={hv} rel="noopener noreferer" target="_blank" title='CV'>
                            <span>CV</span>
                            <ComponentCV />
                    </a>
                    <a className="about-buttonlink about-button button-contactme" href="mailto:kristian.cifuentesv@gmail.com" rel="noopener noreferer" target="_blank" title='Contacto'>
                            <span>Contacto</span>
                            <ComponetContact />
                    </a>
                </div>
            </div>
            <div className="about-aboutMe">
                <div className="aboutme-console">
                    <div className="console-header">
                        <h2>Sobre Mi/</h2>
                        <span className='console-availabletxt'>Disponible</span>
                        <div className="console-button console-available"></div>
                    </div>
                    <div className="console-body">
                        <h1>Kristian Cifuentes</h1>
                        <p>
                            Ingeniero en Telecomunicaciones de Bogotá, Colombia. 
                            {/* Ingeniero en Telecomunicaciones de Bogotá, Colombia. Cuento con tres años de experiencia como Analista de Calidad de Software y ahora como Desarrollador Web, lo que busco es integrar la funcionalidad con una buena apariencia para ofrecer una experiencia de usuario intuitiva, llamativa visualmente y efectiva en su propósito. */}
                        </p>
                        <p>
                            Cuento con tres años de experiencia como Analista de Calidad de Software y ahora como Desarrollador Web, lo que busco es integrar la funcionalidad con un diseño limpio para ofrecer una experiencia de usuario intuitiva, llamativa visualmente y efectiva en su propósito.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

About.propTypes = {
    foto: PropTypes.string.isRequired
}
