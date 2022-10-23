import styled from 'styled-components';

const TechListStyled = styled.ul`
  background-color: var(--grey-3);
  height: max-content;
  padding: 24px;
  border-radius: var(--radius-2);
  display: flex;
  flex-direction: column;
  gap: 16px;

  .removed {
    animation: slideOut 1s linear forwards;
  }

  @keyframes slideOut {
    0% {
      transform: translateX(0px);
      opacity: 1;
    }
    20% {
      transform: translateX(-20px);
      opacity: 1;
    }
    50% {
      transform: translateX(100px);
      opacity: 0;
    }
    100% {
      transform: translateX(100px);
      opacity: 0;
    }
  }
`;

export default TechListStyled;
