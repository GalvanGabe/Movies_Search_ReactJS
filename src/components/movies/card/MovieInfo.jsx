import {FaCalendarDays, FaFilm} from 'react-icons/fa6';

function MovieInfo({title, year, type}){

    return (

        <>
            <h3 className="fw-normal">{title}</h3>
            <FaCalendarDays className='icons'/>
            <p>{year}</p>
            <FaFilm className='icons'/>
            <p>{type}</p>
        </>

    )

}

export default MovieInfo;