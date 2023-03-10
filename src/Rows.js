import React, { useState , useEffect} from 'react';
import axios from "./axios";
import './response.json'

const base_url = 'http://image.tmdb.org/t/p/original/'

function Row({title,fetchUrl}) {
    const [movies,setMovies]=useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = this.props.responsef;
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // console.table(movies);
    return(
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_poster'>
                {movies.map(movie =>(
                    <img src={'${base_url}${movie.poster_path}'} alt={movie.name}>
                    </img>
                ))}
            </div>
        </div>
    )
    
}
export default Row;