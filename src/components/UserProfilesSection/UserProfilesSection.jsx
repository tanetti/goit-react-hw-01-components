import PropTypes from 'prop-types';
import { Section, Container, SectionTitle } from 'components/Shared';
import { UserProfilesList } from 'components/UserProfilesList/UserProfilesList';

export const UserProfilesSection = ({ title }) => {
  return (
    <Section>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <UserProfilesList />
      </Container>
    </Section>
  );
};

UserProfilesSection.propTypes = {
  title: PropTypes.string.isRequired,
};
