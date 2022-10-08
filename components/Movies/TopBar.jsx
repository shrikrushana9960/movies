import React from 'react'
import SearchBar from './SearchBar'
import { Layout } from 'antd'
import styles from "./sub_styles/topbar.module.scss"
const TopBar = ({title}) => {
    const { Header} = Layout;
  return (
    <div> <div className={styles.topbar}>
    <p className={styles.title}>{title}</p>
     <div className={styles.search}>
        <SearchBar />
        </div>
      </div></div>
  )
}

export default TopBar