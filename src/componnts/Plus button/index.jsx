import styles from "./style.module.css";

function PlusButton({ setDisplayPlusTask }) {

    return (
        <div>
            <button className={styles.button} onClick={() => { setDisplayPlusTask(1) }}>+</button>
        </div>
    )
}

export default PlusButton;

