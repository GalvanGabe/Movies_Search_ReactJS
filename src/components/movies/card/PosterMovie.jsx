import { useState, useEffect } from "react";

function PosterMovie({poster}){

    const [posterMovie, setPosterMovie] = useState(poster);

    useEffect(() => {
        if (poster === 'N/A') setPosterMovie("https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg");
    }, [])

    return (

       <img
            className="bd-placeholder-img rounded-circle img_hover"
            width="200"
            height="200"
            src={posterMovie}
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            alt="img movie poster"
       />

    )

}

export default PosterMovie;