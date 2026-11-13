import React from 'react'

export const Title = ({ textPre, text, caption }) => {
    return (
        <div className='section-title'>
            <h2 className='title'>
                <span>{textPre}</span>{text}
            </h2>
            <p>{caption}</p>
        </div>
    )
}
