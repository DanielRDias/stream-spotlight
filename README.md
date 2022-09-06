This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Mock APIs

### (Optional) Test your API

To test this out locally, you can run the `mock` command.

> If you'd like to go ahead and connect the front end, you can [jump to the next step](#connect-frontend-to-api).

```bash
amplify mock api
```

_Note:_ `amplify mock api` requires Java.

```console
# If you have not already deployed you API, you will be walked through the following steps for GraphQL code generation
? Choose the code generation language target: javascript (or preferred target)
? Enter the file name pattern of graphql queries, mutations and subscriptions: src/graphql/**/*.js
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions: Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested] 2
```

This will open the GraphiQL explorer on a local port, [http://localhost:20002](http://localhost:20002) by default. From the test environment you can try out different operations locally, like queries and mutations.

In the GraphiQL toolbar, select **Use: User Pool** and try creating a streamer:

```graphql
mutation CreateStreamer {
  createStreamer(input: {name: "RelaxBeats", language: "English", title: "Relax & Chill Beats -!trivia- -!hangman- -!scramble-", type: "Music"}) {
    id
    name
    type
    title
    createdAt
  }
}
```

Next, update auth to **Use: API Key** and try querying the list of streamers:

```graphql
query ListStreamers {
  listStreamers {
    items {
      name
      id
      language
      createdAt
      title
      streamStreamersId
      type
    }
  }
}
```

## API with Server-Side Rendering (SSR)

In this section you will create a way to list and create streamers from the Next.js application. To do this, you will fetch & render the latest streamers from the server as well as create a new streamer on the client.

Open **pages/index.js** and replace it with the following code:

```sh
npm install aws-amplify @aws-amplify/ui-react
```

```jsx
// pages/index.js
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify';
import Head from 'next/head';
import awsExports from '../src/aws-exports';
import { createStreamer } from '../src/graphql/mutations';
import { listStreamers } from '../src/graphql/queries';
import styles from '../styles/Home.module.css';

Amplify.configure({ ...awsExports, ssr: true });

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({ query: listStreamers });

  return {
    props: {
      streamers: response.data.listStreamers.items
    }
  };
}

async function handleCreateStreamer(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  try {
    const { data } = await API.graphql({
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      query: createStreamer,
      variables: {
        input: {
          name: form.get('name'),
          title: form.get('title'),
          language: form.get('language'),
          type: form.get('type'),
        }
      }
    });

    window.location.href = `/streamers/${data.createStreamer.id}`;
  } catch ({ errors }) {
    console.error(...errors);
    throw new Error(errors[0].message);
  }
}

export default function Home({ streamers = [] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amplify + Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Amplify + Next.js</h1>

        <p className={styles.description}>
          <code className={styles.code}>{streamers.length}</code>
          streamers
        </p>

        <div className={styles.grid}>
          {streamers.map((streamer) => (
            <a className={styles.card} href={`/streamers/${streamer.id}`} key={streamer.id}>
              <h3>{streamer.name}</h3>
              <p>{streamer.title}</p>
            </a>
          ))}

          <div className={styles.card}>
            <h3 className={styles.title}>New Streamer</h3>

            <Authenticator>
              <form onSubmit={handleCreateStreamer}>
                <fieldset>
                  <legend>Name</legend>
                  <input
                    defaultValue={`Today, ${new Date().toLocaleTimeString()}`}
                    name="name"
                  />
                </fieldset>

                <fieldset>
                  <legend>Content</legend>
                  <textarea
                    defaultValue="I built an Amplify app with Next.js!"
                    name="content"
                  />
                </fieldset>

                <button>Create Streamer</button>
                <button type="button" onClick={() => Auth.signOut()}>
                  Sign out
                </button>
              </form>
            </Authenticator>
          </div>
        </div>
      </main>
    </div>
  );
}
```

Let's walk through some of this file:

- **Amplify.configure** – For authenticated requests to work on the server, our client has to be configured with `ssr: true` to make credentials available on subsequent requests.

- **getServerSideProps** – For each request (`req`) on the server, we create a copy of Amplify (called `SSR` here from `withSSRContext({ req })`) that scopes credentials, data, and storage to _just one_ request. `API.graphql` queries for a list of streamers, and returns them as the `streamers` prop for the `Home` component.

- **handleCreateStreamer** – This function is called when a logged-in user submits our "New Streamer" form. `API.graphql` is called to create the new streamer's `name` and `title`. Once created, we redirect to `/streamers/${streamer.id}`. Notice that we explicitly set `authMode` to `AMAZON_COGNITO_USER_POOLS`. This is because our `schema.graphql` explicitly requires an authorized user to create/delete/update our **Streamer** model. Based on our configuration when we ran `amplify add api`, this value is defaulting to `API_KEY`.

- **Home** – This is a _functional component_ that renders the `streamers` provided by `getServerSideProps`.

## Testing SSR

Next, run the app and you should see a landing page with `0 streamers` with a login screen:

```bash
npm run dev
```

Once you create an account and login, you will be presented with the **New Streamer** form.

Submit that form to create a new streamer, and we'll build that page next!

## API with Incremental Static Site Generation (SSG)

Statically generating pages during the build process improves performance. But, dynamically created streamers still need to not `404`.

To solve this, create **pages/streamers/[id].js** and paste in the following content:

```jsx
import { Amplify, API, withSSRContext } from 'aws-amplify';
import Head from 'next/head';
import { useRouter } from 'next/router';
import awsExports from '../../src/aws-exports';
import { deleteStreamer } from '../../src/graphql/mutations';
import { getStreamer, listStreamers } from '../../src/graphql/queries';
import styles from '../../styles/Home.module.css';

Amplify.configure({ ...awsExports, ssr: true });

export async function getStaticPaths() {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({ query: listStreamers });
  const paths = data.listStreamers.items.map((streamer) => ({
    params: { id: streamer.id }
  }));

  return {
    fallback: true,
    paths
  };
}

export async function getStaticProps({ params }) {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({
    query: getStreamer,
    variables: {
      id: params.id
    }
  });

  return {
    props: {
      streamer: data.getStreamer
    }
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
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        query: deleteStreamer,
        variables: {
          input: { id: streamer.id }
        }
      });

      window.location.href = '/';
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

      <footer className={styles.footer}>
        <button onClick={handleDelete}>💥 Delete streamer</button>
      </footer>
    </div>
  );
}
```

Let's walk through some of this file:

- **Amplify.configure** – For authenticated requests to work on the server, our client has to be configured with `ssr: true` to make credentials available on subsequent requests.

- **getStaticPaths** – Because the value of `[id]` isn't known at build-time, we need to provide all possible `paths` for Next.js to render pages for. We do this by querying all streamers with `API.graphql`, and mapping each `streamer` into `{ params: { id: streamer.id }}`. These `params` are passed to `getStaticProps` next. Note that we return `fallback: true`. If this value were `false`, then any _new_ streamers would return a `404` because they didn't exist at build-time. With `true`, static pages are returned quickly, while any new `id`s are looked up once.

- **getStaticProps** – Because the `Streamer` components props aren't dynamic per-request, they're provided statically from `getStaticPaths` as `params`. Here, we use `params.id` to query for that specific streamer with `API.graphql`.

- **Streamer** – `Streamer` is a functional component that renders the provided prop `streamer`. Because `fallback: true` was specified above, we have to account for a "loading" state while a new streamer may be fetched.

- **handleDelete** – This function is called when the "Delete streamer" button is clicked. Notice that we explicitly set `authMode` to `AMAZON_COGNITO_USER_POOLS`. This is because our `schema.graphql` explicitly requires an authorized user to create/delete/update our **Streamer** model. Based on our configuration when we ran `amplify add api`, this value is defaulting to `API_KEY`.

For each request (`req`) on the server, we create a copy of Amplify (called `SSR` here from `withSSRContext({ req })`) that scopes credentials, data, and storage to _just one_ request. `API.graphql` queries for a list of streamers, and returns them as the `streamers` prop for the `Home` component.

- **handleCreateStreamer** – This function is called when a logged-in user submits our "New Streamer" form. `API.graphql` is called to create the new streamer's `name` and `title`. Once created, we redirect to `/streamers/${streamer.id}`.

- **Home** – This is a _functional component_ that renders the `streamers` provided by `getServerSideProps`.

## Testing SSG

With your server running (`npm run dev`), refresh the page (or go back home to <http://localhost:3000/> and click into a streamer) and you'll see a page for this streamer!
