import { useState, useEffect } from "react";

function MovieDetails({MovieApiID}){

    const [movieData, setMovieData] = useState({});
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = process.env.REACT_APP_SEARCH_URL;

    async function loadMoreInfoMovie(){

        await fetch(`${url}apikey=${apiKey}&i=${MovieApiID}`)
            .then((res) => res.json())
            .then((data) => {
                setMovieData(data)
            })
            .catch(err => console.log(err))

    }

    useEffect(() => {
        loadMoreInfoMovie()
    },[])

    return (

        <>
            <details className="btn">
                <summary><strong>More Information</strong></summary>
                <ul className="details_list">
                    <li><em>Genre:</em> {movieData.Genre}</li><hr />
                    <li><em>Actors:</em> {movieData.Actors}</li><hr />
                    <li><em>Country:</em> {movieData.Country}</li><hr />
                    <li><em>Director:</em> {movieData.Director}</li><hr />
                    <li><em>Language:</em> {movieData.Language}</li><hr />
                    <li><em>Plot:</em> {movieData.Plot}</li>
                </ul>
            </details>
        </> 
        
    )

}

export default MovieDetails;