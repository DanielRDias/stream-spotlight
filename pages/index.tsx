import Head from "next/head";
import styles from "../styles/Home.module.css";
import { TwitchEmbed } from "react-twitch-embed";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stream Spotlight!</title>
        <meta
          name="description"
          content="Support small streamers by putting them in the spotlight!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Stream Spotlight!</h1>
        <div className={styles.stream}>
          <TwitchEmbed
            channel="monstercat"
            onAuthenticate={function noRefCheck() {}}
            onVideoPause={function noRefCheck() {}}
            onVideoPlay={function noRefCheck() {}}
            onVideoReady={function noRefCheck() {}}
            width="100%"
          />
        </div>
      </main>

      <footer className={styles.footer}>Previous streamers: monstercat </footer>
    </div>
  );
}
