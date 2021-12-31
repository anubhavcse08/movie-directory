import React from 'react';


const Search = (props) => {
    const handleSearch = (e) => {
        props.onHandleSearch(e.target.value);
    }
    return (
        <React.Fragment>
            <label className="labels" >Search Movie Name</label><br />
            <input className="input-field" onChange={handleSearch} type="text" id="search-input" placeholder="Search your favorite movie" />
        </React.Fragment>
    )
}

export default Search;
