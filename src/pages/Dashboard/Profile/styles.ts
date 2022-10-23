import styled from 'styled-components';

export const ProfileStyled = styled.section`
  margin-top: 80px;
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;

  border-top: 2px solid var(--grey-2);
  border-bottom: 2px solid var(--grey-2);
  .profile__info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    h2 {
      text-align: left;
      font-size: var(--font-size-1);
      font-weight: var(--font-weight-bold);
    }
    p {
      font-size: var(--font-size-small);
      color: var(--grey-1);
      font-weight: var(--font-weight-semibold);
    }
  }
`;
