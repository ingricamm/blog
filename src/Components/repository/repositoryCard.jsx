import { Link } from "react-router-dom";
import "../style/card.css";

function RepositoryCard(data) {
  let repository = data && data.data;
  console.log(data);
  return (
    <div>
      <div className="blog-card">
        <div className="blog-card-media">
          <img src={repository.thumbnail} alt="" />
        </div>
        <div className="blog-card-header">
          <div>
            <div>
              <Link to={`/blog/categories/${repository.category.id}`}>
                {repository.category.name}
              </Link>
            </div>
            <Link to={`/blog/post/${repository.slug}`}>
              <p>{repository.title}</p>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepositoryCard;
