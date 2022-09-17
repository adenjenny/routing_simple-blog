import "../Components/Home.css";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
const Home = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="home-content">
        <h1>
          Welcome to my<br></br> simple Blog
        </h1>
        <button>
          <Link to="/blog">Go to articles</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
