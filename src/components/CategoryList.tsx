import { useState, useEffect } from "react";

// routing
import { useParams, Link } from "react-router";

// components
import { Card } from "primereact/card";
import { Button } from "primereact/button";

type RecipeType = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

const CategoryList: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const { foodtype } = useParams();

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodtype}`
      );
      const data = await res.json();
      console.log("Meals:", data.meals);
      setRecipes([...data.meals]);
    };

    fetchMeals();
  }, [foodtype]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {recipes.map((r) => (
          <div className="card" style={{ width: "400px" }}>
            <Card
              title={r.strMeal}
              footer={
                <Link to={`/recipes/${r.idMeal}`}>
                  <Button label="View Recipe" />
                </Link>
              }
            >
              <img
                alt={r.strMeal}
                src={r.strMealThumb}
                style={{ height: "300px" }}
              />
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
