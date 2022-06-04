import { createContext, useContext, useState, useEffect } from "react"

const cartContext = createContext();

export const { Provider } = cartContext;

export function useCartContext() {
    return useContext(cartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("carrito")) || []);
    const [cantidadProductos, setCantidadProductos] = useState(0);
    const [CarritoId, setCarritoId]=useState(null)

    async function newCart() {
        console.log("paso por acaa")
        const data=await fetch(`http://localhost:8080/api/carrito`, {
            method: "POST",
            body:JSON.stringify({compra:[]}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const {id} =await data.json()
        return id
    }
    function isInCart(product) {
        return cart.some(e => e.id === product.id);
    }
    async function addToCart(product, cantidad) {
        let carrito= CarritoId || await newCart()
        setCarritoId(carrito)
        let arrayNuevo = cart.slice(0)
        let indice = arrayNuevo.findIndex(e => e.id === product.id);
        indice === -1 ? arrayNuevo.push({ ...product, cantidad }) : arrayNuevo[indice].cantidad += cantidad;
        arrayNuevo.push(product)
        setCart(arrayNuevo);
        //setCantidadProductos(cantidadProductos + cantidad);
        fetch(`http://localhost:8080/api/carrito/${carrito}/productos`, {
            method: "POST",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        localStorage.setItem("carrito", JSON.stringify(arrayNuevo));        
    }
    async function delToCart(id) {
        let carrito = cart.slice(0);
        let carritoFinal = carrito.filter(e => e.id !== id)
        let cantidadProductoEliminado = carrito.find(e => e.id === id).cantidad;
        setCart(carritoFinal);
        setCantidadProductos(cantidadProductos - cantidadProductoEliminado);
        localStorage.setItem("carrito", JSON.stringify(carritoFinal));
        await fetch(`http://localhost:8080/api/carrito/${CarritoId}/productos/${id}`, {
            method: "DELETE"
        })
    }
    async function clearCart() {
        await fetch(`http://localhost:8080/api/carrito/${CarritoId}`,{
            method:"delete"
        })
        setCart([]);
        setCantidadProductos(0);
        setCarritoId(null)
        localStorage.clear();
    }

    useEffect(() => {
        let cantidaStorage = 0;
        if (localStorage.getItem("carrito")) {
            JSON.parse(localStorage.getItem("carrito")).map(e => { return cantidaStorage += e.cantidad })
        }
        setCantidadProductos(cantidaStorage);
    }, []);

    const valorDelContexto = {
        cart,
        cantidadProductos,
        newCart,
        addToCart,
        isInCart,
        delToCart,
        clearCart
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )

}

