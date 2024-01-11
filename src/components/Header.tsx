import styles from './Header.module.css'
import ToDoLogo from '../assets/Logo.svg';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={ToDoLogo} alt="ToDo List logo" />
    </header>
  );
}