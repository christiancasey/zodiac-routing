import React from 'react';
import { Outlet } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

import styles from './Content.module.css';

import Sidebar from './Sidebar';


const Content = props => {
  return (
    <div className={styles.content}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Content;