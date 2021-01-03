import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Helmet>
    </div>
  );
};

Meta.defaultProps = {
  title: 'Welcome to Proshop',
  description: 'Sell the best products',
  keywords: 'electronics, cheap electronics'
};

export default Meta;
