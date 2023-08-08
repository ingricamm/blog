import "./style/homePage.css";
import Description from "Components/Description";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import Cards from "Components/Cards";
import logo from "../../Components/img/Logo-nombre.png";
function Homepage() {

  
  return (
    <FullWidthLayout>
      <div className="home-container">
        <div className="home-header-content">
          <div className="Autor">
            <img src={logo} className="logo" alt="sprad" />
          </div>
        </div>

        <div className="home-main-content">
          <div className="main-content">
            <Description />
            <Cards />
          </div>
        </div>
      </div>
    </FullWidthLayout>
  );
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Homepage);
