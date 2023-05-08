import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DrawerNavigation from "../components/DrawerNavigation";
import Navbar from "../components/Navbar";
import AddDish from "../pages/AddDish";
import AddIngridient from "../pages/AddIngredient";
import AddUser from "../pages/AddUser";
import Dashboard from "../pages/Dashboard";
import Dishes from "../pages/Dishes";
import Ingredients from "../pages/Ingredients";
import Login from "../pages/Login";
import Users from "../pages/Users";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar handleDrawer={handleDrawer} />
      {isOpen && <DrawerNavigation handleDrawer={handleDrawer} />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/add/dishes" element={<AddDish />} />
        <Route path="/add/ingredients" element={<AddIngridient />} />
        <Route path="/add/users" element={<AddUser />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default Navigation;
