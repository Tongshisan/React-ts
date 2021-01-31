/*
 * @Author: your name
 * @Date: 2021-01-31 15:32:03
 * @LastEditTime: 2021-01-31 15:43:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/2021-01-31/src/pages/index/index.ts
 */


 import * as React from 'react';

 class Index extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: '小童'
        };
    }
    componentDidMount() {
        console.log('初始...')
    }
 }

 export default Index;