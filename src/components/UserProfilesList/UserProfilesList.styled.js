import styled from 'styled-components';

export const ProfilesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[5]};

  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[0]};

  list-style: none;
`;
