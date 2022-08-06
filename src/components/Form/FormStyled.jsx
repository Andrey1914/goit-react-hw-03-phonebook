import styled from '@emotion/styled';

export const FormPhonebook = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 270px;
  height: 20px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  margin-left: auto;
  font-size: 16px;
  width: 150px;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  outline: none;
  background-color: rgb(101, 227, 255);
  box-shadow: 0px 3px 5px 1px rgba(45, 90, 124, 0.2);
  transition: background-color 250ms linear, transform 250ms ease-in-out;

  :hover {
    background-color: rgb(0, 149, 255);
    color: #ffffff;
    transform: scale(1.08);
  }
`;
