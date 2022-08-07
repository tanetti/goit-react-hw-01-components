import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils';
import {
  StatisticsListItem,
  StatLabel,
  StatValue,
} from './StatisticsItem.styled';

export const StatisticsItem = ({ statData: { label, percentage } }) => {
  return (
    <StatisticsListItem backgroundColor={getRandomHexColor()}>
      <StatLabel>{label}</StatLabel>
      <StatValue>{`${percentage}%`}</StatValue>
    </StatisticsListItem>
  );
};

StatisticsItem.propTypes = {
  statData: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
