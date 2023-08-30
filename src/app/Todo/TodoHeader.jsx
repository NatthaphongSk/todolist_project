import styles from './TodoHeader.module.scss'
// styles={header:CSSRules}

function TodoHeader(){
    const today = new Date();
    const options = { day: "numeric",weekday: "short",  month: "long" };
    return (
        <div className={styles.header}>
            <h1 className={styles.header__text}>Inbox</h1>
            <span className={styles.header__date}>{today.toLocaleDateString("en-US", options)}</span>
        </div>
    )
}

export default TodoHeader;