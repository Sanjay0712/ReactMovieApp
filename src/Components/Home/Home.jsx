import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const movieText = "John";
        const seriesText = "friends";
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(seriesText));
    }, []);

    return(
        <div>
            <MovieListing />
        </div>
    );
}

export default Home;