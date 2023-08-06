import Main from '../layout/Main';
import Suggestions from '../utils/Suggestions';

function Home(){

    return (

        <>
            <Main>
                <h2 className="fw-bolder text-center fs-2">Suggestions</h2>
                <Suggestions/>
                <Suggestions/>
                <Suggestions/>
            </Main>
        </>
        
    )
                    
}

export default Home;