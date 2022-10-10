import styled, { css } from 'styled-components';

const FormVariants = {
  login: css`
    margin-top: 20px;
    padding: 34px 16px 34px 16px;
    p {
      margin-top: 8px;
    }
    @media (min-width: 768px) {
      && {
        padding: 42px 20px;
      }
    }
  `,
  register: css`
    margin-top: 40px;
    padding: 34px 16px 20px 16px;

    p {
      margin-top: 18px;
    }

    @media (min-width: 768px) {
      && {
        padding: 42px 20px 28px 20px;
      }
    }
  `,
};

const FormStyled = styled.form`
  ${({ variant }) => FormVariants[variant]}

  background-color: var(--grey-3);
  color: white;

  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  /* max-width: 370px; */
  height: max-content;
  border-radius: var(--radius-2);

  span {
    line-height: 12px;
    padding: 0px 2px;
    max-width: fit-content;
    border-radius: var(--radius-2);
    background-color: var(--negative);
    position: absolute;
    bottom: 0;
  }
  label {
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-small);
    position: relative;
    padding-bottom: 12px;
    .input-password {
      position: relative;
      button {
        position: absolute;
        color: var(--grey-1);
        font-size: var(--font-size-1);
        background-color: transparent;
        top: 22px;
        bottom: 0;
        right: 15px;
      }
    }

    input,
    select {
      background-color: var(--grey-2);
      color: white;

      width: 100%;
      padding: var(--padding-input);
      border: 2px solid transparent;
      border-radius: var(--radius-2);
      margin-top: 20px;
      font-size: var(--font-size-regular);
      transition: 0.3s;
      &&::placeholder {
        color: var(--grey-1);
      }
    }
    input:focus {
      border: 2px solid white;
      color: white;
    }
    select:focus {
      border: 2px solid white;
      color: white;
    }
  }

  p {
    font-size: var(--font-size-small);
    color: var(--grey-1);
    text-align: center;
  }
`;

export default FormStyled;
