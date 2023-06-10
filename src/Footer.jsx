import './Footer.css';
import iconList from './FooterContents.js';
import FooterNav from './FooterNav';

function Footer({setPage}) {

    const icons = iconList.map(
        item => {
            return (
                <li className="footer__icon-item" key={item.name}>
                    <a className="footer__icon-link" target="_blank"
                        rel="noopener noreferrer" href={item.path}><i className={item.icon}></i></a>
                </li>
            );
        }
    )

    return (
        <footer className="footer">
            <FooterNav setPage={setPage} />
            <ul className="footer__icon-list">
                {icons}
            </ul>
        </footer>
    );
}

export default Footer;