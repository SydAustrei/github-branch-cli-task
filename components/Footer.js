import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 DitsBakeShop. All rights reserved.</p>
      <p>
        Follow us on 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>.
      </p>
    </footer>
  );
};

export default Footer;
