import React from 'react'

const d = new Date;

export default function Footer() {
    return (
        <div className='copyright'>
            Copyright {d.getFullYear()}            
        </div>
    )
}
