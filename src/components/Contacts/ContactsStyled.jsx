import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[6]}px;
  padding: 0;
  list-style-type: disc;
`;

export const Element = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const Text = styled.p`
  margin-right: ${p => p.theme.space[4]}px;
`;

export const Button = styled.button`
  font-size: 16px;
  width: 100px;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  outline: none;
  background-color: rgb(255, 136, 136);
  box-shadow: 0px 3px 5px 1px rgba(45, 90, 124, 0.2);
  transition: background-color 250ms linear, transform 250ms ease-in-out;

  :hover {
    background-color: rgb(255, 0, 0);
    color: #ffffff;
    transform: scale(1.08);
  }
`;
