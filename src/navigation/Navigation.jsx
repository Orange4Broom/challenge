import { Link } from 'react-router-dom';
import './navigation.scss'

function Navigation() {
    return (
        <div className='Navigation'>
            <div className='navigation-wrapper'>
                <img height={'40px'} src="./images/logo.svg" alt="logo" />
                <div className='link-wrapper'>
                    <a className='link' href="#home">Home</a>
                    <a className='link' href="#about">About me</a>
                    <a className='link' href="#work">My work</a>
                    <a className='link' href="contact">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navigation;