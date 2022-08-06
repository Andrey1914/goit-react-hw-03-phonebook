import styled from '@emotion/styled';

export const Wrap = styled.div`
  max-width: 400px;
  margin: 32px auto;
  padding: ${p => p.theme.space[4]}px;
  box-shadow: 0px 5px 10px 2px rgba(45, 90, 124, 0.2);
  border-radius: ${p => p.theme.radii.normal};
`;
