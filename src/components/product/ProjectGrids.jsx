import React from 'react'
import ProductCard from './ProductCard'

const ProjectGrids = ({ products }) => {
    return (
        <div>
            <div className='py-5'>
                <h1 className='text-lg'>Total ({products.length})</h1>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}></ProductCard>
                ))}
            </div>
        </div>
    )
}

export default ProjectGrids