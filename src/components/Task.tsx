import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

import styles from "./Task.module.css";
export interface TaskTypeProps {
  content: string;
}

interface TaskProps {
  tk: TaskTypeProps;
  onDoneTasks: (done: boolean) => void;
  onDeleteTask: (contentTask: string) => void
}

export function Task({ tk, onDoneTasks, onDeleteTask }: TaskProps){
  const [check, setCheck] = useState(false)

  function handleClickCheck() {
    setCheck(!check);
    onDoneTasks(!check);
  }

  function deleteTask() {
    onDeleteTask(tk.content);
  }

  return (
    <li className={styles.taskItem} >
      <label>
        <input className={styles.checkBox} type="checkbox" onClick={handleClickCheck} checked={check}/>
        <span className={check ? styles.checkmark : ''}></span>
      </label>
      <p className={check ? styles.contentCheck : styles.contentNotCheck} >
        {tk.content}
      </p>
      <button className={styles.deleteButton} onClick={deleteTask}>
        <FiTrash2 size={17} />
      </button>
    </li>
  )
}