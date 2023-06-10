import menuContents from './MenuContents.js';
import { useState } from 'react';
import './GlobalNav.css'

function GlobalNav({ className, setPage }) {

    const [showMenu, setShowMenu] = useState(false);

    const list = menuContents.map(
        item => {
            return (
                <li className='global-nav__item' key={item.name}>
                    <a className='global-nav__link' href="/" onClick={
                        (e) => {
                            setPage(item.name);
                            e.preventDefault();
                        }
                    }>
                        {item.name}
                    </a>
                </li>
            )
        }
    );


    const menuClass = showMenu ? 'global-nav__list--open' : '';

    return (
        <nav className={`global-nav`}>
            <button className="global-nav__button" aria-label="hamburger menu"
                onClick={() => {
                    setShowMenu(!showMenu);
                }}><i class="gg-menu"></i>
            </button>
            <ul className={`global-nav__list ${menuClass} ${className}`}>
                {list}
            </ul>
        </nav>
    )

}

export default GlobalNav;