
import React, { FunctionComponent } from 'react'
import styles from './test.module.scss';

interface TestProps {
  text: string
}
 
const Test: FunctionComponent<TestProps> = ({text}) => {
  return (
    <div className={styles.test} >
      <span>{text}</span>
    </div>
  );
}
 
export default Test;
