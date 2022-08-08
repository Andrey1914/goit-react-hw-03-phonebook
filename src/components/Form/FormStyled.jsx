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
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};
  display: flex;
  justify-content: space-between;
`;

// export const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 20px;
//   padding: ${p => p.theme.space[2]}px;
//   padding-left: ${p => p.theme.space[4]}px;
//   height: 30px;
//   cursor: pointer;
//   border: ${p => p.theme.borders.none};
//   border-radius: ${p => p.theme.radii.normal};
//   transition: background-color 250ms linear, transform 250ms ease-in-out;
//   background-color: ${p => p.theme.colors.bgc};
//   box-shadow: 0px 3px 5px 1px rgba(45, 90, 124, 0.2);
//   :hover,
//   :focus {
//     background-color: ${p => p.theme.colors.bgcHover};
//     color: ${p => p.theme.colors.textHover};
//     transform: scale(1.08);
//   }
// `;
