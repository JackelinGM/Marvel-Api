import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import InputCharacters from "./InputCharacters";
import CardCharacters from "./CardCharacters";


//https://gateway.marvel.com:443/v1/public/characters?apikey=08cbb542b1b01c7403a10540c265cd85
// Tu clave pública 08cbb542b1b01c7403a10540c265cd85
// Tu clave privada 720d0456eea2603609af88e34e9adbd4697bfa4a
// ts:1720d0456eea2603609af88e34e9adbd4697bfa4a08cbb542b1b01c7403a10540c265cd85
// 1
//hash d4e759a7e0a05f076a6a24b153b59600

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [cards, setCards] = useState([]);
  const [limit, setLimit] = useState(20);
  const [newOffset, setNewOffset] = useState(0);
  const [search, setSearch] = useState("");

  const inicialUrl =
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=08cbb542b1b01c7403a10540c265cd85&hash=d4e759a7e0a05f076a6a24b153b59600";

  console.log(limit, "limit");

  const consultData = (url, range, offset) => {
    axios
      .get(`${url}&limit=${limit}${offset ? "&offset=" + newOffset : ""}`)
      .then((response) => {
        setLimit(limit + range);
        setNewOffset(newOffset + offset);
        setCards(response.data.data.results);
        setCharacters(response.data.data.results);
      });
  };
  console.log(characters);

  const pageChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
    FilterCharacters(e.target.value);
  };
  const FilterCharacters = (word) => {
    const result = cards.filter((item) => {
      const charactersFiltered = item.name
        .toString()
        .toLowerCase()
        .includes(word.toLowerCase());
      return charactersFiltered;
    });
    setCharacters(result);
  };

  /* Filter by alphabetical order */
  const sortAsc = () => {
    const asc = [...characters].sort((a, b) => a.name.localeCompare(b.name));
    setCharacters(asc);
  };

  const sortDes = () => {
    const des = [...characters].sort((a, b) => b.name.localeCompare(a.name));
    setCharacters(des);
  };

  useEffect(() => {
    consultData(inicialUrl, 20, null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // llamamos a onScroll cuando el usuario hace scroll

  return (
    <div className="container ">
      {<InputCharacters pageChange={pageChange} />}
      <div className="d-flex justify-content-evenly">
        <button className="btn btn-outline-danger" onClick={sortAsc}>
          ascendente
        </button>
        <button className="btn btn-outline-danger" onClick={sortDes}>
          descendente
        </button>
      </div>
      <CardCharacters characters={characters} setCharacters={setCharacters} />
      <div className="d-flex justify-content-center m-3">
        <button
          className="btn btn-danger"
          onClick={() => consultData(inicialUrl, 20, 20)}
        >
          get more character
        </button>
      </div>
    </div>
  );
};

export { Characters };
