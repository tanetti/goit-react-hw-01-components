import PropTypes from 'prop-types';
import friendsData from 'data/friends.json';
import { Section, Container, SectionTitle } from 'components/Shared';
import { FriendList } from 'components/FriendList/FriendList';

export const FriendListSection = ({ title }) => {
  return (
    <Section>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <FriendList friendsData={friendsData} />
      </Container>
    </Section>
  );
};

FriendListSection.propTypes = {
  title: PropTypes.string.isRequired,
};
