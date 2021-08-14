/*
 * @Author: your name
 * @Date: 2021-07-18 13:37:47
 * @LastEditTime: 2021-07-18 18:01:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/React-ts/my-app/src/pages/isShow/index.tsx
 */
import React from 'react'
import { useBoolean } from '@/hooks';
import styles from './index.module.scss';
export interface IsShowProps {

}

const IsShow: React.FC<IsShowProps> = () => {

  const [bools, setBool] = useBoolean()

  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <div
          className={styles.button}
          onClick={() => setBool('isShowLeft', !bools.isShowLeft)}
        >
          点击打开
        </div>
        {
          bools.isShowLeft
          && (
            <div className={styles.children}>
              我是左孩子
            </div>
          )
        }
      </div>
      <div
        className={styles.middle}>
        <div
          className={styles.button}
          onClick={() => setBool('isShowMiddle', !bools.isShowMiddle)}
        >
          点击打开
        </div>
        {
          bools.isShowMiddle
          && (
            <div className={styles.children}>
              我是中间孩子
            </div>
          )
        }
      </div>
      <div className={styles.right}>
        <div
          className={styles.button}
          onClick={() => setBool('isShowRight', !bools.isShowRight)}
        >
          点击打开
        </div>
        {
          bools.isShowRight
          && (
            <div className={styles.children}>
              我是右孩子
            </div>
          )
        }
      </div>
    </div>
  );
}

export default IsShow;
