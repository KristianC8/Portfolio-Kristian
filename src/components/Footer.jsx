import React from 'react'
import './Footer.css'
import { ComponentGithub } from './icons/ComponentGithub'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-logo' title='Developed by Kristian Cifuentes'></div>
            <div className='footer-date'>2024</div>
            <a href="https://www.linkedin.com/in/kristian-dario-cifuentes-vera-bb24b5159/" target='_blank' rel='noopener noreferer'>
                Code
                <ComponentGithub />
            </a>
        </footer>
    )
}
