import './Footer.css'
import { ComponentGithub } from './icons/ComponentGithub'

export const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className='footer'>
      <div
        className='footer-logo'
        title='Developed by Kristian Cifuentes'
      ></div>
      <div className='footer-date'>{year}</div>
      <a
        href='https://github.com/KristianC8/Portfolio-Kristian'
        target='_blank'
        rel='noopener noreferer'
      >
        Code
        <ComponentGithub />
      </a>
    </footer>
  )
}
