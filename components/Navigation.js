import Link from 'next/link';
import styles from '../styles/Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={ styles.navigation }>
      <Link href='/'>
        <h1>Matrix</h1>
      </Link>

      <button>Create New</button>
    </nav>
  );
}
 
export default Navigation;
