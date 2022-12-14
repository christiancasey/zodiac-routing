import React from 'react';
import { Routes, Route } from "react-router-dom";

import styles from './Components/Content.module.css';

import StarHeader from './Components/StarHeader';
import Content from './Components/Content';
import Lemma from './Components/Lemma';
import UserContext from './Contexts/UserContext';

function App() {
  const [user, setUser] = React.useState({token: localStorage.getItem('token')});
  
  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      <StarHeader />
      <Routes>
        <Route path="/zodiac-routing/" element={<Content />}>
          <Route className={styles.lemma} index element={<Lemma />} />
          <Route className={styles.lemma} path=":lemmaId" element={<Lemma />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
