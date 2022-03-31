import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <header>
            <nav>
                <Link to='/'>Home</Link>
                &nbsp;
                <Link to='pokemon'>Pokemon</Link>
                &nbsp;
                <Link to='poketypes'>Types</Link>
            </nav>
        </header>
    )
}

export default Nav