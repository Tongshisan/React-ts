/*
 * @Author: your name
 * @Date: 2021-12-06 17:09:06
 * @LastEditTime: 2021-12-07 16:21:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /lizhi/React-ts/my-app/src/pages/dnd/test.tsx
 */
import React, { FunctionComponent } from 'react'
import styles from './test.module.scss';

interface TestProps {
  text: string
}
 
const Test: FunctionComponent<TestProps> = ({text}) => {
  return (
    <div className={styles.test} onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      e.nativeEvent.stopImmediatePropagation()
      console.log('test', text, e);
    }}>
      <span onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation()
        console.log('span', text)
      }}>{text}</span>
      <span>span</span>
      <p>ppppppp</p>
      <div>div</div>
    </div>
  );
}
 
export default Test;
