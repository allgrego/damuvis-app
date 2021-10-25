import React, { useEffect, useState } from 'react';
import { fetchTrending } from '../store/slices/movies/trendingSlice';
import { useDispatch, useSelector } from 'react-redux';

function Example() {

    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const {trending} = useSelector(state => state.trending)

    useEffect(()=>{
        const abortCont = new AbortController();
        
        // Obtener trending desde Redux Store
        dispatch(fetchTrending(page));
        
        return () => abortCont.abort();
    },[page]);

    console.log('outer trending', trending);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <input type="number" min={1} value={page} 
                        onChange={e=>{setPage(e.target.value)}}/>
                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;
