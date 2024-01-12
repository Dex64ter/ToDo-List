import { ChangeEvent, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import styles from "./NewTask.module.css";
import { TaskTypeProps } from './Task';

interface NewTaskProps {
  onAddNewTask: (task: TaskTypeProps) => void;
}

export function NewTask({ onAddNewTask }: NewTaskProps) {
  const [contentTask, setContentText] = useState('');

  function handleAddNewTask(){
    onAddNewTask(
      {
        content: contentTask
      }
    )
    setContentText("")
  }

  function handleContentTask(event: ChangeEvent<HTMLInputElement>) {
    setContentText(event.target.value)
  }

  return (
    <div className={styles.newTaskInput}>
      <input
        type="text"
        placeholder="Adicione um nova tarefa"
        value={contentTask}
        onChange={handleContentTask}
      />
      <button className={styles.createButton} onClick={handleAddNewTask}>
        Criar
        <FiPlusCircle size={16}/>
      </button>
    </div>
  )
}