import { FiTrash2 } from "react-icons/fi";
import styles from "./Task.module.css";

export interface TaskProps {
  id: number;
  content: string;
  checked: boolean;
}

export function Task({ content, checked }: TaskProps){
  return (
    <li className={styles.taskItem}>
      <input type="radio" checked={checked} />
      <p>
        {content}
      </p>
      <button className={styles.deleteButton}>
        <FiTrash2 size={17} />
      </button>
    </li>
  )
}