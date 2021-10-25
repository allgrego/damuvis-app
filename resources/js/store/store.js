import { configureStore } from '@reduxjs/toolkit';
// Reducers
import trending from './slices/movies/trendingSlice';

export default configureStore({
    reducer:{
        trending
    }
});