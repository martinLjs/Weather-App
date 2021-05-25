import React from 'react'
import CloudIcon from './icons/CloudIcon'

export default function Warning() {
    return (
        <div className='Warning'>
            <CloudIcon />
            <div className='Warning__title'>Fill in all the fields and the weather will be displayed</div>
        </div>
    )
}
