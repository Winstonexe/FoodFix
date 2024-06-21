import React from "react";

const SearchParameters: React.FC = () =>{
    return(
        <div className="search-parameters">
            <button className="parameter-btn">Pasta</button>
            <button className="parameter-btn">Chicken</button>
            <button className="parameter-btn">Pork</button>
            <button className="parameter-btn">Meat</button>
            <button className="parameter-btn">Beef</button>
            <button className="parameter-btn">Potato</button>
        </div>
    )
}

export default SearchParameters;