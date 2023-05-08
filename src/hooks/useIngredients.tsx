import { useEffect, useState } from "react";
import { collection, db, getDocs } from "../firebase";
import { Ingredient } from "../models/ingredients.model";

const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const fetchIngredients = async () => {
    const response = await getDocs(collection(db, "ingredients"));
    const data = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setIngredients(data as Ingredient[]);
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return {
    ingredients,
  };
};

export default useIngredients;
