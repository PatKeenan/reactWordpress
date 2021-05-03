import "../styles/global.css";
//Import the apollo client to make available to the entire application
import { ApolloProvider } from "@apollo/client";
import { client } from "../services/index";
import Layout from "../components/Layout";
import Head from "next/head";
import FaviconInfo from "../components/FaviconInfo";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <FaviconInfo />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
