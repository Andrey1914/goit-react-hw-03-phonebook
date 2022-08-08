import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[6]}px;
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
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};
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
