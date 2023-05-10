import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useDishes from "../hooks/useDishes";

const Dishes = () => {
  const { dishes, fetchDishes } = useDishes();
  const { uid } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDishes(uid as string);
  }, []);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => navigate("/add/dishes")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-8 rounded w-[300px]"
      >
        Agregar Platillo
      </button>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr className="border-t-2">
                  <th scope="col" className="px-6 py-4 ">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Precio
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Descripcion
                  </th>

                  <th scope="col" className="px-6 py-4">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {dishes.map((dish) => (
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {dish.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {dish.price}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {dish.description}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Editar
                      </button>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
