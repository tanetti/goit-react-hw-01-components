import { PageTitle } from './PageTitle/PageTitle';
import { UserProfilesSection } from './UserProfilesSection/UserProfilesSection';
import { StatisticsSection } from './StatisticsSection/StatisticsSection';
import { FriendsSection } from './FriendsSection/FriendsSection';
import { Box } from './Shared';

export const App = () => {
  return (
    <Box as="main">
      <PageTitle text="GoIT React HW 01 (Components)" />
      <UserProfilesSection caption="User profiles" />
      <StatisticsSection caption="Statistics" />
      <FriendsSection caption="Friends" />
    </Box>
  );
};
