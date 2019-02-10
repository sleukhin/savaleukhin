import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = ({ data }) => {
  return (
    <Layout>
      <SEO title="Немного обо мне" />
      <h1>
        Привет{' '}
        <span aria-label="машу ручкой" role="img">
          👋
        </span>
      </h1>
      <h3>- я -</h3>
      <h1>Савелий Леухин</h1>
      <h4>- Вот чем я занимаюсь -</h4>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/">На главную</Link>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default About;
