import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import {FaLeftLong} from 'react-icons/fa6';

function ReturnPageButton(){

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const page = searchParams.get('page');
    const navigate = useNavigate();

    function handleOnClick(){

        window.scrollTo(0, 0);

        let num = (parseInt(page));
        let decreasePage = num-1;
        let newPage = decreasePage.toString();
        
        navigate(`/search?q=${query}&page=${newPage}`);

    }

    return (

        <>
            <button
                className="btn return btn-primary rounded-pill px-3"
                onClick={handleOnClick}
                type="button">
                    <FaLeftLong/> Return
            </button>
        </>

    )

}

export default ReturnPageButton;