import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Main from '../layout/Main';
import MovieCard from '../movies/MovieCard';

function Search(){

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = process.env.REACT_APP_SEARCH_URL;
    const [movies, setMovies] = useState([]);

    function loadMovies(){

        fetch(`${url}apikey=${apiKey}&s=${query}`)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.Search)
        })
        .catch(err => console.log(err))

    }

    useEffect(() => {
        loadMovies()
    }, [query]);

    return (

        <>
           <Main>
                <h2 className="fw-bolder text-center fs-2">{query} Search Results</h2>
                {movies.map((movie) => {
                    return <MovieCard key={movie.imdbID} obj={movie}/>
                })}
            </Main> 
        </>
        
    )

}

export default Search;