import './Badge.css'
import PropTypes from 'prop-types'

export const Badge = ({ link, name = "Badge", svg }) => {
    return (
        <a href={link} className="badge-link" rel="noopener noreferrer" target="_blank">
            {svg}
            <span>{name}</span>
        </a>
    )
}

Badge.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    svg: PropTypes.element.isRequired
}

