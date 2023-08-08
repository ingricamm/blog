import "../../Components/style/grid-style.css";
import LoadingCard from "Components/loader/LoadingCard";
import { connect } from "react-redux";
import SmallSetPagination from "Components/pagination/SmallSetPagination";
import RepositoryCard from "Components/repository/repositoryCard";


function RepositoryList({ repository_list, get_repository_list_page, count }) {
  return (
    <div>
      {repository_list ? (
        <>
          <div>
            <div className="home-hero">
              {repository_list.map((repository) => (
                <RepositoryCard data={repository} />
              ))}
            </div>
          </div>
          <SmallSetPagination
            get_repository_list_page={get_repository_list_page}
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
  count: state.repository.count,
});

export default connect(mapStateToProps, {})(RepositoryList);
