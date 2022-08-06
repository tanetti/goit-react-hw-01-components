import PropTypes from 'prop-types';
import { Box } from 'components/Shared';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendsList = ({ friendsData }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box as="ul" display="inline-flex" flexDirection="column" m={0} p={0}>
        {friendsData.map((friendData, idx, arr) => (
          <FriendListItem
            key={friendData.id}
            friendData={friendData}
            idx={idx}
            length={arr.length - 1}
          />
        ))}
      </Box>
    </Box>
  );
};

FriendsList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
