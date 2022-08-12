import React from "react";
import { useParams } from "react-router-dom";

import { getLemma } from "../Data/sample-data";

import styles from './Lemma.module.css';

const Lemma = props => {
  let lemmaId = useParams().lemmaId;
  let lemma = getLemma(lemmaId);
  
  if (!lemma)
    return (
      <main className={styles.lemma}>
        <h2>Lemma</h2>
        <p>Select a lemma...</p>
      </main>
    );
  
  return (
    <main className={styles.lemma}>
      <h2>Lemma</h2>
      <p>{lemma.original}</p>
      <p>{lemma.transliteration}</p>
      <p>{lemma.translation}</p>
    </main>
  );
};

export default Lemma;