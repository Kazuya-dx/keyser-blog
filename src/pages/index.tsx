// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/tags"
import Chart from "../components/chart"
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
          cover: any
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
      <SEO title="カイザーブログ 初学者を卒業するための技術ブログ" />
      <h2 className="index-title">Maps</h2>
      <div className="maps-wrap">
        <article className="maps-article">
          <header className="maps-header">
            <figure className="maps-img">
              <Chart title="JavaScript" imgurl="/javascript-img.jpg" />
            </figure>
            <h1 className="maps-title">
              <a style={{ boxShadow: `none` }}>
                【準備中】JavaScript 攻略マップ
              </a>
            </h1>
            <small className="maps-date">
              JavaScriptの基礎から応用まで体系的に学べるようにまとめていきます。
            </small>
          </header>
        </article>
        <article className="maps-article">
          <header className="maps-header">
            <figure className="maps-img">
              <Chart title="Network" imgurl="/webapp-img.jpg" />
            </figure>
            <h1 className="maps-title">
              <a style={{ boxShadow: `none` }}>
                【準備中】ネットワーク(TCP/IP) 攻略マップ
              </a>
            </h1>
            <small className="maps-date">
              エンジニアなら知らないと恥ずかしいネットワーク(TCP/IP)の知識を体系的にまとめていきます。
            </small>
          </header>
        </article>
        <article className="maps-article">
          <header className="maps-header">
            <figure className="maps-img">
              <Chart title="Hardware" imgurl="/hardware-img.jpg" />
            </figure>
            <h1 className="maps-title">
              <a style={{ boxShadow: `none` }}>
                【準備中】ハードウェア 攻略マップ
              </a>
            </h1>
            <small className="maps-date">
              エンジニアとして働く上で最低限知っておきたいハードウェアの知識を体系的にまとめていきます。
            </small>
          </header>
        </article>
      </div>
      <h2 className="index-title">Posts</h2>
      <div className="posts-wrap">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug} className="posts-article">
              <header className="posts-header">
                <figure className="posts-img">
                  <Img
                    fluid={node.frontmatter.cover.childImageSharp.fluid}
                    alt={node.frontmatter.title}
                  />
                </figure>
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
            date(formatString: "YYYY年MM月DD日")
            title
            description
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 650, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
