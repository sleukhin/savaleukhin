import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

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
    </Layout>
  );
};

export default IndexPage;
