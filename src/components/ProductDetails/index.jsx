import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ProductDetails({handleAddToCart}) {
  const location = useLocation()
  const { products } = location.state || {}
  console.log('product: ', products);
  return (
    <section className='p-6 max-w-3xl mx-auto boder border-gray-200 rounded-lg shadow-lg bg-white mt-10'>
      <h2 className='text-3xl font-bold text-gray-800'>{products.prdName}</h2>
      <div className="flex gap-10 mt-5">
        <img src={products.prdImage} alt={products.prdName} className='w-80 h-80 object-cover shadow-md'/>
        <div className=''>
          <p className='text-xl font-semibold text-gray-800'>Giá sản phẩm: {products.price} VNĐ</p>
          <p className='text-lg text-gray-600 mt-2'>Mô tả sản phẩm: {products.description}</p>
          <div className="text-end mt-20">
            <button onClick={() => {handleAddToCart(products)}} className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-500'>Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </section>
  )
}
