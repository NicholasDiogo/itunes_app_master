import React, { useState } from "react";
import HeaderFavourites from "./HeaderFavourites"
import { v4 as uuidv4 } from "uuid";

const Search = () => {
  // State
  const [tunes, newTunes] = useState([]);
  const [text, setText] = useState("");
  const [option, setOption] = useState("");

  // Search onChage
  const onChange = (e) => {
    setText(e.target.value);
  };

  // Entity onSelect
  const onSelect = (e) => {
    setOption(e.target.value);
  };

  // Fetch function to fetch data from backend
  async function fetchData() {
    let search = text;
    await fetch(`api/${search}/${option}`)
      .then((results) => results.json())
      .then((res) => {
        newTunes(res);
      });
  }

  // onSubmit from form
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter a search");
    } else {
      fetchData();
      setText("");
      setOption("");
    }
  };

  // Favourites array
  const [favourites, newFavourites] = useState([]);

  // Delete from Favourites function
  const deleteFavourite = (e) => {
    let delFavourite = e.target.innerText;
    newFavourites(favourites.filter((favourite) => favourite !== delFavourite));
  };

  // Add to Favourites function
  const addToFavourites = (e) => {
    let newFavourite = e.target.innerText;
    newFavourites((favourites) => [...favourites, newFavourite]);
    console.log(favourites);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search iTunes..."
          value={text}
          onChange={onChange}
        />
        <select onChange={onSelect}>
          <option value="select">Select media...</option>
          <option value="movie">Movie</option>
          <option value="podcast">Podcast</option>
          <option value="musicTrack">Music</option>
          <option value="musicVideo">Music Video</option>
          <option value="audiobook">Audio Book</option>
          <option value="shortFilm">Short Film</option>
          <option value="tvShow">TV Show</option>
          <option value="ebook">Ebook</option>
          <option value="software">Software</option>
          <option value="all">All</option>
        </select>
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      
      <div>
        {tunes.map((tune) => (
          <div key={uuidv4()} onClick={addToFavourites}>
            {tune.trackName}
          </div>
        ))}
      </div>
      <HeaderFavourites />
      <div>
        {favourites.map((favourite) => (
          <li key={uuidv4()} onClick={deleteFavourite}>
            {favourite}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Search;
