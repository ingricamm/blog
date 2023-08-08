import LoadingCard from "Components/loader/LoadingCard";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_blog } from "redux/actions/blog";

function BlogPost({ get_blog, post }) {
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    get_blog(slug);
  }, []);

  return (
    <FullWidthLayout>
      {post ? (
        <div className="blog-post">
          <div>
            <h1>

              <span>{post.title}</span>
            </h1>
            
            <p>{post.excerpt}</p>
          </div>

          <div className="description">
            <p>{post.description}</p>
          </div>
        </div>
      ) : (
        <LoadingCard />
      )}
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({
  post: state.blog.post,
});

export default connect(mapStateToProps, {
  get_blog,
})(BlogPost);
