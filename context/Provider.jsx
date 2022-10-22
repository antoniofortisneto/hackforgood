import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const UM = 1;
  const history = useHistory();
  const [loginButtonDisabled, setloginButtonDisabled] = useState(true);
  const [verifyEmail, setverifyEmail] = useState({ email: '' });
  const [verifyPassword, setverifyPassword] = useState({ password: '' });
  const [filters, setFilters] = useState({
    optionsFillters: '',
  });
  const [search, setSearch] = useState({ pesquisa: '' });
  const [mealsData, setMealsData] = useState([]);
  const [drinksData, setDrinksData] = useState([]);
  const [drinksList, setDrinksList] = useState([]);
  const [foodsList, setFoodsList] = useState([]);
  // const [toggleFilter, setToggleFilter] = useState('');
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [foodsCategories, setFoodsCategories] = useState([]);
  const [doneRecipe, setDoneRecipe] = useState([]);

  const [disableButton, setDisableButton] = useState(true);
  const [recomendation, setRecomendation] = useState([]);
  const [urlRecipe, setUrlRecipe] = useState('');
  const [seila, setSeila] = useState(false);
  const [drinkRandom, setdrinkRandom] = useState([]);
  const [foodRandom, setfoodRandom] = useState([]);

  useEffect(() => {
    if (mealsData !== null && mealsData.length === UM) {
      history.push(`/foods/${mealsData[0].idMeal}`);
    }
    if (!mealsData) {
      setMealsData([]);
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [history, mealsData]);

  useEffect(() => {
    if (drinksData !== null && drinksData.length === UM) {
      history.push(`/drinks/${drinksData[0].idDrink}`);
    }
    if (!drinksData) {
      setDrinksData([]);
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [drinksData, history]);

  const handleRadioChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleInputChange = ({ target }) => {
    setSearch({ pesquisa: target.value });
  };

  const handleSearchMeals = async () => {
    const { optionsFillters } = filters;
    const { pesquisa } = search;
    if (optionsFillters === 'Ingredient') {
      const ingredientData = await fetchApiMeals(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${pesquisa}`);
      setFoodsList(ingredientData);
      setMealsData(ingredientData);
      return ingredientData;
    }
    if (optionsFillters === 'Name') {
      const nameData = await fetchApiMeals(`https://www.themealdb.com/api/json/v1/1/search.php?s=${pesquisa}`);
      setFoodsList(nameData);
      setMealsData(nameData);
      return nameData;
    }
    if (optionsFillters === 'First Letter' && pesquisa.length > 1) {
      const alert = global.alert('Your search must have only 1 (one) character');
      return alert;
    }
    const firstLetterData = await fetchApiMeals(`https://www.themealdb.com/api/json/v1/1/search.php?f=${pesquisa}`);
    setFoodsList(firstLetterData);
    setMealsData(firstLetterData);
    return firstLetterData;
  };

  const handleSearchDrinks = async () => {
    const { optionsFillters } = filters;
    const { pesquisa } = search;
    if (optionsFillters === 'Ingredient') {
      const ingredientData = await fetchApiDrinks(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${pesquisa}`);
      setDrinksData(ingredientData);
      setDrinksList(ingredientData);
      return ingredientData;
    }
    if (optionsFillters === 'Name') {
      const nameData = await fetchApiDrinks(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${pesquisa}`);
      setDrinksData(nameData);
      setDrinksList(nameData);
      return nameData;
    }
    if (optionsFillters === 'First Letter' && pesquisa.length > 1) {
      const alert = global.alert('Your search must have only 1 (one) character');
      return alert;
    }
    const firstLetterData = await fetchApiDrinks(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${pesquisa}`);
    setDrinksData(firstLetterData);
    setDrinksList(firstLetterData);
    return firstLetterData;
  };
  const handleClickFoodFilter = async ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.innerText;
    const { optionsFillters } = filters;
    setFilters({
      ...filters,
      optionsFillters: value,
    });
    if (optionsFillters === target.innerText || target.innerText === 'All') {
      const meals = await getMeals();
      setFoodsList(meals);
    } else {
      const foodsByCategories = await searchByMealCategories(target.innerText);
      setFoodsList(foodsByCategories);
    }
  };
  const handleClickDrinkFilter = async ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.innerText;
    const { optionsFillters } = filters;
    setFilters({
      ...filters,
      optionsFillters: value,
    });
    if (optionsFillters === target.innerText || target.innerText === 'All') {
      const drinks = await getDrinks();
      setDrinksList(drinks);
    } else {
      const drinksByCategories = await searchByDrinkCategories(target.innerText);
      setDrinksList(drinksByCategories);
    }
  };

  const context = {
    loginButtonDisabled,
    setloginButtonDisabled,
    verifyEmail,
    setverifyEmail,
    verifyPassword,
    setverifyPassword,
    filters,
    setFilters,
    handleRadioChange,
    handleInputChange,
    search,
    handleSearchMeals,
    handleSearchDrinks,
    drinksData,
    setDrinksData,
    mealsData,
    setMealsData,
    drinksList,
    setDrinksList,
    handleClickFoodFilter,
    handleClickDrinkFilter,
    foodsList,
    setFoodsList,
    drinkCategories,
    setDrinkCategories,
    foodsCategories,
    setFoodsCategories,
    doneRecipe,
    setDoneRecipe,
    disableButton,
    setDisableButton,
    recomendation,
    setRecomendation,
    urlRecipe,
    setUrlRecipe,
    seila,
    setSeila,
    foodRandom,
    setfoodRandom,
    drinkRandom,
    setdrinkRandom,

  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>);
}
MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MyProvider;
