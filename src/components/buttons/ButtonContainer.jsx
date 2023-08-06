import { useSearchParams } from 'react-router-dom';

import NextPageButton from "./NextPageButton";
import ReturnPageButton from "./ReturnPageButton";

function ButtonContainer({totalMovies}){

    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');

    function exactNumberOfPages(){

        let nPages = (totalMovies / 10);
        let nExactPages = Math.ceil(nPages);
        return nExactPages;

    }

    return (

        <div className="container_btn text-center">
            {(page > 1 &&
                <ReturnPageButton/>    
            )}
            {(page < exactNumberOfPages() &&
                <NextPageButton/>
            )}   
        </div>

    )

}

export default ButtonContainer;