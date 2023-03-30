import styles from "./App.module.css"
import Button from "./component/Button/Button";
import Inicio from "./Pages/Inicio";
import { Recipes } from "./Pages/Recipes";

function App() {
  return (
    <div className={styles.app}> <Recipes /></div>

  );
}

export default App;
