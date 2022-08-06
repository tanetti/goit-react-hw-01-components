import styled from 'styled-components';

export const Status = styled.span`
  width: ${p => p.theme.sizes.statusFriend};
  height: ${p => p.theme.sizes.statusFriend};
  margin-right: ${p => p.theme.space[4]};

  padding: ${p => p.theme.space[2]};

  background-color: ${p =>
    p.isOnline ? p.theme.colors.online : p.theme.colors.offline};

  border-radius: ${p => p.theme.radii.round};
`;

export const Avatar = styled.img`
  width: ${p => p.theme.sizes.avatarFriend};
  height: ${p => p.theme.sizes.avatarFriend};
  margin-right: ${p => p.theme.space[4]};

  background-color: ${p => p.theme.colors.lightBG};

  border-radius: ${p => p.theme.radii.card};

  overflow: hidden;
`;
