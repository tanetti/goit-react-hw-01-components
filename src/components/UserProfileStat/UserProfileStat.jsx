import PropTypes from 'prop-types';
import { insertComma } from 'utils';
import {
  UserProfileStatsListItem,
  UserProfileStatTitle,
  UserProfileStatValue,
} from './UserProfileStat.styled';

export const UserProfileStat = ({ statName, statValue }) => {
  return (
    <UserProfileStatsListItem>
      <UserProfileStatTitle>{statName}</UserProfileStatTitle>
      <UserProfileStatValue>{insertComma(statValue)}</UserProfileStatValue>
    </UserProfileStatsListItem>
  );
};

UserProfileStat.propTypes = {
  statName: PropTypes.string.isRequired,
  statValue: PropTypes.number.isRequired,
};
