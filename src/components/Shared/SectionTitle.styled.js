import styled from 'styled-components';

export const SectionTitle = styled.h2`
  margin: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[6]};

  font-size: ${p => p.theme.fontSizes.xxl};
  text-align: center;
  text-transform: uppercase;

  color: ${p => p.theme.colors.darkText};
`;
