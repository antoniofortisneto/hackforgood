import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';
import '../Style/drink&food.css';

function Menu() {
  const { setFoodsList,
    foodsCategories,
    setFoodsCategories,
    handleClickFoodFilter, seila } = useContext(MyContext);
  const CINCO = 5;
  const filteredCategories = foodsCategories !== null
    ? foodsCategories.slice(0, CINCO) : foodsCategories;

  const fetchFood = async () => {
    const foods = await getMeals();
    if (seila === false) {
      setFoodsList(foods);
    }
  };
  const fecthDrinksCategories = async () => {
    const categories = await getMealCategories();
    console.log(categories);
    setFoodsCategories(categories);
  };

  useEffect(() => {
    fetchFood();
    fecthDrinksCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <Header title="Menú principal" showSearch />
      <div
        className="container-foodDrink"
      >
        <button
          className="container-all"
          type="button"
          data-testid="All-category-filter"
          onClick={ handleClickFoodFilter }
        >
          Información
        </button>
        <button
          className="container-all2"
          type="button"
          data-testid="All-category-filter"
          onClick={ handleClickFoodFilter }
        >
          Ahorro energético
        </button>
        {filteredCategories.map((categories) => (
          <div key={ categories }>
            <button
              className="container-categories"
              type="button"
              data-testid={ `${categories}-category-filter` }
              onClick={ handleClickFoodFilter }
            >
              {categories}

            </button>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}
export default Menu;
