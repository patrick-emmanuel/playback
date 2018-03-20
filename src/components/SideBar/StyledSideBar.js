import styled from 'styled-components';

const StyledSideBar = styled.div`
  width: 270px;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  flex-direction: column;
  display: flex;
  background: linear-gradient(
    180deg,
    #422d2d 27.57%,
    #7c5a35 55.25%,
    #f5b847 99.61%
  );
`;

export default StyledSideBar;
