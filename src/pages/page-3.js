import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const getImagesData = graphql`
  {
    allFile {
      edges {
        node {
          name
          relativePath
          prettySize
          extension
          birthTime
        }
      }
    }
  }
`

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>Hi from page 3</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
    <StaticQuery
      query={getImagesData}
      render={data => (
        <table>
          <thead>
            <th>Name</th>
            <th>Relative Path</th>
            <th>Size</th>
            <th>Extension</th>
            <th>Birthtime</th>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr id={index}>
                <td>{node.name}</td>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    />
  </Layout>
)

export default ThirdPage
