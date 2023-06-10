import menuContents from './MenuContents.js';
import './FooterNav.css';

function FooterNav({ setPage }) {

    const list = menuContents.map(
        item => {
            return (
                <li className='footer-nav__item' key={item.name}>
                    <a className='footer-nav__link' href="/" onClick={
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


    return (
        <nav className="footer-nav">
            <ul className="footer-nav__list">
                {list}
            </ul>
        </nav>
    )
}

export default FooterNav;