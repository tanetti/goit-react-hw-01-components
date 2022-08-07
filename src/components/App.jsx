import { PageTitle } from './PageTitle/PageTitle';
import { UserProfilesSection } from './UserProfilesSection/UserProfilesSection';
import { StatisticsSection } from './StatisticsSection/StatisticsSection';
import { FriendListSection } from './FriendListSection/FriendListSection';
import { TransactionHistorySection } from './TransactionHistorySection/TransactionHistorySection';

export const App = () => {
  return (
    <main>
      <PageTitle text="GoIT React HW 01 (Components)" />

      <UserProfilesSection title="User profiles" />
      <StatisticsSection title="Statistics" />
      <FriendListSection title="Friend list" />
      <TransactionHistorySection title="Transaction history" />
    </main>
  );
};
