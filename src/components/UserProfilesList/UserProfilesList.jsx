import usersData from 'data/users.json';
import { ProfilesList } from './UserProfilesList.styled';
import { UserProfile } from 'components/UserProfile/UserProfile';

export const UserProfilesList = () => {
  return (
    <ProfilesList>
      {usersData.map(({ username, tag, location, avatar, stats }) => (
        <UserProfile
          key={username}
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      ))}
    </ProfilesList>
  );
};
