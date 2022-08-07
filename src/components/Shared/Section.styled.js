import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: ${p => p.theme.space[6]} 0;

  background-color: ${p => p.theme.colors.lightBG};

  &:nth-child(even) {
    background-color: ${p => p.theme.colors.darkBG};
  }
`;
