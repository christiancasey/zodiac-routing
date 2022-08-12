import React from "react";
import { useSearchParams } from "react-router-dom";

import QueryNavLink from './QueryNavLink';

import { getLemmataList } from '../Data/sample-data';
import { searchLemma } from '../Functions/searchLemmata';

import styles from './Content.module.css';

const LemmataList = props => {
  let lemmataList = getLemmataList();
  let [searchParams] = useSearchParams();
  
  const [lemmataSortField, setLemmataSortField] = React.useState('original');
  
  function sortLemmata(sortField) {
    console.log('sort by: ' + sortField);
    setLemmataSortField(sortField);
  }
  
  // Filter the lemmata list using both the search term and the selected languages
  let lemmataFiltered = lemmataList
    .filter(lemma => {
        let search = searchParams.get('search') || '';
        if (!search) return true;
        return searchLemma(lemma, search);
      })
    .filter(lemma => 
      props.languages.some(language => (
          language.active 
          && language.value === lemma.language
          && lemma.original !== '?'
        )
      ));
  
  // Use the field set with the 'Sort by' buttons to sort
  lemmataFiltered.sort((a, b) => 
    (a[lemmataSortField].toLowerCase() < b[lemmataSortField].toLowerCase() ? -1 : 1)
  );
  
  return (
    <>
      <h2>Lemmata</h2>
      <div className={styles.sortButtons}>
        Sort by: 
          <button className={styles.sortButtons} onClick={e => sortLemmata('original')}>Dictionary</button>
          <button className={styles.sortButtons} onClick={e => sortLemmata('transliteration')}>Transliteration</button>
          <button className={styles.sortButtons} onClick={e => sortLemmata('translation')}>Translation</button>
          {/* <button className={styles.sortButtons} onClick={e => props.sortLemmata('language')}>Language</button> */}
      </div>
      {lemmataFiltered
        .map(lemma => (
        <QueryNavLink style={({ isActive }) => {
              return { display: "block", margin: "1rem 0", filter: isActive ? "drop-shadow(0 0 3px #ffe8)" : ""};
            }}
          to={lemma.lemmaId} 
          key={lemma.lemmaId}
        >
          {lemma.original} | {lemma.transliteration} | {lemma.translation}
        </QueryNavLink>
      ))}
    </>
  );
};

export default LemmataList;