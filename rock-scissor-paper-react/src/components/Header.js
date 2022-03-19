import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className="center">{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Rock Paper Scissors",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
