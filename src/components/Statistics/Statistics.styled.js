import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${p => p.theme.colors.whiteBG};

  border-radius: ${p => p.theme.radii.card};
  box-shadow: ${p => p.theme.shadows.generic};

  overflow: hidden;
`;

export const StatisticsTitle = styled.h3`
  padding: ${p => p.theme.space[0]};

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  text-transform: uppercase;

  color: ${p => p.theme.colors.darkText};
`;

export const StatisticsList = styled.ul`
  list-style: none;

  display: flex;

  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[0]};
`;
