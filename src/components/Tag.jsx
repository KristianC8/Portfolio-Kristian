import './Tag.css'
import PropTypes from 'prop-types'

export const Tag = ({ svg, name }) => {
    return (
        <span className='tag'>
            {svg}
            {name}
        </span>
    )
}

Tag.propTypes = {
    svg: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired
}
