import ItemList from "./ItemList.js"
import { useState, useEffect } from "react";
//import { useParams } from 'react-router-dom';


export default function ItemListConatiner() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(null);
    //const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8080/api/productos/")
        .then(data=>data.json())    
        .then(db=>{
                setItems(db);
                setIsLoaded(true);                
            })
        .catch(error=>{
            setIsLoaded(true);
            setError(error);
        })
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (
            <div className='d-flex'>
                <p className='mx-4'>Loading....</p>
            </div>
        );
    } else {
        return (<ItemList products={items.slice(0)} />);
    }
}