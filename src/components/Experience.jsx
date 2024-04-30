import "./Experience.css"
import { ItemExperience } from "./ItemExperience"
import data from "../helpers/experience.json"


export const Experience = ({ svgImg }) => {

    return (
        <section id="experience" className="experience">
            <h2 className="experience-title">Experiencia/</h2>
            <div className="experience-container">
                {data.Experiencia.map(el => <ItemExperience key={el.id} svg={svgImg} company={el.company} date={el.date} position={el.position} description={el.description} />)}

            </div>
        </section>
    )
}
