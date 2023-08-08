import LoadingCard from "Components/loader/LoadingCard";
import { connect } from "react-redux";
import BlogCard from "./BlogCard";
import CategoriesSmallSetPagination from "Components/pagination/CategoriesSmallSetPagination";

function BlogList({ blog_list, get_blog_list_page, count, category_id }) {
  return (
    <div>
      {blog_list ? (
        <>
          <div>
            <div>
              <div />
            </div>
            <div className="wrapper">
              <div className="home-hero">
                {blog_list.map((post) => (
                  <BlogCard data={post} />
                ))}
              </div>
              <CategoriesSmallSetPagination
                get_blog_list_page={get_blog_list_page}
                blog_list={blog_list}
                count={count}
                category_id={category_id}
              />
            </div>
          </div>{" "}
        </>
      ) : (
        <LoadingCard />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.blog.count,
});

export default connect(mapStateToProps, {})(BlogList);
