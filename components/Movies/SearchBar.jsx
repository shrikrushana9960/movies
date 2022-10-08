import React from "react";
import { useRouter } from "next/router";
import { Input } from "antd";
import styles from "./sub_styles/topbar.module.scss"
const SearchBar = () => {
  const router = useRouter();
  const { Search } = Input;
  const onSearch = (value) => {
    router.push("/search?query=" + value);
    console.log(value);
  };
  return (
    <div>
      {" "}
      <Search
        placeholder="input search text"
       className={styles.search}
        enterButton="Search"
        onSearch={onSearch}
      />
    </div>
  );
};

export default SearchBar;
