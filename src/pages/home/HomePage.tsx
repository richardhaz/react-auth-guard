import reactLogo from '@/assets/react.svg';
import viteLogo from '/vite.svg';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={styles.logo} alt="React logo" />
        </a>
      </div>
      <h1>React Auth Guard</h1>

      <p className={styles['read-the-docs']}>Click on the Vite and React logos to learn more</p>
    </>
  );
};

export default HomePage;
