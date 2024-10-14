import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Product from '../Product/Product';

const Products = () => {
  const products=useLoaderData();
  console.log('All Products->',products);
  
  return (
    <div  className='grid grid-cols-3 gap-3 w-50 m-5'>
      {
        products.map(product=>

          <div className='bg-gray-100 p-4 flex flex-col justify-between'>
            <Product product={product} />
          </div>

        )
      }
    </div>

  )
}

export default Products