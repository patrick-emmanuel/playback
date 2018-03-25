import React from 'react';
import EditorialImage from './EditorialImage';
import Banner from '../Banner';

const EditorialBanner = ({ data }) => (
  <Banner>
    <EditorialImage opacity="0.4" src={data.picture_xl} alt="The editorial category" />
  </Banner>
);

export default EditorialBanner;