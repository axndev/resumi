import { CirclePile, Codesandbox, Component, ListTree, Loader, Paperclip, Signature, Stone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link className='text-xl  relative flex items-center gap-2 w-fit rounded-full' to='/'>
      <Stone className='w-6 text-(--primary) -rotate-100 stroke-2' />
      <span className='hover:text-(--primary)'>Resumi</span>
    </Link>
  )
}

export default Logo