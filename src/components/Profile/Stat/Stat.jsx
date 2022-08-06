import PropTypes from 'prop-types';
import { toUpperCaseFirstLetter, insertComma } from 'utils';
import { Box, Text } from 'components/Shared';

export const Stat = ({ statName, statValue, idx, length }) => {
  return (
    <Box
      as="li"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="Calc(100%/3)"
      p={4}
      borderTop="cardInner"
      borderRight={length - idx > 0 ? 'cardInner' : null}
    >
      <Text
        as="span"
        mb={3}
        fontSize="s"
        fontWeight="semiBold"
        color="lightText"
      >
        {toUpperCaseFirstLetter(statName)}
      </Text>
      <Text as="span" fontSize="m" fontWeight="Bold" color="darkText">
        {insertComma(statValue)}
      </Text>
    </Box>
  );
};

Stat.propTypes = {
  statName: PropTypes.string.isRequired,
  statValue: PropTypes.number.isRequired,
  idx: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
