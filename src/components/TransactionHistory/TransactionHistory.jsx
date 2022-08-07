import PropTypes from 'prop-types';
import { ContentWrapper } from 'components/Shared';
import { Box } from 'components/Shared';
import {
  TransactionTable,
  TransactionTableHeadCell,
  TransactionTableDataCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactionsData }) => {
  return (
    <ContentWrapper>
      <TransactionTable>
        <Box as="thead" bg="tableHeadBG">
          <tr>
            {Object.keys(transactionsData[0]).map(
              key =>
                key !== 'id' && (
                  <TransactionTableHeadCell key={key}>
                    {key}
                  </TransactionTableHeadCell>
                )
            )}
          </tr>
        </Box>
        <Box as="tbody">
          {transactionsData.map(({ id, type, amount, currency }, idx) => {
            return (
              <Box key={id} as="tr" bg={idx % 2 === 0 ? 'whiteBG' : 'lightBG'}>
                <TransactionTableDataCell>{type}</TransactionTableDataCell>
                <TransactionTableDataCell>{amount}</TransactionTableDataCell>
                <TransactionTableDataCell>{currency}</TransactionTableDataCell>
              </Box>
            );
          })}
        </Box>
      </TransactionTable>
    </ContentWrapper>
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
