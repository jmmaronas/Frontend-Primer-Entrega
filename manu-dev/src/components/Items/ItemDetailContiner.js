import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemsDetail from './ItemDetail';

export default function ItemsDetailContiner() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/api/productos/${id}`)
            .then(data =>data.json())
            .then(db => {
                setItem(db);
                setIsLoaded(true);
            })
            .catch(error => {
                setIsLoaded(true);
                setError(error);
            })
    }, [id]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (
            <div className='d-flex'>
                <p className='mx-4'>Loading....</p>
            </div>
        );
    } else {
        return (<ItemsDetail product={item} />);
    }
}

