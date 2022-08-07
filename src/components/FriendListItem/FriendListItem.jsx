import PropTypes from 'prop-types';
import {
  FriendListStyledItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ friendData: { avatar, name, isOnline } }) => {
  return (
    <FriendListStyledItem>
      <FriendStatus isOnline={isOnline} />
      <FriendAvatar src={avatar} alt="User avatar" width="80" />
      <FriendName>{name}</FriendName>
    </FriendListStyledItem>
  );
};

FriendListItem.propTypes = {
  friendData: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
