import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ViewInfo = () => {
    const viewProduct=useLoaderData();
    console.log('ViewData',viewProduct);
    
  return (
    <div className='flex justify-center'>
            <div className='mt-5 grid justify-center border-2 w-2/4  p-5'>
                    <h1 className='text-3xl p-2 mb-2'>Product Details</h1>
                    <div className=''>
                            <h1>Title: {viewProduct.title}</h1>
                            <h1 className='text-xl'>Price: {viewProduct.price}</h1>

                    </div>
                </div>
    </div>
  )
}

export default ViewInfo