import { FiPlusCircle } from 'react-icons/fi';
import styles from "./NewTask.module.css";

export function NewTask() {
  return (
    <div className={styles.newTaskInput}>
      <input type="text" placeholder="Adicione um nova tarefa"/>
      <button className={styles.createButton}>
        Criar
        <FiPlusCircle size={16}/>
      </button>
    </div>
  )
}