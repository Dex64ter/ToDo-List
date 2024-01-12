import { useState } from "react";
import { Task, TaskTypeProps } from "./Task";
import { LuClipboardList  } from "react-icons/lu";
import styles from "./TaskList.module.css";


interface TaskListProps {
  list: TaskTypeProps[];
}

export function TaskList({ list }: TaskListProps){
  const [doneTasks, setDoneTasks] = useState(0);

  function onDonetasks(done: boolean){
    if (!done) {
      doneTasks === 0 ? setDoneTasks(0) : setDoneTasks(doneTasks - 1)
    } else {
      setDoneTasks(doneTasks + 1)
    }
  }

  return (
    <section>
      <div className={styles.info}>
        <div className={styles.createdTasks}>
          Tarefas criadas
          <span>{list.length}</span>
        </div>
        <div className={styles.tasksDone}>
          Concluídas
          <span>
            {
             list.length === 0 ? 0
             :
             `${doneTasks} de ${list.length}`
            }
          </span>
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
              <Task key={task.content} tk={task} onDoneTasks={onDonetasks} />
            )
          })
        }
      </ul>

    </section>
 ); 
}