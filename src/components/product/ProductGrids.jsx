import React from 'react'
import ProductCard from './ProductCard'

const ProductGrids = ({ products }) => {
    return (
        <div >
            <div className='py-5'>
                <h1 className='text-lg'>Total ({products.length})</h1>
            </div>
            {products.length ==0 ? (<div className='text-zinc-500 dark:text-zinc-200 h-[40vh] flex items-center justify-center'>
                <h1>Oops. no products found.</h1>
            </div>) : (<div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}></ProductCard>
                ))}
            </div>)}


        </div>
    )
}

export default ProductGrids