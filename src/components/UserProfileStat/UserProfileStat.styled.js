import styled from 'styled-components';

export const UserProfileStatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: calc(100% / 3);
  padding: ${p => p.theme.space[4]};

  border-top: ${p => p.theme.borders.cardInner};

  &:not(:last-child) {
    border-right: ${p => p.theme.borders.cardInner};
  }
`;

export const UserProfileStatTitle = styled.span`
  margin-bottom: ${p => p.theme.space[3]};

  font-size: ${p => p.theme.fontSizes.s};
  text-transform: capitalize;

  color: ${p => p.theme.colors.darkText};
`;

export const UserProfileStatValue = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};

  color: ${p => p.theme.colors.darkText};
`;
