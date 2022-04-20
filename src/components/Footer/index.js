import './footer.css';
import './copyright.css';

import Logo from '../Logo';
import FeedBack from '../FeedBackForm';
import Nav from '../Nav';

function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer>
            <div className="copyright">&copy; Copyright - EsyUm &nbsp; <span className="year">{year}</span> &nbsp; Stavtseva Ekaterina</div>
        </footer>

    )
}

export default Footer;