import { Task, TaskProps } from "./Task";
import { LuClipboardList  } from "react-icons/lu";
import styles from "./TaskList.module.css";
// import { useState } from "react";


interface TaskListProps {
  list: TaskProps[];
}

export function TaskList({ list }: TaskListProps){
  

  return (
    <section>
      <div className={styles.info}>
        <div className={styles.createdTasks}>
          Tarefas criadas
          <span>{list.length}</span>
        </div>
        <div className={styles.tasksDone}>
          Concluídas
          <span>0</span>
        </div>
      </div>

      <ul className={styles.listTasks}>
        {
          list.length === 0 ? 
          <p className={styles.empty}>
            <LuClipboardList size={52} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </p>
          :
          list.map((task) => {
            return (
              <Task key={task.content} content={task.content} />
            )
          })
        }
      </ul>

    </section>
 ); 
}