import { useState } from 'react';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskTypeProps } from './components/Task';
import { TaskList } from './components/TaskList';

import styles from './App.module.css';

export function App() {
  const [tasks, setTasks] = useState([
    {
      content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
  ])

  function updateNewArray(task: TaskTypeProps) {
    setTasks([...tasks, task])
  }

  function updateWithoutOne(tasks: TaskTypeProps[]) {
    setTasks(tasks)
  }

  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <NewTask onAddNewTask={updateNewArray}/>
        <TaskList list={tasks} onUpdateTasks={updateWithoutOne}/>
      </main>
    </>
  )
}


