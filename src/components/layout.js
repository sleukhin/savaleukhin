import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import Header from './header';
import Sidebar from './sidebar';
import theme from './styles/theme';
import './layout.css';

const PageContent = styled.div`
  padding: 34px 54px;

  @media (min-width: ${props => props.theme.screen.lg}) {
    margin-left: 450px;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
          avatar: file(relativePath: { eq: "avatar.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Sidebar>
            <Header
              siteTitle={data.site.siteMetadata.title}
              avatar={data.avatar.childImageSharp.fluid}
            />
          </Sidebar>
          <PageContent>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <span aria-label="сердце" role="img">
                ❤️
              </span>
            </footer>
          </PageContent>
        </>
      )}
    />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
