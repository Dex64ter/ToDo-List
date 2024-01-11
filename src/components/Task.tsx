import { FiTrash2 } from "react-icons/fi";
import styles from "./Task.module.css";
import { useState } from "react";

export interface TaskProps {
  id: number;
  content: string;
}

export function Task({ content }: TaskProps){
  const [check, setCheck] = useState(false)

  function handleClickCheck() {
    setCheck(!check);
  }

  return (
    <li className={styles.taskItem}>
      <label>
        <input className={styles.checkBox} type="checkbox" onClick={handleClickCheck} checked={check}/>
        <span className={check ? styles.checkmark : ''}></span>
      </label>
      <p className={check ? styles.contentCheck : styles.contentNotCheck} >
        {content}
      </p>
      <button className={styles.deleteButton}>
        <FiTrash2 size={17} />
      </button>
    </li>
  )
}