import { Link } from "react-router-dom";
import "../Components/Nav.css";
const Nav = () => {
  return (
    <nav>
      <div>
        <h2>My Life</h2>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
