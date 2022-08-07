import styled from 'styled-components';

export const FriendListStyledItem = styled.li`
  display: flex;
  align-items: center;

  width: ${p => p.theme.sizes.friendListItem};
  padding: ${p => p.theme.space[3]} ${p => p.theme.space[4]};

  background-color: ${p => p.theme.colors.whiteBG};

  border-radius: ${p => p.theme.radii.card};

  box-shadow: ${p => p.theme.shadows.generic};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;

export const FriendStatus = styled.span`
  width: ${p => p.theme.sizes.statusFriend};
  height: ${p => p.theme.sizes.statusFriend};
  margin-right: ${p => p.theme.space[4]};

  padding: ${p => p.theme.space[2]};

  background-color: ${p =>
    p.isOnline ? p.theme.colors.online : p.theme.colors.offline};

  border-radius: ${p => p.theme.radii.round};
`;

export const FriendAvatar = styled.img`
  width: ${p => p.theme.sizes.avatarFriend};
  height: ${p => p.theme.sizes.avatarFriend};
  margin-right: ${p => p.theme.space[4]};

  background-color: ${p => p.theme.colors.lightBG};

  border-radius: ${p => p.theme.radii.card};

  overflow: hidden;
`;

export const FriendName = styled.p`
  margin: ${p => p.theme.space[0]};

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semiBold};

  color: ${p => p.theme.colors.darkText};
`;
