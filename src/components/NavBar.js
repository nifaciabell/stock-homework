import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div>
      <nav className="nav">
    <Link to="/">
      <div>Homepage</div>
    </Link>

    <Link to="/about">
      <div>About</div>
    </Link>
    

  </nav> 
    </div>
  );
}

export default NavBar;