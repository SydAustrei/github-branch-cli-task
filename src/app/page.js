import Header from '../../components/Header'; 
import Footer from '../../components/Footer'; 
import styles from '../../styles/Home.module.css'; 
import '../../styles/globals.css'; 


export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Dit's Cake's and Pastries</h1>
        <p className={styles.description}>Always Freshly Baked</p>
        <button className={styles.ctaButton}>Buy Now</button>
      </main>
      <Footer />
    </div>
  );
}
