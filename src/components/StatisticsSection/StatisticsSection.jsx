import PropTypes from 'prop-types';
import statisticsData from 'data/statistics.json';
import { Section, Container, SectionTitle } from 'components/Shared';
import { Statistics } from '../Statistics/Statistics';

export const StatisticsSection = ({ title }) => {
  return (
    <Section>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <Statistics title="Upload stats" stats={statisticsData} />
      </Container>
    </Section>
  );
};

StatisticsSection.propTypes = {
  title: PropTypes.string.isRequired,
};
