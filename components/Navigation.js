import Link from 'next/link';
import styles from '../styles/Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={ styles.navigation }>
      <Link href='/'>
        <h3>Matrix</h3>
      </Link>

      <button>Create New</button>
    </nav>
  );
}
 
export default Navigation;
