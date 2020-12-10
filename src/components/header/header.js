import {Link} from 'react-router-dom'

import './header.css'

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <h3><Link to="/" className="logo">Hacker News</Link></h3>
            </div>
        </header>
    )
}

export default Header