import React, { useState } from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import MediaHandler from '../MediaHandler';
import Heading from '../Heading';

const MediaBtn = () => {
  const [isActive, setActive] = useState('false');
  // const [isOpen, setOpen] = useState('false');

  const handleBtn = () => {
    setActive(!isActive);
  };

  return (
    <div className={styles.mediaContainer}>
      {isActive ? <MediaHandler /> : <Heading />}
      {/* <Heading />
      <MediaHandler /> */}
      <div className={styles.hero}>
        <button
          className={`${styles.btn} ${isActive ? styles.btnActive : ''}`}
          // className={isActive ? styles.btn : styles.btnActive}
          onClick={handleBtn}
        ></button>
      </div>
    </div>
  );
};

MediaBtn.propTypes = {
  activeBtn: PropTypes.func,
};

export default MediaBtn;
