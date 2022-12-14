import React from "react";
import Head from "next/head";
import { constants } from "../../constants/constants";
import axios from "axios";
import MovieDetails from "../../components/Details/MovieDetails";
import Movies from "../../components/Movies/Movies";
import SearchMovies from "../../components/Movies/SearchMovies";
export async function getServerSideProps(context) {
  let result = [];
  let total_results = 0;
  try {
    let data = { page: 1,keyword:context.query.query };
    const res = await axios.post(
      constants.LOCALURL + "movies/search_movies",
      data
    );
    if (res.data.data) {
      result = res.data.data.data.results;
      total_results = res.data.data.data.total_results;
    }
    return {
      props: {
        result: result,
        total_results: total_results,
        keyword:context.query.query
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        result: [],
        keyword:"",
        total_results: 0,
      },
    };
  }
}

const MovieInfo = ({  total_results, result ,keyword }) => {
  return (
    <>
      <div >
      <Head>
        <title>{keyword}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {result && <SearchMovies keyword={keyword} total_results={total_results} result={result} />}
      </main>
    </div>
    </>
  );
};

export default MovieInfo;
