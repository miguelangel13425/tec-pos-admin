import { useEffect, useState } from "react";
import { collection, db, getDocs } from "../firebase";
import { Dish } from "../models/dishes.model";

const useDishes = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  const fetcDishes = async () => {
    const response = await getDocs(collection(db, "dishes"));
    const data = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDishes(data as Dish[]);
  };

  useEffect(() => {
    fetcDishes();
  }, []);

  return {
    dishes,
  };
};

export default useDishes;
