import React from 'react';
import styles from './Wrapper.module.css';

const Wrapper: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Wrapper;
