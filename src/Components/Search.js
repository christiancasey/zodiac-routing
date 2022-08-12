import React from "react";
import { BsKeyboardFill } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";

import styles from './Lemma.module.css';

const Search = props => {
  let [searchParams, setSearchParams] = useSearchParams();
  
  let search = searchParams.get('search') || '';
  
  function addSearchParam(event) {
    let search = event.target.value;
    let newSearchParams = Object.fromEntries([...searchParams]);
    newSearchParams.search = (search ? search : '');
    setSearchParams(newSearchParams);
  }
  
  const keyboardClick = e => {
    // props.setKeyboard(prevKeyboard => !prevKeyboard);
    console.log('keyboard button click');
  };
  
  return (
    <>
      <h2>Search</h2>
      <input
        className={styles.inputSearch}
        type="text"
        placeholder="lemma..."
        value={search}
        onChange={event => addSearchParam(event)}
      />
      <button
        className={styles.searchKeyboard}
        onClick={() => keyboardClick()}
      >
        <BsKeyboardFill />
      </button>
    </>
  );
};

export default Search;