import PropTypes from 'prop-types';
import { Stat } from './Stat/Stat';
import { Box, Text } from 'components/Shared';
import { AvatarImage } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      as="li"
      display="flex"
      flexDirection="column"
      width="profileWidth"
      borderRadius="card"
      boxShadow="generic"
      overflow="hidden"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={5}
        bg="whiteBG"
      >
        <AvatarImage src={avatar} alt="User avatar" />
        <Text m={0} mb={4} fontSize="l" fontWeight="bold" color="darkText">
          {username}
        </Text>
        <Text m={0} mb={4} fontSize="m" fontWeight="semiBold" color="lightText">
          {`@${tag}`}
        </Text>
        <Text m={0} fontSize="m" fontWeight="semiBold" color="lightText">
          {location}
        </Text>
      </Box>
      <Box as="ul" p={0} display="flex" bg="lightBG">
        {Object.entries(stats).map(([statName, statValue], idx, arr) => (
          <Stat
            key={statName}
            statName={statName}
            statValue={statValue}
            idx={idx}
            length={arr.length - 1}
          />
        ))}
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  userData: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
