import styled from 'styled-components';

const TechItemStyled = styled.li`
  width: 100%;
  background-color: var(--grey-4);
  border-radius: var(--radius-2);
  padding: 18px 28px 18px 24px;

  display: flex;
  justify-content: space-between;
  gap: 24px;
  animation: sideSlideIn 1s ease;

  button {
    background-color: transparent;
    color: #ffffff;
    font-size: var(--font-size-regular);
    width: max-content;
    transition: 0.5s;
    cursor: pointer;
  }

  button:active {
    scale: 0.9;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: var(--font-weight-regular);
      font-weight: var(--font-weight-semibold);
      color: #ffffff;
    }
    span {
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-regula);
      color: var(--grey-1);
    }
  }

  @keyframes sideSlideIn {
    from {
      transform: translateX(40px);
      opacity: 0;
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;

export default TechItemStyled;
