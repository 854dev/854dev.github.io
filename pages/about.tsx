import Head from "next/head";
import Image from "next/image";
import PageLayout from "components/layout/PageLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <h1>자기소개 페이지!</h1>
      </PageLayout>
    </div>
  );
}
