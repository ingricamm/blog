import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_repository_list,  get_repository_list_page} from "../../redux/actions/repository"
import RepositoryList from "./RepositoryList";

function Repositorio({ get_repository_list, get_repository_list_page,  repository_list }) {
  useEffect(() => {
    get_repository_list();
  }, []);

  return (
    <FullWidthLayout>
      <div className="wrapper">
    
          <div className="title"><h1>Repository</h1></div>
           <RepositoryList  get_repository_list_page={ get_repository_list_page} repository_list={repository_list} />
      </div>
    
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({
  repository_list: state.Repository.repository_list,
});

export default connect(mapStateToProps, {
  get_repository_list,
  get_repository_list_page,
})(Repositorio);
