import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
function Home() {
  const [searchBar, setSearchBar] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const favs = useSelector((state) => state.fav.favs);
  let navigate = useNavigate();
  async function handleSearch() {
    const res = await fetch(
      `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${searchBar}&format=json`
    );
    const data = await res.json();
    setSearchResult(data.query.search);
  }

  const handleClick = (title) => {
    navigate(`/Show_content/${title}`);
  };

  return (
    <div className="home">
      <h1 className="search">Search Engine</h1>
      <input
        type="text"
        placeholder="Enter your search here"
        className="input"
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <button className="search_button" onClick={handleSearch}>
        Search
      </button>

      {searchResult.length > 0 && (
        <div>
          <h1>Click On Any Link Below To View The Results</h1>

          <ul>
            {searchResult.map((search) => (
              <li
                className="list"
                key={search.title}
                onClick={() => handleClick(search.title)}
              >
                {search.title}
              </li>
            ))}
          </ul>
        </div>
      )}
      {favs.length> 0  ? <h1>Your Favorites</h1> : <></>}

      <ul>
        {favs.map((item) => (
          <li key={item} onClick={()=> handleClick(item)} className="favList" >
           {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
