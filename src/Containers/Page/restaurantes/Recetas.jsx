import { useEffect } from "react";
import { connect } from "react-redux";
import "../style/about.css";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import AboutSection from "./AboutSection";
import { get_recetas_list } from "redux/actions/recetas";


function RecetasPage({ get_recetas_list, restaurates }) {


  useEffect(() => {
    
    get_recetas_list();
  }, []);

  return (
    <>
      <FullWidthLayout>
        <AboutSection
          recetas={restaurates} get_receta_list={get_recetas_list} 
        />
      </FullWidthLayout>
    </>
  );
}
const mapStateToProps = (state) => ({
  recetas: state.recetas.recetas,
});

export default connect(mapStateToProps, {
  get_recetas_list,
})(RecetasPage);
