import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { get_categories } from "redux/actions/categories";
import "../style/Blog_page.css";

function BlogCategories({ get_categories, categories }) {
  useEffect(() => {
    get_categories();
  }, []);

  return (
    <>
      <div className="categorias">
        <h2>Categorias</h2>
      </div>

      <div className="category_list">
        {categories ? (
          categories.map((category) => (
            <Link to={`/blog/categories/${category.id}`}>
              <div className="category-card">
                <img
                  src={process.env.REACT_APP_API_URL + category.thumbnail}
                  alt=""
                />
                <span className="category_name">{category.name}</span>
              </div>{" "}
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps, {
  get_categories,
})(BlogCategories);
