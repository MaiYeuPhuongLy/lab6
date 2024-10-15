import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header({CartItems}) {
  const navigate = useNavigate()
  return (
    <section className='flex justify-between items-center p-4 bg-gray-100 shadow-md'>
        <button onClick={() => {navigate('/')}} className='text-2xl font-bold text-gray-800'>Clyde Store</button>
        <Link to='/cart' className='text-lg text-blue-400 hover:text-blue-800'>
            Giỏ hàng {CartItems.length}
        </Link>
    </section>
  )
}
