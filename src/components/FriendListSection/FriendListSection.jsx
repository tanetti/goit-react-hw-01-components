import PropTypes from 'prop-types';
import friendsData from 'data/friends.json';
import { Box, Text } from 'components/Shared';
import { FriendsList } from './FriendList/FriendsList';

export const FriendListSection = ({ caption }) => {
  return (
    <Box as="section" py={5} bg="darkBG">
      <Text
        as="h2"
        m={0}
        mb={5}
        fontSize="xxl"
        textAlign="center"
        color="darkText"
      >
        {caption}
      </Text>
      <FriendsList friendsData={friendsData} />
    </Box>
  );
};

FriendListSection.propTypes = {
  caption: PropTypes.string.isRequired,
};
