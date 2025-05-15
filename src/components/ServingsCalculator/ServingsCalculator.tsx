'use client'
import styles from './ServingsCalculator.module.scss';
import { Recipe } from '@/data/recipes';
import {useState} from "react";

interface ServingsCalculatorProps {
  recipe: Recipe;
}

const ServingsCalculator: React.FC<ServingsCalculatorProps> = ({ recipe }) => {
  const [servings, setServings] = useState(recipe.servings);

  const updateServings = (newServings: number) => {
    if (newServings > 0) {
      setServings(newServings);
    }
  };

  return (
    <>
      <div className={styles.servingsBlock}>
        <button onClick={() => updateServings(servings - 1)}>-</button>
        <span>Количество порций: {servings}</span>
        <button onClick={() => updateServings(servings + 1)}>+</button>
      </div>
      <div className={styles.ingredientsTitle}>Ингредиенты</div>
      <ul className={styles.ingredientsList}>
        {recipe.ingredients.map((item, i) => {
          const adjustedAmount = (item.amount * servings) / recipe.servings;
          return (
            <li key={i}><input type="checkbox" /> {item.name} — {adjustedAmount.toFixed(1)} {item.unit}</li>
          );
        })}
      </ul>
    </>
  );
};

export default ServingsCalculator;
