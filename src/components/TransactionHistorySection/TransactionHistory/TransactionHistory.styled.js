import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: ${p => p.theme.radii.card};

  box-shadow: ${p => p.theme.shadows.generic};

  overflow: hidden;
`;
