import PropTypes from 'prop-types';
import usersData from 'data/users.json';
import { Profile } from './Profile/Profile';
import { Box, Text } from 'components/Shared';

export const UserProfilesSection = ({ caption }) => {
  return (
    <Box as="section" py={5} bg="darkBG">
      <Text as="h2" m={0} mb={5} fontSize="xxl" textAlign="center">
        {caption}
      </Text>
      <Box
        as="ul"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gridGap={5}
        m={0}
        p={0}
      >
        {usersData.map(user => (
          <Profile key={user.username} userData={user} />
        ))}
      </Box>
    </Box>
  );
};

UserProfilesSection.propTypes = {
  caption: PropTypes.string.isRequired,
};
