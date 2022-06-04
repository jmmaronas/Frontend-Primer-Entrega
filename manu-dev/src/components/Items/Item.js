import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import { useProductContext } from '../Context/ProductContext'

function Items({ product }) {
    const { addToCart } = useCartContext()
    const { delProduct } = useProductContext()
    return (
        <div className="conainer">
            <Link to={`/product/${product.id}`} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                        src={product.urlImage}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                </div>
                <p className="mt-1 text-lg text-center font-medium text-gray-900">{product.name}</p>
                <h3 className="mt-4 text-sm text-gray-700 w-full">{product.description}</h3>
                <h3 className="mt-4 text-sm text-gray-700 w-full">Stock: {product.stock}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">$ {product.price}</p>
            </Link>
                <div className='flex justify-between text-lg'>
                    <button onClick={() => addToCart(product)} className="btn bg-blue-400 px-4 text-center rounded-md text-white">Add</button>
                    <Link to={`/products/update/${product.id}`} className="btn bg-green-400 px-4 rounded-md text-white">Update</Link>
                    <button onClick={() => delProduct(product.id)} className="btn bg-red-500 px-4 rounded-md text-white">Delete</button>
                </div>
            <dir className="pl-0 flex justify-between w-full">
                <h3 className="mt-4 text-xs text-gray-700">Codigo: {product.code}</h3>
                <h3 className="mt-4 text-xs text-gray-700">Actualizado: {product.timestamp}</h3>
            </dir>
        </div>
    )
}

export default Items