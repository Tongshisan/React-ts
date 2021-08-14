/*
 * @Author: your name
 * @Date: 2021-07-18 14:01:13
 * @LastEditTime: 2021-07-18 14:10:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/React-ts/my-app/src/hooks/useBoolean.tsx
 */
import * as React from 'react'
import {useRef, useState, useMemo} from 'react'


export const useBoolean = () => {
  const [, forceUpdate] = useState<any>(+new Date())
  const bools: any = useRef<any>({})
  
  const handleBools = useMemo(() => {
    const setBool = (key: string, value: boolean) => {
      const bool: any = bools.current;
      bool[key] = value;
      forceUpdate(+new Date());
    }
    return [setBool];
  }, [])

  return [bools.current, ...handleBools]
}
