import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          <h2>Meu post</h2>
          <h2>Meu post</h2>
        </main>
      </div>
    </div>
  );
}

export default App;
