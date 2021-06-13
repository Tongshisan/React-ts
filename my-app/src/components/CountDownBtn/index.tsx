/*
 * @Author: your name
 * @Date: 2021-06-12 19:44:44
 * @LastEditTime: 2021-06-12 20:13:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/React-ts/my-app/src/components/CountDownBtn/index.tsx
 */
import React, {useEffect, useState, useRef, useCallback} from 'react';

const CountDownBtn = ({initCount = 60}: {initCount: number}) => {
  const intervalRef = useRef<any>(null);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    if(count === initCount) {
      intervalRef.current = setInterval(() => {
        setCount((preCount) => preCount - 1);
      }, 1000)
    } else if (count === 0) {
      clearInterval(intervalRef.current);
    }
  }, [count, initCount]);

  const handleBtnClick = useCallback(() => {
    setCount(initCount)
  }, [initCount]);

  return (
    <button
      disabled={!!count}
      onClick={handleBtnClick}
    >
      {count ? `${count} s` : '获取验证码'}
    </button>
  );
}

export default CountDownBtn;
