import PropTypes from 'prop-types';
import { ContentWrapper } from 'components/Shared';
import { FriendListStyledList } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friendsData }) => {
  return (
    <ContentWrapper>
      <FriendListStyledList>
        {friendsData.map(friendData => (
          <FriendListItem key={friendData.id} friendData={friendData} />
        ))}
      </FriendListStyledList>
    </ContentWrapper>
  );
};

FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
