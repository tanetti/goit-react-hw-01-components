import PropTypes from 'prop-types';
import { ContentWrapper } from 'components/Shared';
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsList,
} from './Statistics.styled';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';

export const Statistics = ({ title, stats }) => {
  return (
    <ContentWrapper>
      <StatisticsContainer>
        {title && <StatisticsTitle>{title}</StatisticsTitle>}
        <StatisticsList>
          {stats.map(statData => (
            <StatisticsItem key={statData.id} statData={statData} />
          ))}
        </StatisticsList>
      </StatisticsContainer>
    </ContentWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
