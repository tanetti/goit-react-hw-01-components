import PropTypes from 'prop-types';
import { Box, Text } from 'components/Shared';
import { Status, Avatar } from './FriendListItem.styled';

export const FriendListItem = ({ friendData, idx, length }) => {
  const { avatar, name, isOnline } = friendData;

  return (
    <Box
      as="li"
      display="flex"
      alignItems="center"
      minWidth="friendListItemMin"
      mb={length - idx > 0 ? 4 : 0}
      py={3}
      px={4}
      bg="whiteBG"
      borderRadius="card"
      boxShadow="generic"
    >
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" />
      <Text m={0} fontSize="l" fontWeight="semiBold" color="darkText">
        {name}
      </Text>
    </Box>
  );
};

FriendListItem.propTypes = {
  friendData: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  idx: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
