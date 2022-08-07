import styled from 'styled-components';

export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${p => p.theme.sizes.statItemMin};
  padding: ${p => p.theme.space[4]} ${p => p.theme.space[3]};

  background-color: ${p => p.backgroundColor};

  @media screen and (min-width: ${p => p.theme.breakPoints.midMin}) {
    padding: ${p => p.theme.space[4]};
  }
`;

export const StatLabel = styled.span`
  margin-bottom: ${p => p.theme.space[3]};

  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.semiBold};

  color: ${p => p.theme.colors.whiteText};

  text-shadow: ${p => p.theme.shadows.text};

  @media screen and (min-width: ${p => p.theme.breakPoints.midMin}) {
    margin-bottom: ${p => p.theme.space[4]};

    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;

export const StatValue = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};

  color: ${p => p.theme.colors.whiteText};

  text-shadow: ${p => p.theme.shadows.text};

  @media screen and (min-width: ${p => p.theme.breakPoints.midMin}) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;
