import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'
import './App.css'
import { Experience } from './components/Experience'
import { ComponentExperience } from './components/icons/ComponentExperience'
import foto_Portfolio from './assets/img/Portfolio_Foto.avif'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <About foto={foto_Portfolio} />
        <Projects />
        <Experience svgImg={<ComponentExperience />} />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
