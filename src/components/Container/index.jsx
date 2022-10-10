import ContainerStyled from './styles';

export const Container = ({ variant, children }) => (
  <ContainerStyled variant={variant}>{children}</ContainerStyled>
);
