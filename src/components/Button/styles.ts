import styled, { css } from 'styled-components';

const ButtonStyledVariants = {
  primary: css`
    background-color: var(--color-primary);
    padding: var(--padding-button-1);
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-medium);
    &&:hover {
      background-color: var(--color-primary-focus);
    }
    &&:active {
      scale: 0.95;
    }
  `,
  secondary: css`
    background-color: var(--grey-3);
    padding: var(--padding-button-2);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-semibold);
    &&:hover {
      background-color: var(--grey-2);
    }
    &&:active {
      scale: 0.9;
    }
  `,
  secondaryPlus: css`
    background-color: var(--grey-3);
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-semibold);
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    &&:hover {
      background-color: var(--grey-2);
    }
    &&:active {
      scale: 0.9;
    }
  `,
  negative: css`
    background-color: var(--color-primary-negative);
    padding: var(--padding-button-1);
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-medium);
    &&:active {
      scale: 0.95;
    }
  `,
  disable: css`
    width: 100%;
    background-color: var(--grey-1);
    padding: var(--padding-button-1);
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-medium);
    &&:hover {
      background-color: var(--grey-2);
    }
    &&:active {
      scale: 0.95;
    }
  `,
};

interface iButtonStyledProps {
  variant?: 'primary' | 'secondary' | 'secondaryPlus' | 'negative' | 'disable';
}

const ButtonStyled = styled.button<iButtonStyledProps>`
  ${({ variant }) => ButtonStyledVariants[variant || 'primary']}
  color: white;

  border-radius: var(--radius-2);

  cursor: pointer;
  transition: 0.3s;
`;

export default ButtonStyled;
