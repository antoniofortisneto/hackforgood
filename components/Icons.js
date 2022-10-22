import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/whiteHeartIcon.svg';
import favoriteIconBlack from '../images/blackHeartIcon.svg';

export default function Icons({ data }) {
  const [showMessage, setshowMessage] = useState(false);
  const { url } = useRouteMatch();
  const favoriteStorage = localStorage.getItem('favoriteRecipes')
    ? JSON.parse(localStorage.getItem('favoriteRecipes')) : null;

  const ShareTo = () => {
    // ref pesquisa: navigator.clipboard.writeText('Copy this text to clipboard')
    navigator.clipboard.writeText(`http://localhost:3000${url}`);
    setshowMessage(true);
  };

  const toggleIcon = ({ target }) => {
    const targetSrc = target.src;
    if (targetSrc.includes('blackHeartIcon')) {
      document.querySelector('.favorite').src = favoriteIcon;
      localStorage.removeItem('favoriteRecipes');
    } else {
      document.querySelector('.favorite').src = favoriteIconBlack;
      localStorage.setItem('favoriteRecipes', JSON.stringify(
        [{
          id: data.idMeal || data.idDrink,
          type: url.includes('foods') ? 'food' : 'drink',
          nationality: data.strArea || '',
          category: data.strCategory,
          alcoholicOrNot: data.strAlcoholic || '',
          name: data.strMeal || data.strDrink,
          image: data.strMealThumb || data.strDrinkThumb,
        }],
      ));
    }
  };

  return (
    <div>
      <input
        data-testid="share-btn"
        type="image"
        src={ shareIcon }
        alt="share"
        onClick={ ShareTo }
      />
      <input
        data-testid="favorite-btn"
        className="favorite"
        type="image"
        src={ favoriteStorage ? favoriteIconBlack : favoriteIcon }
        alt="favorite"
        onClick={ toggleIcon }
      />
      {
        showMessage
      && <p>Link copied!</p>
      }
    </div>

  );
}
Icons.propTypes = {
  data: PropTypes.object,
}.isRequired;
