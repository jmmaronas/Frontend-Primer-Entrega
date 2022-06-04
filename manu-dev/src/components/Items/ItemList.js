import Items from "./Item.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartItemContainer from "../ShoppingCart/CartItemContainer.js";

export default function ItemList({products}) {
    const [open, setOpen] = useState(false)
    const openCart=()=>setOpen(true)

    return (
        <div className="bg-white">
            <button className="absolute flex right-0 items-center justify-center rounded-full border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700" onClick={() => openCart()}>Cart</button>
            <div className="flex-col justify-around h-full max-w-2xl mx-auto sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-6xl text-center">Products</h2>
                <Link to="/products/add" className="my-8 flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700">Agregar Productos</Link>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Items key={product.id} product={product}/>
                    ))}
                </div>
            </div>
            <CartItemContainer open={open} setOpen={setOpen} />
        </div>
    )
}