import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './Search.module.css';
const Search = () => {
  return (
    <div className={styles.nav_searchbar_wrapper}>
      <form className={styles.nav_form}>
        <div className={styles.form_control}>
          <input type="text" />
        </div>
        <button type="submit">
          <FaSearch color="white" />
        </button>
        <div className={styles.autocomplete_result}>
          <div className="s-suggestion-container">
            <div
              className={styles.suggestion}
              role="button"
              aria-label="iphone"
            >
              ip<span className="s-heavy">hone</span>
            </div>
          </div>
          <div className="s-suggestion-container">
            <div
              className={styles.suggestion}
              role="button"
              aria-label="iphone 13 case"
            >
              ip<span className="s-heavy">hone 13 case</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
