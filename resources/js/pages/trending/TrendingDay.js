import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../components/layouts/MainLayout';
import { fetchTrending } from '../../store/slices/movies/trendingSlice';
import Card from './Card';

const TrendingDay = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const {trending: movies} = useSelector(state => state.trending);
    

    useEffect(()=>{
        const abortCont = new AbortController();
        
        // Obtener trending desde Redux Store
        dispatch(fetchTrending(page));
        
        return () => abortCont.abort();
    },[page]);

    console.log('trending movies: ', movies);

    return ( 
    <MainLayout>
        <div className="container pt-5">
            <div className="row mb-4">
                <div className="col-sm-8 offset-sm-2 text-center">
                    <h1><i className="fa fa-sw fa-film text-dark"></i> Damuvis</h1>
                    <h2 className="h5 text-muted">Trending de películas y series de la semana</h2>
                </div>
            </div>
            <div className="row mt-3">
                {
                    movies.length>0&&
                        movies.map( (m,i) => 
                        (
                            <div className="col my-2" key={i}>
                                <Card
                                    movie={m}
                                />                                
                            </div>
                        )       
                    )
                }
            </div>
        </div>
    </MainLayout>

         );
}
 
export default TrendingDay;
