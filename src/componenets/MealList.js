import MealItem from "./MealItem";

export default function MealList({ meals }) {
  return (
    <div className="list">
      {meals.map((meal) => (
        <MealItem key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
}
