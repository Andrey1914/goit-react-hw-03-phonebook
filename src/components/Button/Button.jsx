import { StyledButton } from './ButtonStyled';

export const Button = ({ type = 'button', children }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};
