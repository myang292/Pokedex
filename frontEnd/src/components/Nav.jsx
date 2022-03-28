import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='pokemon'>Pokemon</Link>
                <Link to='poketypes'>Types of Pokemon</Link>
            </nav>
        </header>
    )
}

export default Nav