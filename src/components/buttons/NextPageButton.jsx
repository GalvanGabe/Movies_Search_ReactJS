import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import {FaRightLong} from 'react-icons/fa6';

function NextPageButton(){

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const page = searchParams.get('page');
    const navigate = useNavigate();

    function handleOnClick(){

        window.scrollTo(0, 0);

        let num = (parseInt(page));
        let addPage = num+1;
        let newPage = addPage.toString();
        
        navigate(`/search?q=${query}&page=${newPage}`);

    }

    return (

        <>
            <button
                className="btn load_more btn-primary rounded-pill px-3"
                onClick={handleOnClick}
                type="button">
                    Next <FaRightLong/>
            </button>
        </>

    )

}

export default NextPageButton;