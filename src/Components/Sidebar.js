import React from "react";
import { useSearchParams } from "react-router-dom";

import Search from './Search';
import LanguageList from './LanguageList';
import LemmataList from './LemmataList';

import { languageOptions } from '../Data/options';

import styles from './Content.module.css';

const Sidebar = props => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [languages, setLanguages] = React.useState(getLanguageList(languageOptions));
  
  // Get language list from search params
  // Default is true if the language is not yet defined in the query string
  function getLanguageList(languageOptions) {
    let languages = languageOptions.map(language => {
      let active = searchParams.get(language.value);
      if (active) {
        active = active==='true';
      } else {
        active = true;
      }
      return {
        id: language.id,
        value: language.value,
        label: language.label,
        active: active,
      }
    });
    return languages;
  };
  
  const selectLanguage = id => {
    let newLanguages = languages.map(language => {
      if (language.id === id)
        return {
          ...language,
          active: !language.active,
        };
      return language;
    });
    
    // Add language values to search params while keeping existing search value
    let newSearchParams = Object.fromEntries([...searchParams]);
    for (const language of newLanguages) {
      newSearchParams[language.value] = language.active;
    }
    setSearchParams(newSearchParams);
    
    setLanguages(newLanguages);
  };
  
  return (
    <nav className={styles.sidebar}>
      <Search />
      <LanguageList languages={languages} selectLanguage={selectLanguage} />
      <LemmataList languages={languages} />
    </nav>
  );
};

export default Sidebar;