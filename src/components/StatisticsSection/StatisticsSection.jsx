import PropTypes from 'prop-types';
import { Box, Text } from 'components/Shared';
import statisticsData from 'data/statistics.json';
import { Statistics } from './Statistics/Statistics';

export const StatisticsSection = ({ caption }) => {
  return (
    <Box as="section" py={5} bg="lightBG">
      <Text as="h2" m={0} mb={5} fontSize="xxl" textAlign="center">
        {caption}
      </Text>
      <Statistics title="Upload stats" stats={statisticsData} />
    </Box>
  );
};

StatisticsSection.propTypes = {
  caption: PropTypes.string.isRequired,
};
