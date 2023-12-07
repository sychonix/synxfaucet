import Head from "next/head";
import Faucet from "../components/Faucet";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sychonix Faucet</title>
        <meta name="description" content="Sychonix Facuet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/sychonix.jpeg" />
      </Head>
      <main>
        <Faucet />
      </main>
    </>
  );
}
