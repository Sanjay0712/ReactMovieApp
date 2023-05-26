import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeMovieOrShow } from "../../features/movies/movieSlice";

const MovieDetail = () => {

    const { imdbID }= useParams();
    // console.log(imdbID);
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow);
    // console.log(data, data);

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID));
        return () => {
            dispatch(removeMovieOrShow()); //componentWillUnmount
        }
    }, [imdbID, dispatch]);

    return(
        <div className="movie-section">
            { 
                Object.keys(data).length === 0 ? 
                (<div>...Loading</div>)
                : (
                    <>
                        <div className="section-left">
                            <div className="movie-title">
                                {data.Title}
                            </div>
                            <div className="movie-rating">
                                <span>IMDB Rating <i class="fa fa-star"></i> {data.imdbRating}</span>
                                <span>IMDB Votes <i class="fa fa-thumbs-up"></i> {data.imdbVotes}</span>
                                <span>Runtime <i class="fa fa-film"></i> {data.Runtime}</span>
                                <span>Year <i class="fa fa-calendar"></i> {data.Year}</span>
                                <span>IMDB Rating <i class="fa fa-star"></i> {data.imdbRating}</span>
                            </div>
                            <div className="movie-plot">{ data.Plot }</div>
                            <div className="movie-info">
                                <div>
                                    <span>Director</span>
                                    <span>{data.Director}</span>
                                </div>
                                <div>
                                    <span>Genres</span>
                                    <span>{data.Genre}</span>
                                </div>
                                <div>
                                    <span>Language</span>
                                    <span>{data.Language}</span>
                                </div>
                                <div>
                                    <span>Awards</span>
                                    <span>{data.Awards}</span>
                                </div>
                            </div>
                        </div>
                        <div className="section-right">
                            <img src={data.Poster} alt={data.Title} />
                        </div>
                    </>
                )
            } 
        </div>
    );
}

export default MovieDetail;