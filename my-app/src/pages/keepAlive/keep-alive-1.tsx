/*
 * @Author: your name
 * @Date: 2021-12-02 10:52:21
 * @LastEditTime: 2021-12-02 11:00:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /lizhi/React-ts/my-app/src/pages/keepAlive/keep-alive-1.tsx
 */
import React, { FunctionComponent } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import styles from './index.module.scss';

interface KeepAlive1Props {
  
}
 
const KeepAlive1: FunctionComponent<KeepAlive1Props> = () => {
  const history = useHistory();
  return (
    <div className={styles.test1}>
      <span>我是 KeepAlive1</span>
      <span onClick={() => {
        history.push('/keep2')
      }}>跳转到 keep2</span>
    </div>
  );
}
 
export default KeepAlive1;
