import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/Items/ItemListContainer.js'
import NavBar from './components/NavBar/NavBar.js';
import AddProduct from './components/Forms/AddProduct.js';
import { CartProvider } from './components/Context/CartContext.js';
import { ProductProvider } from "./components/Context/ProductContext.js";
import CheckOut from './components/ShoppingCart/CheckOut.js'
import UpdateProduct from './components/Forms/UpdateProduct.js';
import ItemsDetailContiner from './components/Items/ItemDetailContiner';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ProductProvider>
        <CartProvider>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemsDetailContiner/>}/>
          <Route path='/products/add' element={<AddProduct />} />
          <Route path='/products/update/:id' element={<UpdateProduct />} />
          <Route path='/checkOut' element={<CheckOut />} />
        </Routes>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
