import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>React Blog App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit corrupti, molestiae quia esse tenetur modi soluta, nemo sapiente doloremque possimus magnam natus odio quaerat optio ad iusto rem eum ex?
            </div>
        </nav>
     );
}
 
export default Navbar;