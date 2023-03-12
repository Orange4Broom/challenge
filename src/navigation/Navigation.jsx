import { Link } from 'react-router-dom';
import './navigation.scss'

function Navigation() {
    return (
        <div className='Navigation'>
            <div className='navigation-wrapper'>
                <img height={'40px'} src="./images/logo.svg" alt="logo" />
                <div className='link-wrapper'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/about'>About me</Link>
                    <Link className='link' to='/mywork'>My work</Link>
                    <Link className='link' to='contact'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation;