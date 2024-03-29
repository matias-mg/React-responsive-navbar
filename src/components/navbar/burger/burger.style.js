import styled from 'styled-components';

export const StyledToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:active, &:focus {
    outline: none;
  }
  
  @media (min-width: 560px) {
    display: none;
  }
`;

export const StyledDivLine = styled.div`
  width: 30px;
  height: 2px;
  background: #fff;
`;