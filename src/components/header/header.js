
import './header.css'

const Header = () => {
    return(
        <header className="header">
            <h3><a className="logo text-dark">Hacker News</a></h3>
            <ul className="d-flex">
                <li >
                    <a className="btn btn-outline-success" href="#">Button</a>
                </li>
            </ul>
        </header>
    )
}

export default Header