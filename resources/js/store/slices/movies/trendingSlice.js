import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trending: [],
};

export const trendingSlice = createSlice({
    name: 'trending',
    initialState: initialState,
    reducers:{
        setTrending: (state, action) =>{
            state.trending = action.payload;
        }
    }
});
 
export const { setTrending } = trendingSlice.actions;

export default trendingSlice.reducer;

export const fetchTrending = (page = 1) => (dispatch) =>{
    /**
     * Obtener trending desde TMDB
     */
    const apiKey = '672ca19510df8ce06cbb34a86db81af1';
    const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzJjYTE5NTEwZGY4Y2UwNmNiYjM0YTg2ZGI4MWFmMSIsInN1YiI6IjVmOGNmY2VkMTdjNDQzMDAzN2RhNTAwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUkG3NjP6NXDZ8LmZn6JBj3USOd5e8gPtgcISeAwoOA';
    const language = 'es';
    
    const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=${page}&language=${language}`;
 
     fetch(url,
         {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${bearerToken}`
             }
         }
     )
    .then(res => {
        if (!res.ok) {
            throw Error('Error fetching trending');
        }
        return res.json();
    })
    .then(data => {
            dispatch(setTrending(data.results));
        }
    )
    .catch(
        err => {
            if (err.name !== 'AbortError'){
                console.error(err);
            }
        }
    );
}