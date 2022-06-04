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
    }

    const updateProduct=()=>{

    }

    const delProduct= async (id)=>{
        console.log(Number(id))
        await fetch(`http://localhost:8080/api/productos/${Number(id)}`,{
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