import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         <a href="https://nextjs.org/docs/api-routes/introduction">API Routes Example with CORS</a>
        </h1>

        <p className={styles.description}>
          <a href="https://nextjs.org/docs/api-routes/introduction">Next.js ships with API routes which provides an easy solution to build your own API.</a>
          <br />
          <code className={styles.code}>This example shows how to create an API endpoint with CORS headers, using the cors package.</code>
        </p>

        <div className={styles.grid}>

          <p className={styles.card}>
            
              To test the CORS route, open the console in a new tab on a different
              domain and make a POST / GET / OPTIONS request to <b>/api/cors</b>. Using
              a different method from those mentioned will be blocked by CORS
            
          </p>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
