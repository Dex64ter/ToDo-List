import { Task, TaskProps } from "./Task";
import { LuClipboardList  } from "react-icons/lu";
import styles from "./TaskList.module.css";

const tasks: TaskProps[] = [
  {
    id: 0,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    checked: false,
  },
  {
    id: 1,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    checked: false,
  },
  {
    id: 2,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    checked: false,
  },
]

export function TaskList(){
 return (
  <section>
    <div className={styles.info}>
      <div className={styles.createdTasks}>
        Tarefas criadas
        <span>0</span>
      </div>
      <div className={styles.tasksDone}>
        Concluídas
        <span>0</span>
      </div>
    </div>

    <ul className={styles.listTasks}>
      {
        tasks.length === 0 ? 
        <p className={styles.empty}>
          <LuClipboardList size={52} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </p>
        :
        tasks.map((task) => {
          return (
            <Task key={task.id} content={task.content} checked={task.checked} id={task.id} />
          )
        })
      }
    </ul>

  </section>
 ); 
}