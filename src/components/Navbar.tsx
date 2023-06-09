
import ConnectionButton from './ConnectionButton'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center'>
        <Link to="/enter-lottery">Enter Lottery</Link>
        <Link to="/" className='mx-5'>
            Mint Token
        </Link>

        <ConnectionButton />
    </div>
  )
}

export default Navbar