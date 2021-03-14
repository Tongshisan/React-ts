/*
 * @Author: your name
 * @Date: 2021-03-14 21:02:51
 * @LastEditTime: 2021-03-14 21:26:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/dom-diff/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createElement, render, renderDom} from './element';
import reportWebVitals from './reportWebVitals';


const virtualDom = createElement('ul', {class: 'list'}, [
  createElement('li', {class: 'item'}, ['李豆子']),
  createElement('li', {class: 'item'}, ['童麻子']),
  createElement('li', {class: 'item'}, ['李冬瓜']),
  createElement('li', {class: 'item'}, ['童西瓜']),
])

console.log(virtualDom);
const el = render(virtualDom);
renderDom(el, document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
