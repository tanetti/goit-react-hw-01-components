import styled from 'styled-components';

export const UserProfileListItem = styled.li`
  display: flex;
  flex-direction: column;

  width: ${p => p.theme.sizes.profileWidth};

  border-radius: ${p => p.theme.radii.card};

  box-shadow: ${p => p.theme.shadows.generic};

  overflow: hidden;
`;

export const UserProfileMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${p => p.theme.space[5]};

  background-color: ${p => p.theme.colors.whiteBG};
`;

export const UserProfileAvatarImage = styled.img`
  width: ${p => p.theme.sizes.avatarImage};
  height: ${p => p.theme.sizes.avatarImage};
  margin-bottom: ${p => p.theme.space[5]};

  background-color: ${p => p.theme.colors.lightBG};

  border-radius: ${p => p.theme.radii.round};
`;

export const UserProfileTitle = styled.p`
  margin: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[5]};

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.colors.darkText};
`;

export const UserProfileDescriprions = styled.p`
  margin: ${p => p.theme.space[0]};

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};

  color: ${p => p.theme.colors.lightText};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;

export const UserProfileStatsList = styled.ul`
  list-style: none;

  display: flex;

  padding: ${p => p.theme.space[0]};

  background-color: ${p => p.theme.colors.lightBG};
`;
