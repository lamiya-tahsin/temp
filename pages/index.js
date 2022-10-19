import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
const Home=() => {
  return (
      <div>
      <Head>
        <title> Home Page</title>
      </Head>
      <img src="/loginimg.jpg" className={styles.im}></img>
      <h1>Welcome to Medipal</h1>
    </div>

    
  );
};

export default Home;
