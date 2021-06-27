/*
 * @Author: your name
 * @Date: 2021-06-13 20:21:54
 * @LastEditTime: 2021-06-13 22:41:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/React-ts/my-app/src/components/HoverShowCard/index.tsx
 */
import React from 'react'
import {Icon} from '@/components';
// import './index.css';
import style from './index.module.scss';
import './index.scss';

function HoverShowCard({title, children}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="parent-wrap">
      <span>
        {title}
      </span>
      <span className={style.test}>啦啦啦a</span>
      <Icon
        type="arrow-black"
        className="margin-left-10 transition"
      />

      <div>
        {
          children
        }
      </div>
    </div>
  )
}

export default HoverShowCard;
