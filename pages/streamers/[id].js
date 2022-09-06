import { Amplify, API, withSSRContext } from "aws-amplify";
import Head from "next/head";
import { useRouter } from "next/router";
import awsExports from "../../src/aws-exports";
import { deleteStreamer } from "../../src/graphql/mutations";
import { getStreamer, listStreamers } from "../../src/graphql/queries";
import styles from "../../styles/Home.module.css";

Amplify.configure({ ...awsExports, ssr: true });

export async function getStaticPaths() {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({ query: listStreamers });
  const paths = data.listStreamers.items.map((streamer) => ({
    params: { id: streamer.id },
  }));

  return {
    fallback: true,
    paths,
  };
}

export async function getStaticProps({ params }) {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({
    query: getStreamer,
    variables: {
      id: params.id,
    },
  });

  return {
    props: {
      streamer: data.getStreamer,
    },
  };
}

export default function Streamer({ streamer }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Loading&hellip;</h1>
      </div>
    );
  }

  async function handleDelete() {
    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: deleteStreamer,
        variables: {
          input: { id: streamer.id },
        },
      });

      window.location.href = "/";
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{streamer.title} – Amplify + Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.name}>{streamer.name}</h1>

        <p className={styles.title}>{streamer.title}</p>
      </main>

      {/* <footer className={styles.footer}>
        <button onClick={handleDelete}>💥 Delete streamer</button>
      </footer> */}
    </div>
  );
}
