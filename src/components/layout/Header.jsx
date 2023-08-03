import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {FaPlayCircle} from 'react-icons/fa';

function Header(){

    const [search, setSearch] = useState('');
    //const [pageNumber, setPageNumber] = useState('1');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) {
            alert('Enter movie name, please')
            return
        }

        //${pageNumber}
        console.log(search)
        navigate(`/search?q=${search}&page=1`);
        setSearch('');
        //setPageNumber('1');
        
    }

    return (

        <header className="p-3 mb-3 border-bottom bg-black bg-gradient sticky-top">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <div className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-decoration-none">
                        <FaPlayCircle className='icons'/>
                        <h1 className='fw-bold font-monospace text-white-50'>Movies Search</h1>
                    </div>
                    <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3' onSubmit={handleSubmit} role='search'>
                        <input
                            type="search"
                            name='search'
                            className='form-control'
                            placeholder='Enter movie name'
                            aria-label='Search'
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                    </form>
                </div>
            </div>
        </header>

    )

}

export default Header;