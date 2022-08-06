import styled from 'styled-components';

export const AvatarImage = styled.img`
  width: ${p => p.theme.sizes.avatarImage};
  height: ${p => p.theme.sizes.avatarImage};
  margin-bottom: ${p => p.theme.space[5]};

  background-color: ${p => p.theme.colors.lightBG};

  border-radius: ${p => p.theme.radii.round};
`;
