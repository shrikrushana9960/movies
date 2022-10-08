import React from "react";
import { constants } from "../../constants/constants";
import styles from "./sub_styles/movieItem.module.scss";
import { Tooltip } from "antd";
import { BsPeople } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import Link from "next/link";
const MovieItem = ({ item }) => {
  return (
    <Link href={"/movie/"+item.id}>
    <div className={styles.MovieItem}>
      <div className={styles.poster}>
        <img src={constants.IMAGEURL + item.poster_path} alt={item.original_title} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{item.original_title}</p>
        <Tooltip title={item.overview}>
          <p className={styles.desc}>{item.overview}</p>
        </Tooltip>
        <div className={styles.rate}>
          <p className={styles.langauge}>
            <i>
              <FaLanguage />
            </i>
            {item.original_language}
          </p>
          <p className={styles.rating}>
            <i>
              <BsPeople />
            </i>
            {item.vote_average}({item.vote_count})
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default MovieItem;
