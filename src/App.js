import React from 'react';
import { Routes, Route } from "react-router-dom";

import styles from './Components/Content.module.css';

import StarHeader from './Components/StarHeader';
import Content from './Components/Content';
import Lemma from './Components/Lemma';

function App() {
  return (
    <>
      <StarHeader />
      <Routes>
        <Route path="/" element={<Content />}>
          <Route className={styles.lemma} index element={<Lemma />} />
          <Route className={styles.lemma} path=":lemmaId" element={<Lemma />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
