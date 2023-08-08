import { useSearchParams } from "react-router-dom";

import {FcIdea} from 'react-icons/fc';

function MovieNotFound(){

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');

    return (

        <section className="text-center">
            <h2>Movie not found: <span className='query_span'>{query}</span></h2>
            <p className="fs-4 text">Try again!</p>
            <hr />
            <FcIdea className="icons"/>
            <h3 className="fs-3 text">Would you like<br/> some suggestions?</h3>
            <a className="fs-4 text" href="http://localhost:3000/">Click Here!</a>
        </section>

    )

}

export default MovieNotFound;