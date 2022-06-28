import { createContext, useContext, useState, useEffect } from "react"

const prductsContext = createContext();

export const { Provider } = prductsContext;

export function useProductContext(){ 
    return useContext(prductsContext);
} 

export function ProductProvider({children}){
    const [products, setProducts]=useState("")
    
    useEffect(() => {
        fetch("http://localhost:8080/api/productos/")
        .then(data=>data.json())    
        .then(db=>{
                setProducts(db);
            })
        .catch(error=>{
            console.error(error);
        })
    }, []);

    const getAll=()=>{
        return products.slice(0)
    }

    const addProduct=(newProduct)=>{
        setProducts([...products, newProduct])
        fetch(`http://localhost:8080/api/productos`, {
            method: "PUT",
            body: JSON.stringify(products),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const updateProduct=(id, product)=>{
        setProducts([...products, product])
        fetch(`http://localhost:8080/api/productos/${id}`, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
    }

    const delProduct= async (id)=>{
        let arrayNuevo=products.slice(0)
        setProducts(arrayNuevo.filter(e=>e.di!==id))
        await fetch(`http://localhost:8080/api/productos/${id}`,{
            method:"delete"
        })
    }
    
    const valorDelContexto={ 
        products,
        getAll,
        addProduct, 
        delProduct,  
        updateProduct               
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}