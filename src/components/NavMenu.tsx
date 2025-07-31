import { useState, useEffect } from "react";
import styled from "./NavMenu.module.css";

// routing
import { Link } from "react-router";

// components
import { Button } from "primereact/button";

type CategoryType = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

const NavMenu: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await res.json();
      setCategories([...data.categories]);
    };

    getCategories();
  }, []);

  return (
    <div className="card">
      <ul className={styled.nav}>
        {categories.map((category) => (
          <li key={category.idCategory}>
            <Link to={`/categories/${category.strCategory}`}>
              <Button label={category.strCategory} />
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default NavMenu;
