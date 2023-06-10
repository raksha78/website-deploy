import './Header.css';
import logo from './images/r.jpg';

import GlobalNav from './GlobalNav';

function Header({ setPage }) {
    return (
        <header className="header">
            <a href="/"><img className="header__logo" src={logo} alt="Character R" /></a>
            <GlobalNav setPage={setPage} />
        </header>
    );
}

export default Header;