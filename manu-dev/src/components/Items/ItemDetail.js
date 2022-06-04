import { XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'

export default function ItemsDetail({ product }) {
    const { addToCart } = useCartContext()
    return (
        <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
            <Link
                to="/"
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
            >
                <span className="sr-only">Close</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
            </Link>
            <div className="w-full h-full  grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                    <img src={product.urlImage} alt={product.urlImage} className="object-center object-cover" />
                </div>
                <div className="sm:col-span-8 lg:col-span-7 h-full flex-col">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12 mb-4">{product.name}</h2>
                    <p>{product.description}</p>
                    <section aria-labelledby="information-heading" className="mt-2">
                        <p className="text-4xl font-bold text-gray-900 mt-4">${product.price}</p>
                    </section>
                    <section aria-labelledby="options-heading" className="mt-10 bottom-0">
                        <div className='container flex justify-between mt-2'>
                            <p className=''>Stock: {product.stock}</p>
                            <p className=''>code: {product.code}</p>
                        </div>
                        <button
                            onClick={() => addToCart(product)}
                            className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add to bag
                        </button>
                        <p className=''>Stock: {product.timestamp}</p>
                    </section>
                </div>
            </div>
        </div>
    )
}
