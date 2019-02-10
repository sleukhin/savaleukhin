import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>
        Привет{' '}
        <span aria-label="машу ручкой" role="img">
          👋
        </span>{' '}
        лялячка 🦐
      </h1>
    </Layout>
  );
};

export default IndexPage;
