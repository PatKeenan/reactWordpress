import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { gql } from "@apollo/client";
import { client } from "../../services";
import { FaArrowLeft, FaGithub, FaChrome } from "react-icons/fa";

export default function DefaultPage({ data }) {
  return (
    <div className="postDetail">
      <Head>
        <title>{data.title}</title>
        <meta
          name="description"
          content={data.projectsFieldGroup.projectDescription}
        />
      </Head>
      <div className="postDetail__breadcrumb">
        <Link href="/projects">
          <a>Projects / </a>
        </Link>
        <strong>{data.title}</strong>
      </div>
      <div className="postDetail__image">
        <Image
          src={data.projectsFieldGroup.projectImage.sourceUrl}
          layout="responsive"
          height="400"
          width="400"
        />
      </div>
      <div className="postDetail__titleAnd__icons">
        <h1 className="postDetail__title">{data.title}</h1>
        <div className="postDetail__icons">
          {data.projectsFieldGroup.githubLink && (
            <a
              href={data.projectsFieldGroup.githubLink}
              target="_blank"
              rel="noopener"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          )}
          {data.projectsFieldGroup.projectLink && (
            <a
              href={data.projectsFieldGroup.projectLink}
              target="_blank"
              rel="noopener"
              rel="noreferrer"
            >
              <FaChrome />
            </a>
          )}
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: data.content }}
        className="postDetail__content"
      ></div>
    </div>
  );
}

export async function getStaticPaths() {
  const results = await client.query({
    query: gql`
      query GetSlugs {
        posts {
          nodes {
            slug
          }
        }
      }
    `,
  });
  return {
    paths: results.data.posts.nodes.map(({ slug }) => {
      return {
        params: { slug },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const results = await client.query({
    query: gql`
      query GetPostDetail {
        postBy(slug: "${slug}") {
          title
          content
          projectsFieldGroup {
            projectImage {
              altText
              sourceUrl
            }
            githubLink
            projectLink
            projectDescription
          }
        }
      }
    `,
  });
  return {
    props: {
      data: results.data.postBy,
    },
  };
}
