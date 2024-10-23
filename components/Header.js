import Link from 'next/link';
import styles from './Header.module.css'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        
      </div>
      <nav className={styles.nav}>
              <div>
                  <Link href="/">Home</Link>
              </div>
              <div>

              <Link href="/about">About</Link>
              </div>
              <div>

              <Link href="/services">Services</Link>
              </div>
              <div>

              <Link href="/blog">Blog</Link>
              </div>
              
              <div>

              <Link href="/contact">Contact</Link>
              </div>
      </nav>
      <button className={styles.cta}>Login</button>
    </header>
  );
};

export default Header;
