import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/caiquefcavalheiro.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentCotent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Caique Cavalheiro</strong>
              <time title="27 de Junho ás 15:43" dateTime="2023-06-27 15:43:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
