import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addFav, removeFav } from "../features/favSlice";
import { useDispatch, useSelector } from "react-redux";
import './Show_content.css';
function Show_content() {
  let { search } = useParams({});
  const [info, setInfo] = useState("");
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.fav.favs);

  useEffect(() => {
    async function content() {
      const res = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${search}?redirect=true`
      );

      const data = await res.json();
      console.log(data);
      setInfo(data);
    }
    content();
  }, [search]);

  const handleClick = () => {
    dispatch(addFav(info.title));
  };

  const handleRemove = () => {
    dispatch(removeFav(info.title));
  };

  return (
    <div className="body">
      {favs.includes(info.title) ? (
        <button onClick={handleRemove} className="remove">Remove Favorites</button>
      ) : (
        <button onClick={handleClick} className="add">Add to Favorites</button>
      )}
      <h1>{info.title}</h1>
      <p>{info.extract}</p>
    </div>
  );
}

export default Show_content;
