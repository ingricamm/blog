import "./style/Cards.css";
import Card from "./Card";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_categories } from "redux/actions/categories";
import { Link } from "react-router-dom";

function Cards({ get_categories, categories }) {
  useEffect(() => {
    get_categories();
  }, []);

  return (
    <>
      <div>
        <div className="card-panel">
          <h2>Temáticas</h2>
          <ul className="Cards ">
            {categories ? (
              categories.map((category) => (
                <li key={category.id}>
                  <Link to={`/blog/categories/${category.id}`}>
                  <Card
                    image={process.env.REACT_APP_API_URL + category.thumbnail}
                    nombre={category.name}
                  /></Link>
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps, {
  get_categories,
})(Cards);
