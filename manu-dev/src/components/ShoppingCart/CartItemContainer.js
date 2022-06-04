import { useCartContext } from '../Context/CartContext';
import ShoppingCart from './ShoppingCart';


function CartItemContainer({open, setOpen}){
    const { cart, delToCart, clearCart } = useCartContext();
    function quitar(id) { 
        delToCart(id)
    }
    let total=0;
    cart.map(e=>{return total+=(e.price*e.cantidad)})
    return(       
        <div className="tableContainer container">
            <ShoppingCart open={open} setOpen={setOpen} clearCart={clearCart} quitar={quitar} total={total} cart={cart}/>           
        </div>   
    );
}

export default CartItemContainer;