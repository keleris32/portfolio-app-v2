import type { NextPage } from 'next';
import Head from 'next/head';
import { HeroSection } from '../layouts';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Charles Ejiegbu | Home</title>
        <meta
          name="description"
          content="I'm a fullstack developer with a love for bringing ideas to life."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
