import React from 'react';
import EditorialImage from './EditorialImage';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  border-radius: 10px;
`;

const EditorialCard = ({ data }) => (
  <Wrapper>
    <EditorialImage src={data.picture_medium} alt="The editorial category" />
  </Wrapper>
);

export default EditorialCard;
