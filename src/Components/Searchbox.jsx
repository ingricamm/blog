import {useState} from "react";
import "./style/searchbox.css"


function Searchbox() {
  // SEARCH
  const [effectSearch, setEffectSearch] = useState(false);
  const [term,setTerm]=useState('')

  const handleChange=e=>{
    setTerm(e.target.value)
  }

  const onSubmit= e =>{
    e.preventDefault()
    setTimeout(() => window.location.href=('/search/'+term), 0.2);
    setTerm('')
  }

  return (
    <>
      <div className="search">
        <form className="search-form" onSubmit={e=>onSubmit(e)}>
          <input type="text" placeholder="Search " onChange={(e)=>{handleChange(e)}}/>
          <button className="search-Btn" type="submit">
            <i className="fa fa-search" ></i>
          </button>
        </form>
      </div>
    </>
  );
}
export default Searchbox;
