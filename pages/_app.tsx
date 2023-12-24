import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/common/Layout";
import { useEffect } from "react";
import { initStoryblok } from "../components/common/storyblok";
import { NextSeo } from "next-seo";

initStoryblok();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const initWOW = async () => {
      const WOW = (await import("wow.js")).default;
      new WOW().init();
    };
    initWOW();
  }, []);

  return (
    <>
      <NextSeo
        titleTemplate="Lemonbutton | %s"
        defaultTitle="Lemonbutton"
        description="This is the Lemonbutton landing page."
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
