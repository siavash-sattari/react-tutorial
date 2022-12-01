import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ text, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <Link to='/' style={{ textDecoration: 'none', color: '#ff6a95' }}>
          <h2>Feedback UI - {text}</h2>
        </Link>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'React App',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
};

export default Header;
