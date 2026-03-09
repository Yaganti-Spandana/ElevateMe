import { useNavigate } from "react-router-dom";
import '../Home.css'

const SearchResults = ({results=[]}) => {

  const navigate = useNavigate();

  if(results.length === 0){
    return <div className="no-results">No templates found</div>;
  }

  return (
    <div className="search-results">

      <h3>Templates</h3>

      <div className="search-scroll">

        {results.map((tpl)=>(
          <div key={tpl.id} className="search-card">

            <img
              src={tpl.images[0]}
              alt={tpl.name}
              onClick={()=>navigate(`/editor/${tpl.id}`)}
            />

          </div>
        ))}

      </div>

    </div>
  );

};

export default SearchResults;