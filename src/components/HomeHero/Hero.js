import styled from 'styled-components';
import heroLg from './hero-lg.jpg';

const Hero = styled.div`
  background-image: url(${heroLg});
  height: 100vh;
  background-size: cover;
  text-align: center;
  flex-direction: column;
  display: flex;
`;

export default Hero;
