import Link from 'next/link'
import React from 'react'

export default function project() {
    return (
        <>
        <img
                    className='AnimProject'
                    src="/images/assets/Projects/Banjara/banjara.png"
                    alt='Arrow'
                />
            <Link href={"/"} className='AnimUrl flex-align'>
                <img
                    className='AnimArrow'
                    src="/images/assets/arrow.png"
                    alt='Arrow'
                />
                <p className='AnimUrlP'>Android</p>
            </Link>
        </>
    )
}
