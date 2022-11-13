import Head from "next/head";
import Image from "next/image";
import PageLayout from "components/layout/PageLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>studio854</title>
        <meta name="description" content="854 기록저장소" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <h1>
          Welcome to <a href="https://github.com/854dev">854 archive!</a>
        </h1>
      </PageLayout>
    </div>
  );
}
