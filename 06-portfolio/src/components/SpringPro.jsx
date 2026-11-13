import React from 'react'
import { Title } from './Title'

export const SpringPro = ({imgSend}) => {
    return (
        <section>
            <div className='inner'>
                <div className='list'>
                    <p><img src={`./images/${imgSend}`} alt="" /></p>
                </div>
            </div>
        </section>
    )
}
