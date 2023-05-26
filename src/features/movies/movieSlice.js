import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieAPI from '../../common/apis/movieAPI';
import { APIKey } from '../../common/apis/MovieAPIKey';

export const fetchAsyncMovies = createAsyncThunk( 
  'movies/fetchAsyncMovies', 
  async (text) => {
    const response = await movieAPI
    .get(`/?apikey=${APIKey}&s=${text}&type=movie`);
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk( 
  'movies/fetchAsyncShows', 
  async (text) => {
    const response = await movieAPI
    .get(`/?apikey=${APIKey}&s=${text}&type=series`);
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async(id) => {
    const response = await movieAPI
    .get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
)

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShows: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      removeMovieOrShow: (state) => {
        state.selectMovieOrShows = {};
      },
    },
    extraReducers: {
      [fetchAsyncMovies.pending] : () => {
        console.log("Pending");
      },
      [fetchAsyncMovies.fulfilled] : (state, { payload }) => {
        console.log("Fulfilled movies");
        return {...state, movies: payload}
      },
      [fetchAsyncMovies.rejected] : () => {
        console.log("Rejected");
      },
      [fetchAsyncShows.fulfilled] : (state, { payload }) => {
        console.log("Fulfilled shows");
        return {...state, shows: payload}
      },
      [fetchAsyncMovieOrShowDetail.fulfilled] : (state, { payload }) => {
        console.log("Fulfilled shows and movies");
        return {...state, selectMovieOrShows: payload}
      },
    },
});

// export let a = (state) => console.log("Hi", state);
// a();

export const { removeMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovies = (item) => item.movies.movies;
export const getAllShows = (item) => item.movies.shows;
export const getSelectedMovieOrShow = (item) => item.movies.selectMovieOrShows;