import './navigation.scss';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="Navigation">
            <div className="navigation-wrapper">
                <Link to="/">
                    <img height={'40px'} src="./images/logo.svg" alt="logo" />
                </Link>
                <div className="link-wrapper">
                    <a className="link" href="/#home">
                        Home
                    </a>
                    <a className="link" href="/#about">
                        About me
                    </a>
                    <Link className="link" to="/work">
                        My work
                    </Link>
                    <Link className="link" to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
