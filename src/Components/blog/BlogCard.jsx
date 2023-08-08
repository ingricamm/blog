import { Link } from "react-router-dom";
import "../style/card.css";

function BlogCard(data) {
  let post = data && data.data;
  console.log(post.thumbnail)
  console.log(data);
  return (
    <div>

      <div className="blog-card">
        <div className="blog-card-media">
        
          <img src={process.env.REACT_APP_API_URL+post.thumbnail} alt="img"  />

        </div>
        <div className="blog-card-header">
          <div>
            <div>
              <Link to={`/blog/categories/${post.category.id}`}>
                {post.category.name}
              </Link>
            </div>
            <br></br>
            <Link to={`/blog/post/${post.slug}`}>
              <h3>{post.title}</h3>
              <p className="description">{post.excerpt}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
