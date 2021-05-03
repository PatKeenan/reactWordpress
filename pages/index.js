import Head from "next/head";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

//import the packages for interacting with wordpress
import { gql } from "@apollo/client";
import { client } from "../services/index";

export default function Home({ title, tagline, posts }) {
  return (
    <div className="home__container">
      <Head>
        <title>React Wordpress Portfolio</title>
        <meta
          name="description"
          content="React based portfolio using wordpress as a headless CMS."
        />
      </Head>
      <main>
        <article className="home__hero">
          <div>
            <h1 className="home__hero__title">{title}</h1>
            <h3 className="home__hero__subtitle">{tagline}</h3>
          </div>
          <div className="home__button__and__icons">
            <Link href="/projects">
              <button className="hero__button">View Work</button>
            </Link>
            <div className="home__icon__group">
              <a
                href="https://github.com/PatKeenan"
                target="_blank"
                rel="noopener"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/pat-keenan/"
                target="_blank"
                rel="noopener"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/patkeenan316/"
                target="_blank"
                rel="noopener"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </article>
      </main>
      <footer className="home__footer">
        <p>
          Built with <span className="accent"> Next.js</span> &
          <span className="accent">Wordpress</span>
        </p>
      </footer>
    </div>
  );
}
//grab the data from wordpress using static props and apollo
export async function getStaticProps(context) {
  const results = await client.query({
    query: gql`
      query HomePageData {
        allSettings {
          generalSettingsTitle
          generalSettingsDescription
        }
      }
    `,
  });
  return {
    //pass the data returned from wordpress into the props
    props: {
      title: results.data.allSettings.generalSettingsTitle,
      tagline: results.data.allSettings.generalSettingsDescription,
    },
    // rebuild if project is added to wordpress
    revalidate: 1,
  };
}
