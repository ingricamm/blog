import "../style/grid-style.css";
import LoadingCard from "Components/loader/LoadingCard";
import { connect } from "react-redux";
import BlogCard from "./BlogCard";
import SmallSetPagination from "Components/pagination/SmallSetPagination";


function BlogList({ blog_list, get_blog_list_page, count }) {
  return (
    <div>
      {blog_list ? (
        <>
          <div>
            <div className="home-hero">
            
              {blog_list.map((post) => (
                <BlogCard data={post} />
              ))}
            </div>
          </div>
          <SmallSetPagination
            get_blog_list_page={get_blog_list_page}
            count={count}
          />
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
