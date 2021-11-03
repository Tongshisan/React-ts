
/*
 * @Author: your name
 * @Date: 2021-10-29 17:18:07
 * @LastEditTime: 2021-10-29 17:22:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/React-ts/my-app/src/pages/useEffect/index.tsx
 */
import React, { FunctionComponent, useState } from "react";

interface UseEffectProps {
  
}
 
const UseEffect: FunctionComponent<UseEffectProps> = () => {

  const [count, setCount] = useState<number>(5);


  const handleDivClick = () => {
    setCount(3);
    setTimeout(() => {
      console.log('现在的 count 等于: ', count)
    }, 3000);
  }

  return (
    <div
      onClick={handleDivClick}
    >
      {count}
    </div>
  );
}
 
export default UseEffect;
