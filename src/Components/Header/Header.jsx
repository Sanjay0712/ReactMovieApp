import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import shoppingIcon from '../../images/shoppingIcon.png'; 
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";


const Header = () => {

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text==="") {
            alert("Please enter movies");
        }
        else {
            dispatch(fetchAsyncMovies(text));
            dispatch(fetchAsyncShows(text));
        }
    }

    return(
        <div className="header">
            <div className="logo">
                <Link to={"/"}>
                    Movie App
                </Link>
            </div>
            <div className="search-bar">
                <form onSubmit={handleSubmit}>
                    <input placeholder="Search" type="text" value={text} onChange={(e) => setText(e.target.value)} /> 
                    <button type="submit">
                        <i class="fa fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>
            <div className="user-image">
                <img src={shoppingIcon} alt="" />
            </div>
        </div>
    );
}

export default Header;