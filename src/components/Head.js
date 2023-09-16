import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAAC8vLzt7e2ysrJycnIiIiLHx8fw8PCFhYWamprj4+PBwcHNzc3p6em4uLgvLy9CQkI3Nzd/f39qampvb2+Pj4+ioqLa2tpUVFRKSkr29vYYGBirq6smJiY9PT1hYWEPDw9YWFg1kJmwAAACDklEQVR4nO3d7XbBUBCF4UN8NwhRQqro/V9kiR/VH5pZM5Y5R9/nCvZe0ZzEmqkQAAAAAAAAAAAAAAAAAAAAnqvKu3Eajh5RbzTuRGzRNRece3doszVex413gXZFZik49I4vsbA09A4vM9EX3HtnF9I33HlHFxpqC9Yf3tGF1B/TN+/kUn0a3vP6n9LXv9P8g9Pi9U/8kHuHl1gaCoYw8Y7f7nNmahh63gXabE2vFhdZ6d3hL4e5tV+jmvfilD/kWwwAAAAAAAAAAAAAABCVOovUgwYV8tWn90zJXbu1cVzobBb7fOLaWHDqXaDd0VQwiSlh9YTwxcE7vUiuL5jEykynM9A3PHpnF6rUDQfe0YU22oIz7+RSpbZhEnfSi3dtw9HJO7qQ/tRfekcX0g8Kr72jC9XqhiPv6DKWh5oElhHOTC9RK+/0Avqtp0bfO3+rqa3g+QU47htqX3+X+VFtyn6cxl3zwgwAAAAAAAAAAAAAAMBz1ftjMYjTYWwepgnRT+8V1o7ZwrtCK/UIdKOOeyDqam9pmMLgnmVUP1Te2WW2+oZR/5PkG/oFtsI7ulBPW5B9i2io9y1e/xqGeNdjf1P/HSYw5H2lv5cmch7u1AVTWUA0PNOEOoUT0fboPYt/E9jyGyzNVYz6Bx7P74fGjZmLbPN18u5xR1E+oB8AAAAAAAAAAAAAAAAAAABufQPXyzi7ezBe2AAAAABJRU5ErkJggg=="
        />
        <a href="/">
          <img
            className="h-6 mx-3"
            alt="logo"
            src="data:image/png;base64,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"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div className="flex">
          <input
            className="px-5 w-1/2 border border-gray-400 rounded-l-3xl p-2"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-3xl">
            🔍
          </button>
          <img
            className="h-11 mx-3 py-3 px-3 rounded-3xl border border-gray-400 bg-gray-100"
            alt="mic"
            src="data:image/png;base64,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"
          />
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-1/3 shadow-lg rounded-lg border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li className="py-2 px-2 shadow-sm hover:bg-gray-100">{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
        />
      </div>
    </div>
  );
};

export default Head;
