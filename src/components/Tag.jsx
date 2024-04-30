import React from 'react'
import './Tag.css'

export const Tag = ({ svg, name }) => {
    return (
        <span className='tag'>
            {svg}
            {name}
        </span>
    )
}
