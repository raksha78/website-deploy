import Home from './Home';
import Work from './Work';
import Contact from './Contact'

function Main( {page, setPage}) {
    return(
        <main>
           { (page === 'Home') && <Home setPage={setPage}/> }
           { (page === 'Work') && <Work /> }
           { (page === 'Contact') && <Contact /> }
        </main>
    );
}

export default Main;