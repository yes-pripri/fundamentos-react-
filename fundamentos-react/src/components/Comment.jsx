import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/87504113?v=4"/>
            <div className={styles.commentBox}>
            <div className={styles.commentComment}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Kathelen Priscila</strong>
                        <time title="27 de Fevereiro às 4:10"    dateTime='2023-02-27 06:16'>Cerca de 1hr atrás</time>
                    </div>
                    <button title="Deletar comentário">
                        <Trash size={20} />
                    </button>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>

                </header>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
            </div>
        </div>
    )
}