//Jest or Mocha
import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((resp) => {
      setMovies(resp.data.results);
    });
  }, []);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        {movie && (
          <img
            className="h-full w-full object-fill"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt="movie?.title"
          />
        )}
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl font-bold md:text-5xl">{movie?.title}</h1>
          <div className="my-4">
            <button className="border rounded text-black bg-gray-300 px-5 py-1 mr-4 border-gray-300">
              Play
            </button>
            <button className="border rounded text-white-300 px-5 py-2 border-gray-300">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="text-gray-200 w-full xl:max-w-[35%] lg:max-w-[50%] md:max-w-[70%] ">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
