/*
 * @Author: your name
 * @Date: 2021-12-02 10:52:30
 * @LastEditTime: 2021-12-02 11:16:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /lizhi/React-ts/my-app/src/pages/keepAlive/keep-alive-2.tsx
 */
import React, { FunctionComponent } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import styles from './index.module.scss';

interface KeepAlive2Props {
  
}
 
const KeepAlive2: FunctionComponent<KeepAlive2Props> = () => {
  const history = useHistory();
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    console.log('keep-alive2--useEffect');
  }, [])

  return (
    <div className={styles.test2}>
      <span>我是 KeepAlive2</span>
      <span
        onClick={() => {
          setCount(count+1)
        }}
      >
        count++: {count}
      </span>
      <span
        onClick={() => {
          history.push('/keep1')
        }}
      >
        跳转到 keep1
      </span>
    </div>
  );
}
 
export default KeepAlive2;
