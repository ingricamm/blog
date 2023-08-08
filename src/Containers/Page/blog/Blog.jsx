
import BlogCategories from "Components/blog/BlogCategories";
import BlogList from "Components/blog/BlogList";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog";

function Blog({ get_blog_list, get_blog_list_page, blog_list }) {
  useEffect(() => {
    get_blog_list();
  }, []);

  return (
    <FullWidthLayout>
      <div className="wrapper">
      <BlogCategories/>
          <div className="title"><h2>Restaurantes</h2></div>
           <BlogList get_blog_list_page={get_blog_list_page} blog_list={blog_list} />
      </div>
    
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({
  blog_list: state.blog.blog_list,
});

export default connect(mapStateToProps, {
  get_blog_list,
  get_blog_list_page,
})(Blog);
