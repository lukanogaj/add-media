import styles from './index.module.scss';
import PropTypes from 'prop-types';

const Heading = ({ isActive }) => {
  return (
    <div
      // handleBtn={handleBtn}
      className={isActive ? styles.heading : styles.headingHidden}
    >
      <h2>Add media</h2>
    </div>
  );
};

Heading.propTypes = {
  children: PropTypes.func,
};

export default Heading;
