import React from 'react'
import './Badge.css'

export const Badge = ({ link, name = "Badge", svg }) => {
    return (
        <a href={link} className="badge-link" rel="noopener noreferrer" target="_blank">
            {svg}
            <span>{name}</span>
        </a>
    )
}

