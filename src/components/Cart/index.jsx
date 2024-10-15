import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cart({CartItems, handleCheckOut}) {
  const navigate = useNavigate()
  return (
    <section className='p-6 max-w-3xl mx-auto'>
      <h2 className='text-2xl font-bold mb-5'>Giỏ hàng của bạn</h2>
      {
        CartItems.length > 0 ? 
        <>
        <div>
          <ul className='border border-gray-300 rounded-lg divide-y divide-gray-200'>
            {
              CartItems.map((products) => {
                return (
                  <li key={products.id} className='flex justify-between p-4'>
                  <span>{products.prdName}</span>
                  <span className='text-red-500 font-bold'>{products.price} VNĐ</span>
                </li>
                )
              })
            }
          </ul>
          <div className="text-end">
            <button onClick={() => {handleCheckOut()}} className='mt-5 bg-red-500 text-white font-semibold px-4 py-2 rounded-md'>Thanh toán sản phẩm</button>
          </div>
        </div>
        </>
         : 
        <>
        <div className='text-xl mb-5'>
          Giỏ hàng của bạn không có sản phẩm!
        </div>
        <button onClick={() => {navigate('/')}} className='py-2 text-white bg-green-500 px-4 rounded-lg'>Tiếp tục mua hàng</button>
        </>
      }
    </section>
  )
}