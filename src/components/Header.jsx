import './Header.css'

export const Header = () => {
    return (
        <header className='header' id="home">
            <nav className='header-navigation'>
                {/* <a href="#" className='navigation-option'>Home</a> */}
                <a href="#home" className='navigation-option'>Inicio</a>
                <a href="#projects" className='navigation-option'>Proyectos</a>
                <a href="#experience" className='navigation-option'>Experiencia</a>
                <a href="#skills" className='navigation-option'>Habilidades</a>
                <a href="#contact" className='navigation-option'>Contacto</a>
            </nav>
        </header>
    )
}
