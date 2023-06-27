import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          <Post
            author="Caique Cavalheiro"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nisi voluptatum vero distinctio, quidem magni at voluptatibus. Sunt, soluta expedita, doloremque quo ex odit asperiores at quidem minima odio illo!"></Post>
          <Post
            author="Gabriel Buzzi"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nisi voluptatum vero distinctio, quidem magni at voluptatibus. Sunt, soluta expedita, doloremque quo ex odit asperiores at quidem minima odio illo!"></Post>
        </main>
      </div>
    </div>
  );
}

export default App;
