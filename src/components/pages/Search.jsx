import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Main from '../layout/Main';
import MovieCard from '../movies/MovieCard';
import Loading from '../utils/Loading';
import ButtonContainer from '../buttons/ButtonContainer';

function Search(){

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const page = searchParams.get('page');
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = process.env.REACT_APP_SEARCH_URL;
    const [movies, setMovies] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [moviesNumber, setMoviesNumber] = useState('');

    async function loadMovies(){

        await fetch(`${url}apikey=${apiKey}&s=${query}&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.Response === 'False') {
                navigate(`/search/movienotfound?q=${query}`)
            } else {
                setMovies(data.Search)
                setRemoveLoading(true)
                setMoviesNumber(data.totalResults)
            }
        })
        .catch(err => console.log(err))

    }

    useEffect(() => {
        loadMovies()
    }, [query, page]);

    return (

        <>
           <Main>
                <h2 className="fw-bolder text-center fs-2">Search result: <span className='query_span'>{query}</span> page: <span className='page_span'>nº{page}</span></h2>
                {(!removeLoading &&
                    <Loading/>    
                )}
                {movies.map((movie) => {
                    return <MovieCard key={movie.imdbID} obj={movie}/>
                })}
                <ButtonContainer totalMovies={moviesNumber}/>
            </Main> 
        </>
        
    )

}

export default Search;