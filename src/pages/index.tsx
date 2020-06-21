// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/tags"
import Chart from "../components/chart"
import { rhythm } from "../utils/typography"
import "../styles.scss"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
          tags: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h2 className="index-title">Maps</h2>
      <Chart
        title="JavaScript"
        subtitle="JavaScript 攻略マップ"
        summary="JavaScriptの基礎から応用まで体系的に学べるようにまとめています。初学者でもわかりやすいように説明しています。"
        imgurl="/javascript-img.jpg"
      />
      <Chart
        title="WebApp"
        subtitle="Webアプリ 攻略マップ"
        summary="Reactの基礎から応用まで体系的に学べるようにまとめています。初学者でもわかりやすいように説明しています。"
        imgurl="/webapp-img.jpg"
      />
      <h2 className="index-title">Posts</h2>
      <div className="posts-wrap">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug} className="posts-article">
              <header className="posts-header">
                <figure className="posts-img"></figure>
                <h1 className="posts-title">
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h1>
                <small className="posts-date">{node.frontmatter.date}</small>
                {node.frontmatter.tags ? (
                  <Tags tags={node.frontmatter.tags} />
                ) : (
                  <></>
                )}
              </header>
            </article>
          )
        })}
      </div>
      <Bio />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
