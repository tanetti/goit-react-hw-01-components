import PropTypes from 'prop-types';
import css from './PageTitle.module.css';

export const PageTitle = ({ text }) => {
  return <h1 className={css.visually_hidden}>{text}</h1>;
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
