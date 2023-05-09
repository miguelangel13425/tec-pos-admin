import { Route, Routes } from "react-router-dom";
import AddDish from "../pages/AddDish";
import AddIngridient from "../pages/AddIngredient";
import AddUser from "../pages/AddUser";
import Dashboard from "../pages/Dashboard";
import Dishes from "../pages/Dishes";
import Ingredients from "../pages/Ingredients";
import Login from "../pages/Login";
import Users from "../pages/Users";
import PrivateRoute from "./PrivateRoute";

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/add/dishes" element={<AddDish />} />
          <Route path="/add/ingredients" element={<AddIngridient />} />
          <Route path="/add/users" element={<AddUser />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default Navigation;
