import PropTypes from 'prop-types';
import transactionsData from 'data/transactions.json';
import { Section, Container, SectionTitle } from 'components/Shared';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const TransactionHistorySection = ({ title }) => {
  return (
    <Section>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <TransactionHistory transactionsData={transactionsData} />
      </Container>
    </Section>
  );
};

TransactionHistorySection.propTypes = {
  title: PropTypes.string.isRequired,
};
