import React from "react";
import { constants } from "../../constants/constants";
import styles from "./sub_styles/moviedetails.module.scss";
import TopBar from "../Movies/TopBar";
import { Tag,List, Divider } from "antd";
import MovieItem from "../Movies/MovieItem";
const MovieDetails = ({ movie,movies }) => {
  console.log(movie);
  return (
    <>
      <TopBar title={movie.title} />
      <div className={styles.moviesdetails}>
        <div
          style={{
            backgroundImage: `url("${
              constants.IMAGEURL + movie.backdrop_path
            }")`,
          }}
          className={styles.info}
        >
          <img
            src={constants.IMAGEURL + movie.poster_path}
            className={styles.poster}
            alt={movie.title}
          />
          <div className={styles.desc}>
            <p className={styles.title}>
              {movie.title} ({movie.release_date.split("-")[0]}){" "}
              <Tag color="#2db7f5">{movie.status}</Tag>
            </p>
            <p> {movie.tagline} </p>

            <div className={styles.production}>
              {movie.production_companies.map((item) => (
                <div className={styles.production_card} key={item.logo_path}>
                  {" "}
                  <img
                    src={constants.IMAGEURL + item.logo_path}
                    className={styles.logo}
                    alt={movie.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className={styles.overview}>{movie.overview}</p>
        <div className={styles.data}>
          {movie.spoken_languages.map((item) => (
            <p key={item.english_name} className={styles.language}>{item.english_name}</p>
          ))}
        </div>
        <Divider/>
        <p className={styles.title}> Popular movies</p>
        <List
            grid={{
              gutter: 10,
              xs: 2,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 5,
              xxl: 6,
            }}
            dataSource={movies}
            renderItem={(item) => (
              <List.Item key={item.email}>
                <List.Item />
                <MovieItem item={item} />
              </List.Item>
            )}
          />
      </div>
    </>
  );
};

export default MovieDetails;
