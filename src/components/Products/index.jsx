import React from 'react'
import { Link } from 'react-router-dom'


export default function Products({handleAddToCart}) {
  const products = [
    {
      id: 1, prdName: "Điện thoại iPhone 16 Plus", price: '25.999.000', prdImage: "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/09/w300/iphone-16-plus-xanh-luu-ly.jpg.webp", description: "Sản phẩm iPhone 16 Plus Chính hãng là chiếc iPhone cơ bản màn hình lớn thế hệ thứ 3."
    },
    {
      id: 2, prdName: "Điện thoại iPhone 16 Pro", price: '28.999.000', prdImage: "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/09/w300/iphone-16-pro-titan-tu-nhien.jpg.webp", description: "Chiếc iPhone 16 Pro Chính hãng đã ra mắt vào này 09/9/2024. Cùng với bản 16 Pro Max, thiết bị này những sản smartphone hàng đầu của Apple với nhiều tính năng cao cấp, hiện đại được trang bị."
    },
    {
      id: 3, prdName: "Điện thoại iPhone 16 Pro Max", price: '34.999.000', prdImage: "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/09/w300/iphone-16-pro-max-titan-sa-mac.jpg.webp", description: "Siêu phẩm iPhone 16 Pro Max Chính hãng đã ra mắt toàn cầu vào ngày 09/09/2024. Là sản phẩm đầu bảng của Apple, với nhiều nâng cấp và cải tiến nổi bật, thu hút đông đảo người yêu công nghệ và người dùng quan tâm."
    },
    {
      id: 4, prdName: "Điện thoại iPhone 16", price: '22.999.000', prdImage: "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/09/w300/iphone-16-xanh-mong-ket.jpg.webp", description: "Điện thoại cao cấp nhỏ gọn và ngon nhất chính là iPhone 16 Chính hãng."
    },
  ]
  return (
    <section className='container mx-auto p-6'>
      <h2 className='text-2xl font-bold mb-5'>Danh sách điện thoại</h2>
      <div className="grid grid-cols-4 gap-5">
        {
          products.map((products) => {
            return(
              <div key={products.id} className='bg-white shadow-md rounded-lg'>
                <img src={products.prdImage} alt={products.prdName} className='w-fit h-fit object-cover'/>
                <h3 className='text-lg font-semibold'>{products.prdName}</h3>
                <p className='text-red-400 font-medium'>{products.price} VNĐ</p>
                <Link to= {`/product-detail/${products.id}`} state={{products}} className='w-full block text-center bg-blue-500 text-white py-2 rounded-lg mb-2'>Chi tiết sản phẩm</Link>
                <Link onClick={() => {handleAddToCart(products)}} className='w-full block text-center bg-green-500 text-white py-2 rounded-lg'>Thêm vào giỏ hàng</Link>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}