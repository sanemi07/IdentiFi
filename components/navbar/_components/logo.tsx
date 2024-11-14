import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <>
    <Link  href={"/"}>
    <span className='ml-3 mr-2 text-xl text-black font-bold'>
        Identi <span className='text-sky-600'>Fi</span>
    </span>
    </Link>
    </>
   
  )
}

export default Logo