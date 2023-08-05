import { useSearchParams } from 'react-router-dom';

import NextPageButton from "./NextPageButton";
import ReturnPageButton from "./ReturnPageButton";

function ButtonContainer({totalMovies}){

    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');

    return (

        <div className="container_btn text-center">
            {(page > 1 &&
                <ReturnPageButton/>    
            )}
            {(totalMovies > 10 &&
                <NextPageButton/>
            )}   
        </div>

    )

}

export default ButtonContainer;