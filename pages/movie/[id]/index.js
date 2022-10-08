import React from "react";
import Head from "next/head";
import { constants } from "../../../constants/constants";
import axios from "axios";
import MovieDetails from "../../../components/Details/MovieDetails";
export async function getServerSideProps(context) {
  let movie = {};
  console.log(context.params.id);
  try {
    let data = { id: context.params.id };
    const res = await axios.post(constants.LOCALURL + "movies/get_movie", data);
    console.log(res.data.data);
    if (res.data.data) {
      movie = res.data.data.data;
    }
    return {
      props: {
        movie: movie,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        movie: [],
      },
    };
  }
}

const MovieInfo = ({ movie }) => {
  return (
    <>
      <Head>
        <title>{movie.original_title}</title>
        <meta name="description" content={movie.overview} />
        <link rel="icon" href={constants.IMAGEURL + movie.poster_path} />
      </Head>
      <div>
        <MovieDetails movie={movie} />
      </div>
    </>
  );
};

export default MovieInfo;
