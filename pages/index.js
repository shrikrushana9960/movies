import Head from "next/head";
import Movies from "../components/Movies/Movies";
import styles from "../styles/Home.module.css";
import { constants } from "../constants/constants";
import axios from "axios";
export async function getServerSideProps() {
  let result = [];
  let total_results = 0;
  try {
    let data = { page: 1 };
    const res = await axios.post(
      constants.LOCALURL + "movies/get_movies",
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
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        result: [],
        total_results: 0,
      },
    };
  }
}
export default function Home({ total_results, result }) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {result && <Movies total_results={total_results} result={result} />}
      </main>
    </div>
  );
}
