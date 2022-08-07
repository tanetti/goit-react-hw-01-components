import PropTypes from 'prop-types';
import transactionsData from 'data/transactions.json';
import { Box, Text } from 'components/Shared';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const TransactionHistorySection = ({ caption }) => {
  return (
    <Box as="section" py={5} bg="lightBG">
      <Text
        as="h2"
        m={0}
        mb={5}
        fontSize="xxl"
        textAlign="center"
        color="darkText"
      >
        {caption}
      </Text>
      <TransactionHistory transactionsData={transactionsData} />
    </Box>
  );
};

TransactionHistorySection.propTypes = {
  caption: PropTypes.string.isRequired,
};
