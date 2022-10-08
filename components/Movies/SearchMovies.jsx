import styles from "./sub_styles/movies.module.scss";
import { Input, Divider, List, Skeleton, Affix } from "antd";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { constants } from "../../constants/constants";
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";
import TopBar from "./TopBar";

const SearchMovies = ({ result, total_results,keyword }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const { Search } = Input;


  const loadMoreData = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    setPage(page + 1);
    let info = { page: page + 1,keyword:keyword };
    const res = await axios
      .post(constants.LOCALURL + "movies/search_movies", info)
      .catch(() => {
        setLoading(false);
      });
    if (res.data.data) {
      let body = res.data.data.data;
      setData([...data, ...body.results]);
      setLoading(false);
    }
  };

  useEffect(() => {
    setData(result);
  }, []);
  return (
    <>
    <TopBar title={keyword}/>
    <div
      id="scrollableDiv"
      style={{
        height: "100vh",
        overflow: "auto",
        padding: "20px 16px",
        width:"100%",
      overflowX:"hidden",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
   

      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < total_results}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
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
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item />
              <MovieItem item={item} />
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
    </>
  );
};

export default SearchMovies;
