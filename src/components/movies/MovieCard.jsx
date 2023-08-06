import PosterMovie from './card/PosterMovie';
import MovieInfo from "./card/MovieInfo";
import MovieDetails from "./card/MovieDetails";

function MovieCard({obj}){

    return (

        <div className="col-lg-4 styles_movies_card text-center" key={obj.imdbID}>
            <PosterMovie poster={obj.Poster}/>
            <MovieInfo title={obj.Title} year={obj.Year} type={obj.Type}/>
            <MovieDetails MovieApiID={obj.imdbID}/>
        </div>

    ) 

}

export default MovieCard;