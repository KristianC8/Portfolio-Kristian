import "./ItemExperience.css"

export const ItemExperience = ({ svg, company, date, position, description }) => {

    const descriptionLines = description.split('\n')

    return (
        <div className="itemexp">
            <div className="itemexp-date">
                <span className="itemexp-enterprise">{company}</span>
                <span>{date}</span>
            </div>
            <div className="itemexp-timeline">
                {svg}
                <div className="timeline-space"></div>
                <div className="timeline"></div>
            </div>
            <div className="itemexp-container">
                <div className="itemexp-information">
                    <span className="itemexp-title">{position}</span>
                    <p className="itemexp-description">{descriptionLines.map((line, index) => <span key={index}>{line}</span>)}</p>
                </div>
            </div>
        </div>
    )
}
