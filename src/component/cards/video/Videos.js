import React from 'react'
import video from './Seoul - 21985.mp4'
import './main.css'

export default function Videos() {
    return (
        <div className='video'>
            <video controls autoplay>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}
