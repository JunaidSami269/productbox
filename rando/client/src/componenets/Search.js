import React, { useState } from 'react'

function Search({searchItem}) {

    const [searchInput, setSearchInput] = useState("search here...");

    const handleChange = (e)=>{
        //handle
        setSearchInput(e.target.value);

    }

    const handleClick = ()=>{
        searchItem(searchInput);
    }

    return (
        <>
        <input type="search" value={searchInput} onChange={handleChange}/>
        <button onClick={handleClick}>Search</button>
        </>
    )
}

export default Search