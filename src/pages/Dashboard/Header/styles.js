import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: var(--grey-4);

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
