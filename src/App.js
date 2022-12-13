import styles from "./App.module.scss";
import FirstScreen from "./Components/firstScreen/FirstScreen";
import AboutMe from "./Components/firthScreen/AboutMe";
import Products from "./Components/Products/Products";
import SecondScreen from "./Components/SecondScreen/SecondScreen";

function App() {
  return (
    <div className={styles.main}>
      <FirstScreen />
      <SecondScreen />
      <AboutMe />
      <Products />
    </div>
  );
}

export default App;
