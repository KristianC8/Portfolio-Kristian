import { Tag } from './Tag'
import './Skills.css'
import { IconHtml } from './icons/IconHtml'
import { IconCss } from './icons/IconCss'
import { IconJavaScript } from './icons/IconJavaScript'
import { IconReact } from './icons/IconReact'
import { IconGit } from './icons/IconGit'
import { IconGitHub } from './icons/IconGitHub'
import { IconTailwind } from './icons/IconTailwind'
import { IconReactRouter } from './icons/IconReactRouter'


export const Skills = () => {

    const skills = [
        {
            id: 1,
            name: "HTML",
            svg: <IconHtml />
        },
        {
            id: 2,
            name: "CSS",
            svg: <IconCss />
        },
        {
            id: 3,
            name: "JavaScript",
            svg: <IconJavaScript />
        },
        {
            id: 4,
            name: "React",
            svg: <IconReact />
        },
        {
            id: 5,
            name: "Git",
            svg: <IconGit />
        },
        {
            id: 6,
            name: "GitHub",
            svg: <IconGitHub />
        },
        {
            id:7,
            name: "Tailwind CSS",
            svg: <IconTailwind />
        },
        {
            id: 8,
            name: "React Router",
            svg: <IconReactRouter />
        }

    ]

    return (
        <section id='skills'>
            <h2>Habilidades/</h2>
            <div className='skills-container'>
                {skills.map(el => <Tag key={el.id} name={el.name} svg={el.svg} />)}
            </div>
        </section>
    )
}
