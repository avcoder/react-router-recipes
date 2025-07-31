import { useState } from "react";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "./App.css";

// routing
import { Routes, Route, Outlet } from "react-router";

// components
import NavMenu from "./components/NavMenu";
import CategoryList from "./components/CategoryList";
import Recipe from "./components/Recipe";

function App() {
  return (
    <>
      <NavMenu />

      <Routes>
        <Route path="categories/:foodtype" element={<CategoryList />} />
        <Route path="recipes/:recipeId" element={<Recipe />} />
      </Routes>
      <Outlet />
      <Recipe />
    </>
  );
}

export default App;
