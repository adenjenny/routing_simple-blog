import BlogPost from "../Components/BlogPost";
import blogData from "../Components/BlogData";
import Nav from "../Components/Nav";
const Blog = () => {
  return (
    <div>
      <Nav />
      <div>
        {blogData.map((post, index) => (
          <BlogPost
            key={"blogData" + index}
            img={post.img_url}
            title={post.title}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
