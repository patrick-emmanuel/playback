import styled from 'styled-components';
import heroLg from './hero-lg.jpg';

const Hero = styled.div`
  background-image: url(${heroLg});
  height: 75vh;
  background-attachment: fixed;
  background-size: cover;
  text-align: center;
  flex-direction: column;
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  align-items: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

export default Hero;
