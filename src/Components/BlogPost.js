import "../Components/BlogPost.css";
import { Link } from "react-router-dom";
const BlogPost = (props) => {
  return (
    <div className="blog-post">
      <img src={props.img} alt="#"></img>
      <h3>{props.title}</h3>
      <button>
        <Link to={`/blog/${props.id}`}>Read more</Link>
      </button>
    </div>
  );
};

export default BlogPost;
