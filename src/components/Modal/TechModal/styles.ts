import styled from 'styled-components';

const TechModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    display: flex;
    flex-direction: column;
    max-width: 360px;
    width: 90%;
    border-radius: var(--radius-2);
    overflow: hidden;
    color: #ffffff;
    animation: topIn 0.5s ease;

    .modal__title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      background-color: var(--grey-2);
      padding: 14px 20px;
      align-items: center;
      font-size: 14px;
      font-weight: var(--font-weight-bold);

      button {
        background-color: transparent;
        color: var(--grey-1);
        font-size: 24px;
        transition: 0.5s;
        cursor: pointer;
      }
      button:active {
        scale: 0.9;
        color: #ffffff;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      background-color: var(--grey-3);
      padding: 24px 20px 32px 20px;
      gap: 8px;

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

      button {
        width: 100%;
      }
    }

    @keyframes topIn {
      from {
        transform: translateY(-100px);
        opacity: 0;
      }
      to {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }

  @media (min-width: 768px) {
    .modal {
      margin-top: -60px;
    }
  }
`;

export default TechModalStyled;
