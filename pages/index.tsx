import Head from "next/head";
import styles from "../styles/Home.module.css";
import { TwitchEmbed } from "react-twitch-embed";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ fontSize: "24px", fontFamily: "Courier" }}>
      Next stream in:&nbsp;
      <span>{minutes}</span>:
      <span>{seconds > 9 ? seconds : "0" + seconds}</span>
    </div>
  );
}

export default function Home() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
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
      <header className={styles.header}>
        <div className={styles.header_left}>
          <img src="/logo-dark.png" alt="Stream Spotlight" />
        </div>
        <div className={styles.header_center}>
          <p>Welcome to Stream Spotlight!</p>
        </div>
        <div className={styles.header_right}>
          <MyTimer expiryTimestamp={time} />
        </div>
      </header>
      <div className={styles.twitch_embed}>
        <TwitchEmbed
          channel="monstercat"
          onAuthenticate={function noRefCheck() {}}
          onVideoPause={function noRefCheck() {}}
          onVideoPlay={function noRefCheck() {}}
          onVideoReady={function noRefCheck() {}}
          width="100%"
        />
      </div>

      <footer className={styles.footer}>Previous streamers: monstercat </footer>
    </div>
  );
}
