import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Main from '../layout/Main';
import MovieCard from '../movies/MovieCard';
import Loading from '../utils/Loading';

function Search(){

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const page = searchParams.get('page');
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = process.env.REACT_APP_SEARCH_URL;
    const [movies, setMovies] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);

    function loadMovies(){

        fetch(`${url}apikey=${apiKey}&s=${query}&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data, data.totalResults, page)
            setMovies(data.Search)
            setRemoveLoading(true)
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
                {(!removeLoading &&
                    <Loading/>    
                )}
                {movies.map((movie) => {
                    return <MovieCard key={movie.imdbID} obj={movie}/>
                })}
            </Main> 
        </>
        
    )

}

export default Search;