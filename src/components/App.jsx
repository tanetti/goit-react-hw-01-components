import { PageTitle } from './PageTitle/PageTitle';
import { UserProfilesSection } from './UserProfilesSection/UserProfilesSection';
import { StatisticsSection } from './StatisticsSection/StatisticsSection';
import { Box } from './Shared';

export const App = () => {
  return (
    <Box as="main">
      <PageTitle text="GoIT React HW 01 (Components)" />
      <UserProfilesSection caption="User profiles" />
      <StatisticsSection caption="Statistics" />
    </Box>
  );
};
