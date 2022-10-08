import React from "react";
import Head from "next/head";
import { constants } from "../../../constants/constants";
import axios from "axios";
import MovieDetails from "../../../components/Details/MovieDetails";
export async function getServerSideProps(context) {
  let movie ,result= {};
  console.log(context.params.id);
  try {
    let data = { id: context.params.id };
    
    const res = await axios.post(constants.LOCALURL + "movies/get_movie", data);
    let info = { page: 1 };
    const response = await axios.post(
      constants.LOCALURL + "movies/get_movies",
      info
    );
    if (response.data.data) {
      result = response.data.data.data.results;
      
    }
    console.log(res.data.data);
    if (res.data.data) {
      movie = res.data.data.data;
    }
    return {
      props: {
        movie: movie,
        result:result
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        movie: [],
        result:[]
      },
    };
  }
}

const MovieInfo = ({ movie,result }) => {
  return (
    <>
      <Head>
        <title>{movie.original_title}</title>
        <meta name="description" content={movie.overview} />
        <link rel="icon" href={constants.IMAGEURL + movie.poster_path} />
      </Head>
      <div>
        <MovieDetails movie={movie} movies={result}/>
      </div>
    </>
  );
};

export default MovieInfo;
