import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";
import useHttp from "../../hooks/useHttp";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const { error, loading, sendRequest: getAvailableMeals } = useHttp();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const requestArgs = { url: "https://react-http-9390f-default-rtdb.firebaseio.com/meals.json" };
    const transformMeals = (meals) => {
      const loadedMeals = [];
      for (const mealKey in meals) {
        loadedMeals.push({ id: mealKey, description: meals[mealKey].description, name: meals[mealKey].name, price: meals[mealKey].price });
      }
  
      setMeals(loadedMeals);
    };
    getAvailableMeals(requestArgs, transformMeals);
  }, []);
  let content = meals.map((meal) => {
    return (
      <ul>
        <MealItem key={meal.id} meal={meal} />
      </ul>
    );
  });

  if(loading){
    content = <p>Loading...</p>
  }
  if(error){
    content = <p>Something went wrong.</p>
  }
  if(meals.lenght === 0){
    content = <p>No meals availables.</p>
  }

  return (
    <section className={classes.meals}>
      <Card>
        {content}
      </Card>
    </section>
  );
};

export default AvailableMeals;
