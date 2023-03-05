import styles from './Post.module.css';
import { Comment } from './Comment';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/87504113?v=4'
                    />
                    <div className={styles.authorInfo}>
                        <strong>Kathelen Priscila</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="27 de Fevereiro às 4:10"    dateTime='2023-02-27 06:16'>Publicado há 1hr</time>
            </header>
            <div className={styles.content}>
                <p>Fala galera!!</p>
                <p>Acabei de subir mais um projeto no meu portfólio, é um projeto que fiz na NLW Return, evento da Rocketseat.</p>
                <p><a href="">jane.designer/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{''}
                    <a href=""> #nlw </a>{''}
                    <a href="">#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe seu comentário'
                />
            <footer>
                <button type="submit">Publicar</button>
            </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}