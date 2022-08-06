import PropTypes from 'prop-types';
import { Box, Text } from 'components/Shared';
import { StatItem } from './StatItem/StatItem';

export const Statistics = ({ title, stats }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box
        display="inline-flex"
        flexDirection="column"
        bg="whiteBG"
        borderRadius="card"
        overflow="hidden"
        boxShadow="generic"
      >
        {title && (
          <Text as="h3" p={4} fontSize="l" textAlign="center">
            {title.toUpperCase()}
          </Text>
        )}
        <Box as="ul" display="Flex" m={0} p={0}>
          {stats.map(statData => (
            <StatItem key={statData.id} statData={statData} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
