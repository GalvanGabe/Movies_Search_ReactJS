import { useEffect, useState } from 'react';

import MovieCard from '../movies/MovieCard';
import Loading from './Loading';

function Suggestions(){

    const apiKey = process.env.REACT_APP_API_KEY;
    const url = process.env.REACT_APP_SEARCH_URL;
    const [randomMovie, setRandomMovie] = useState({});
    const [removeLoading, setRemoveLoading] = useState(false);
    const [movieOk, setMovieOk] = useState(false);

    function generateRandomId(){

        let randomNumber = Math.trunc(Math.random()*10000000);
        let randomId = `tt${randomNumber}`;
        return randomId;

    }

    async function loadInfoMovieRandom(){

        await fetch(`${url}apikey=${apiKey}&i=${generateRandomId()}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.Response === 'False') {
                    loadInfoMovieRandom()
                } else {
                    setRandomMovie(data)
                    setRemoveLoading(true)
                    setMovieOk(true)
                }
            })
            .catch(err => console.log(err))

    }

    useEffect(() => {

        loadInfoMovieRandom()

    }, []);

    return (

        <>
            {(!removeLoading && 
                <Loading/>
            )}
            {(movieOk &&
                <MovieCard obj={randomMovie}/>
            )}
        </>

    )

}

export default Suggestions;