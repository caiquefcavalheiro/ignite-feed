import styles from "./Sidebar.module.css";

import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1687367480819-0afd2bd5f836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"
        />

        <div className={styles.profile}>
          <img src="https://github.com/caiquefcavalheiro.png" />

          <strong>Caique Cavalheiro</strong>
          <span>Full Stack Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
