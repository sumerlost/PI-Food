import styles from "./App.module.css"
import Button from "./component/Button/Button";
import Inicio from "./Pages/Inicio";
import { Routes, Route } from "react-router-dom"
import { Recipes } from "./Pages/Recipes";
import { HOME, RECIPES } from "./Routes/Routes"
import { RecipeDetail } from "./Pages/RecipeDetail";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path={HOME} element={<Inicio />} />
        <Route path={RECIPES} element={<Recipes />} />
        <Route path="/prueba" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}




export default App;



// import styles from "./App.module.css"
// import Button from "./component/Button/Button";
// import Inicio from "./Pages/Inicio";
// import { Recipes } from "./Pages/Recipes";

// function App() {
//   return (
//     <div className={styles.app}> <Recipes /></div>

//   );
// }

// export default App;
