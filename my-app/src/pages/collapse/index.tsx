/*
 * @Author: your name
 * @Date: 2021-08-25 10:50:57
 * @LastEditTime: 2021-08-25 10:56:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/React-ts/my-app/src/pages/collapse/index.tsx
 */
import React, {useState} from 'react'
import {Collapse} from 'react-collapse';

export interface ICollapseProps {
  
}
 
const CollapseComp: React.FC<ICollapseProps> = () => {

  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div>
      <Collapse isOpened={isShow}>
        <div>Random content</div>
        <div>sdsdsd</div>
      </Collapse>

      <div onClick={() => setIsShow(!isShow)}>toggle</div>
    </div>
  );
}
 
export default CollapseComp;
