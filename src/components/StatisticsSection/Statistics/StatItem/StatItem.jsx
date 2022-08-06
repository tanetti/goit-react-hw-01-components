import PropTypes from 'prop-types';
import { Box, Text } from 'components/Shared';
import { getRandomColor } from 'utils';

export const StatItem = ({ statData }) => {
  return (
    <Box
      as="li"
      display="flex"
      flexDirection="column"
      alignItems="center"
      minWidth="statItemMin"
      p={4}
      bg={getRandomColor()}
    >
      <Text
        as="span"
        mb={4}
        fontSize="m"
        fontWeight="bold"
        color="whiteText"
        textShadow="text"
      >
        {statData.label}
      </Text>
      <Text
        as="span"
        fontSize="l"
        fontWeight="semiBold"
        color="whiteText"
        textShadow="text"
      >{`${statData.percentage}%`}</Text>
    </Box>
  );
};

StatItem.propTypes = {
  statData: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
