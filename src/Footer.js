import { faFacebook, faInstagram, faPinterest, faTiktok} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './assets/logo.jpg'

function Footer() {
    return (
        <footer>
            <div>
                <img src={logo} alt='logo' style={{height:'75px'}}/>
            </div>
            <div className='footerIcons'>
                <ul>
                    <li><a href='/#'><FontAwesomeIcon icon={faFacebook} className='icons'/></a></li>
                    <li><a href='/#'><FontAwesomeIcon icon={faInstagram} className='icons' /></a></li>
                    <li><a href='/#'><FontAwesomeIcon icon={faTiktok} className='icons' /></a></li>
                    <li><a href='/#'><FontAwesomeIcon icon={faPinterest} className='icons' /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer