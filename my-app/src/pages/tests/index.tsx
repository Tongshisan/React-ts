/*
 * @Author: your name
 * @Date: 2021-08-27 15:55:06
 * @LastEditTime: 2022-01-05 18:20:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/React-ts/my-app/src/pages/split/index.tsx
 */
import React, { useEffect, useState, useReducer } from 'react';
import { DatePicker, ConfigProvider } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN.js';
import moment from 'moment';
import 'moment/dist/locale/zh-cn'
import MouseTrap from 'mousetrap';
import '../../components/webComponent'; 
// import {Split} from '../../components';

moment.locale('zh-cn')
export interface TestProps {
  
}
 
const initState = {
  number: 0
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return {
        number: state.number + 1
      }
    case 'decrement':
      return {
        number: state.number - 1
      }
    default:
      break;
  }
}


const Test: React.FC<TestProps> = () => {

  const [num, setNum] = useState<number>(0);

  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    const bindHotKey = () => {
      MouseTrap.bind('4', () => console.log('按了 4'))
      MouseTrap.bind('esc', () => console.log('按了 esc'))
      MouseTrap.bind('option+g', () => console.log('按了 option + g'))
    }
    bindHotKey();
  }, [])

  return (
    <div>
      <div>第一个子元素</div>
      <div>第二个子元素</div>
      <div>
        {num}
      </div>
      <div onClick={() => {
        setNum((pre) => {
          console.log(pre);
          return ++pre
        })
      }}>++</div>

      <div>
        {state?.number}
      </div>
      <div onClick={() => dispatch({type: 'increment'})}>number++</div>
      <div onClick={() => dispatch({type: 'decrement'})}>number--</div>
      {/* <ConfigProvider locale={locale as any}> */}
        <DatePicker locale={locale} />
      {/* </ConfigProvider> */}
      {/* <user-card></user-card> */}
    </div>
  );
}
 
export default Test;
