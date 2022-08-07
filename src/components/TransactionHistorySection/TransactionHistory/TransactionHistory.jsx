import PropTypes from 'prop-types';
import { Box, Text } from 'components/Shared';
import { toUpperCaseFirstLetter } from 'utils';
import { Table } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactionsData }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Table>
        <Box as="thead" bg="tableHeadBG">
          <Box as="tr">
            {Object.keys(transactionsData[0]).map(
              key =>
                key !== 'id' && (
                  <Text
                    key={key}
                    as="th"
                    minWidth="tableTdMin"
                    p={3}
                    fontSize="s"
                    fontWeight="semiBold"
                    color="whiteText"
                    border="cardInner"
                  >
                    {key.toUpperCase()}
                  </Text>
                )
            )}
          </Box>
        </Box>
        <Box as="tbody">
          {transactionsData.map(({ id, type, amount, currency }, idx) => {
            return (
              <Box key={id} as="tr" bg={idx % 2 === 0 ? 'whiteBG' : 'lightBG'}>
                <Text
                  as="td"
                  p={3}
                  fontSize="s"
                  textAlign="center"
                  color="lightText"
                  border="cardInner"
                >
                  {toUpperCaseFirstLetter(type)}
                </Text>
                <Text
                  as="td"
                  p={3}
                  fontSize="s"
                  textAlign="center"
                  color="lightText"
                  border="cardInner"
                >
                  {amount}
                </Text>
                <Text
                  as="td"
                  p={3}
                  fontSize="s"
                  textAlign="center"
                  color="lightText"
                  border="cardInner"
                >
                  {currency}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Table>
    </Box>
  );
};

TransactionHistory.propTypes = {
  transactionsData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
