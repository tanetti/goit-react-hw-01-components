import PropTypes from 'prop-types';
import { UserProfileStat } from 'components/UserProfileStat/UserProfileStat';
import {
  UserProfileListItem,
  UserProfileMainContainer,
  UserProfileAvatarImage,
  UserProfileTitle,
  UserProfileDescriprions,
  UserProfileStatsList,
} from './UserProfile.styled';

export const UserProfile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfileListItem>
      <UserProfileMainContainer>
        <UserProfileAvatarImage src={avatar} alt="User avatar" />
        <UserProfileTitle>{username}</UserProfileTitle>
        <UserProfileDescriprions>{`@${tag}`}</UserProfileDescriprions>
        <UserProfileDescriprions>{location}</UserProfileDescriprions>
      </UserProfileMainContainer>
      <UserProfileStatsList>
        {Object.entries(stats).map(([statName, statValue]) => (
          <UserProfileStat
            key={statName}
            statName={statName}
            statValue={statValue}
          />
        ))}
      </UserProfileStatsList>
    </UserProfileListItem>
  );
};

UserProfile.propTypes = {
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
