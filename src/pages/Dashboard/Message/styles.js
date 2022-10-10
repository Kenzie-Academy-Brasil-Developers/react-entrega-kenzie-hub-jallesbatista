import styled from 'styled-components';

export const Message = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 40px;
  color: white;
  h3 {
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-bold);
  }
  p {
    font-size: var(--font-size-regular);
  }
`;
