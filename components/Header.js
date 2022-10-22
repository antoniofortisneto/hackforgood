import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import MyContext from '../context/MyContext';
import '../Style/header.css';

export default function Header({ title, showSearch }) {
  const [search, setSearch] = useState(false);
  const {
    handleRadioChange,
    handleInputChange,
    handleSearchMeals,
    handleSearchDrinks,
  } = useContext(MyContext);

  const history = useHistory();
  function profilePush() {
    history.push('/profile');
  }
  return (
    <header
      className="header"
    >
      <input
        type="image"
        src={ profileIcon }
        alt="profileIcon"
        data-testid="profile-top-btn"
        onClick={ profilePush }
      />
      <h1
        data-testid="page-title"
        className="page-title"
      >
        { title }
      </h1>
      { showSearch
        && <input
          className="image-hearder"
          type="image"
          src={ searchIcon }
          alt="searchIcon"
          data-testid="search-top-btn"
          onClick={ () => setSearch(!search) }
        /> }
      { search
        && (
          <div className="search-input-hearder">
            <input
              data-testid="search-input"
              type="text"
              onChange={ handleInputChange }
            />
            <label
              className="radio-header"
              htmlFor="ingredient"
            >
              <input
                className="button-ingredient"
                type="radio"
                id="ingredient"
                name="optionsFillters"
                value="Ingredient"
                data-testid="ingredient-search-radio"
                onChange={ handleRadioChange }
              />
              Ingredient
            </label>
            <label
              className="button-name"
              htmlFor="name"
            >
              <input
                type="radio"
                id="name"
                name="optionsFillters"
                value="Name"
                data-testid="name-search-radio"
                onChange={ handleRadioChange }
              />
              Name
            </label>
            <label className="button-firstLetter" htmlFor="firstLetter">
              <input
                type="radio"
                id="firstLetter"
                data-testid="first-letter-search-radio"
                name="optionsFillters"
                value="First Letter"
                onChange={ handleRadioChange }
              />
              First Letter
            </label>
            <button
              className="button-search"
              type="button"
              data-testid="exec-search-btn"
              onClick={ title === 'Foods' ? handleSearchMeals : handleSearchDrinks }
            >
              Search
            </button>
          </div>
        )}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showSearch: PropTypes.bool.isRequired,
};
