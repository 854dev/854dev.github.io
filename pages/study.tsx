import React from "react";
import Head from "next/head";
import Image from "next/image";
import PageLayout from "components/layout/PageLayout";

function Study() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <h1>스터디 페이지</h1>
      </PageLayout>
    </div>
  );
}

export default Study;
