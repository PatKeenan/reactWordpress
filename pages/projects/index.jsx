import Head from "next/head";
import React from "react";
import Card from "../../components/Card";
//import the packages for interacting with wordpress
import { gql } from "@apollo/client";
import { client } from "../../services/index";

export default function index({ posts }) {
  return (
    <div>
      <Head>
        <title>All Projects</title>
        <meta name="description" content="View all of my recent projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="posts">
        <div className="posts__grid">
          {posts.map((post) => {
            return <Card data={post} key={post.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

//grab the data from wordpress using static props and apollo
export async function getStaticProps(context) {
  const results = await client.query({
    query: gql`
      query MyQuery {
        posts {
          nodes {
            title
            slug
            id

            projectsFieldGroup {
              projectImage {
                altText
                mediaItemUrl
              }
              projectDescription
            }
          }
        }
      }
    `,
  });
  return {
    //pass the data returned from wordpress into the props
    props: {
      posts: results.data.posts.nodes,
    },
    // rebuild if project is added to wordpress
    revalidate: 1,
  };
}
