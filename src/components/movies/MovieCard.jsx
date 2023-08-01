import { useEffect, useState } from 'react';

import PosterMovie from './card/PosterMovie';
import MovieInfo from "./card/MovieInfo";
//import MovieDetails from "./card/MovieDetails";

function MovieCard({obj}){

    const [objMovie, setObjMovie] = useState(false);

    useEffect(() => {
        if (Object.keys(obj).length !== 0) setObjMovie(true)
    }, [])

    return (

        <div className="col-lg-4 styles_movies_card text-center" key={obj.imdbID}>
            {(!objMovie && 
                <PosterMovie poster={obj.Poster}/>
            )}
            {(!objMovie && 
                <MovieInfo title={obj.Title} year={obj.Year} type={obj.Type}/>
            )}
        </div>

    ) 

}

export default MovieCard;