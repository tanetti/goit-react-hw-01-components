import { Profile } from './Profile/Profile';
import usersData from 'data/users.json';
import { Box } from './Shared/Box';

export const App = () => {
  return (
    <Box as="main">
      <Box as="section" py={5} bg="darkBG">
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
    </Box>
  );
};
