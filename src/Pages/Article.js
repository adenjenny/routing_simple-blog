import { useParams } from "react-router-dom";
import blogData from "../Components/BlogData";
import Nav from "../Components/Nav";
import "../Components/Article.css";

const DetailPage = () => {
  let params = useParams();
  let props = blogData[params.id];
  return (
    <div>
      <Nav />
      <div className="main-container">
        <img src={props.img_url} alt="#"></img>
        <div className="flex-container">
          <h2>{props.title}</h2>
          <p>{props.published_date}</p>
        </div>
        <div className="info-container">
          <p>{props.description}</p>
          <h3>{props.author}</h3>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
