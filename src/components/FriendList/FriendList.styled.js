import styled from 'styled-components';

export const FriendListStyledList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;

  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[0]};
`;
