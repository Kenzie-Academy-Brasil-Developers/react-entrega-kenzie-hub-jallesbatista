import styled, { css } from 'styled-components';

const ContainerVariants = {
  login: css`
    margin: 80px auto 50px auto;
    max-width: 400px;
    h1 {
      text-align: center;
    }
  `,
  register: css`
    margin: 50px auto 45px auto;
    max-width: 400px;

    .title {
      display: flex;
      justify-content: space-between;
    }
    .form__title {
      display: flex;
      flex-direction: column;
    }
  `,
  dashboard: css`
    margin: 0 auto;
    max-width: 1200px;
  `,
};

const ContainerStyled = styled.div`
  ${({ variant }) => ContainerVariants[variant]}

  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 100%;
    align-items: center;
  }
  h1 {
    font-size: var(--font-size-0);
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
  }

  h2 {
    font-size: var(--font-size-1);
    color: #ffffff;
    font-weight: var(--font-weight-bold);
    text-align: center;
  }
`;

export default ContainerStyled;
