import PropTypes from 'prop-types';

const Header = ({ text }) => {
  return (
    <header>
      <div className='container'>
        <h2>Feedback UI - {text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'React App'
};

Header.propTypes = {
  text: PropTypes.string
};

export default Header;
