import styled from 'styled-components';

const TechStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  gap: 28px;
  .tech__title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: var(--font-size-regular);
      font-weight: var(--font-weight-semibold);
      color: #ffffff;
    }
  }
`;

export default TechStyled;
