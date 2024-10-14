import React from 'react'
import {Link} from 'react-router-dom'

const Product = ({product}) => {
  const {title, image, description, price} = product;

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1>{title}</h1>
        <img src={image} className='w-20 h-20 object-cover' alt={title} />
        <p className='text-justify'>{description}</p>
        <h1>Price: {price} Taka</h1>
      </div>
      <div className='flex justify-center mt-4'>
        <Link to={`/viewInfo/${product.id}`} >
           <button className='bg-red-700 text-white p-2 rounded-lg mr-2'>View Details</button>
        </Link>
        <button className='bg-red-700 text-white p-2 rounded-lg ml-2'>Add To Cart</button>
      </div>
    </div>
  )
}

export default Product;
