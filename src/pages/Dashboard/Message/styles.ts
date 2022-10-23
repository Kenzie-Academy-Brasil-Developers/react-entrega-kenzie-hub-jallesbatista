import styled from 'styled-components';

export const MessageStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: var(--radius-2);
  background-color: var(--grey-3);
  gap: 28px;
  color: var(--grey-1);
  h3 {
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-bold);
  }
  p {
    font-size: var(--font-size-regular);
  }
`;
