import { createContext, useContext, useState, useEffect } from "react"

const cartContext = createContext()

export const { Provider } = cartContext;

export function useCartContext() {
    return useContext(cartContext)
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState("")
    const [cantidadProductos, setCantidadProductos] = useState(0)
    const [carritoId, setCarritoId] = useState(JSON.parse(localStorage.getItem('id') || null))

    useEffect(() => {
        if (!carritoId) {
            (async () => {
                let id = await newCart()
                localStorage.setItem('id', JSON.stringify(id))
                setCarritoId(id)
                setCart([])
                fetch(`http://localhost:8080/api/carrito/${id}/productos`)
                    .then(data => data.json())
                    .then(db => {
                        console.log(db.compra)
                        setCart(db.compra)
                        setCantidadProductos(db.compra.reduce((acc, e) => acc + e.qty, 0));
                    })
                    .catch(error => {
                        console.error(error);
                    })
                return () => {

                }
            })()
        } else {
            fetch(`http://localhost:8080/api/carrito/${carritoId}/productos`)
                .then(data => data.json())
                .then(db => {
                    console.log(db)
                    setCart(db.compra)
                    setCantidadProductos(db.compra.reduce((acc, e) => acc + e.qty, 0));
                })
                .catch(error => {
                    console.error(error);
                })
            return () => {

            };
        }

    }, [])

    async function newCart() {
        const data = await fetch(`http://localhost:8080/api/carrito`, {
            method: "POST",
            body: JSON.stringify({ compra: [] }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const { id } = await data.json()
        console.log(id)
        //setCarritoId(id)
        return id
    }
    function isInCart(product) {
        return cart.some(e => e.id === product.id);
    }
    async function addToCart(id, qty) {
        let newProduct
        let arrayNuevo = cart?.slice(0) || []
        let indice = arrayNuevo.findIndex(e => e.productId === id);
        if (indice === -1) {
            newProduct = {productId: id, qty}
            arrayNuevo.push({ newProduct })
        } else {
            newProduct = {...arrayNuevo[indice], qty:qty += qty}
        }
        setCart(arrayNuevo);
        setCantidadProductos(cantidadProductos + qty);        
        fetch(`http://localhost:8080/api/carrito/${carritoId}/productos`, {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        //localStorage.setItem("carrito", JSON.stringify(arrayNuevo));        
    }
    async function delToCart(id) {
        let carrito = cart.slice(0);
        let cantidadProductoEliminado = carrito.find(e => e.productId === id).qty;
        let carritoFinal = carrito.filter(e => e.id !== id)
        setCart(carritoFinal);
        setCantidadProductos(cantidadProductos - cantidadProductoEliminado);
        //localStorage.setItem("carrito", JSON.stringify(carritoFinal));
        console.log(`http://localhost:8080/api/carrito/${carritoId}/productos/${id}`)
        await fetch(`http://localhost:8080/api/carrito/${carritoId}/productos/${id}`, {//update
            method: "DELETE"
        })
    }
    async function clearCart() {
        await fetch(`http://localhost:8080/api/carrito/${carritoId}`, {
            method: "delete"
        })
        setCart([]);
        setCantidadProductos(0);
        setCarritoId(null)
        localStorage.clear();
    }

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

