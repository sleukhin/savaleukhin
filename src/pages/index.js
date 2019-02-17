import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/about';

const IndexPage = props => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `Sava Leukhin`,
          `Saveliy Leukhin`,
          `Савелий Леухин`,
          `Леухин`,
          `Leukhin`,
        ]}
      />
      <About />
    </Layout>
  );
};

export default IndexPage;
