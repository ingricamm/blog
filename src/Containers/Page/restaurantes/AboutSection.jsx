
import LoadingCard from "../../../Components/loader/LoadingCard";
import RecetaPost from "./RecetaPost";
//import { get_about_list } from "redux/actions/about";

function RecetaSection({ recetas }) {
  return (
    <div>
      {recetas ? (
        <div>
          <div className="about">
            {recetas.map((recetas) => (
              <div>
                <div >
                  <RecetaPost data={recetas} />
                </div>
             
              </div>
            ))}
          </div>  
         
        </div>
      
      ) : (
        <LoadingCard />
      )}
    </div>
  );
}

export default RecetaSection;
