import styles from "./App.module.css"
import { Routes, Route } from "react-router-dom"
import { Recipes } from "./Pages/Recipes";
import { RECIPES, ID, CREATE } from "./Routes/Routes"
import { RecipeDetail } from "./Pages/RecipeDetail";
import Inicio from "./Pages/Inicio"
import CreateRecipe from "./Pages/CreateRecipe";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path={"/"} element={<Inicio />} />
        <Route path={RECIPES} element={<Recipes />} />
        <Route path={ID} element={<RecipeDetail />} />
        <Route path={CREATE} element={<CreateRecipe />} />
      </Routes>
    </div>
  );
}
export default App;