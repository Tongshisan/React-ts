/*
 * @Author: your name
 * @Date: 2021-06-13 19:58:50
 * @LastEditTime: 2021-06-13 20:02:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/React-ts/my-app/src/pages/test/index.tsx
 */
import React from 'react';

export interface ITestProps {
  
}
 
export interface ITestState {
  
}
 
class Test extends React.Component<ITestProps, ITestState> {
  constructor(props: ITestProps) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() { 
    return (
      <div>
        <h1>test</h1>
      </div>
    );
  }
}
 
export default Test;
