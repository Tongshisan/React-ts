/*
 * @Author: your name
 * @Date: 2021-08-27 15:31:57
 * @LastEditTime: 2021-08-27 16:01:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/React-ts/my-app/src/components/Split/index.tsx
 */
import * as React from 'react';
import { useState, useEffect, Children } from 'react';

type SplitDirection = 'horizontal' | 'vertical';

export interface ISplitProps {
  direction: SplitDirection;
  initSizes: number[];
  minSizes: number[];
}
 
const Split: React.FC<ISplitProps> = ({
  direction,
  initSizes,
  minSizes,
  children
}) => {

  console.log('子元素数量', Children.count(children))

  return (
    <div>
      {
        children
      }
    </div>
  );
}
 
export default Split;
