/*
 * @Author: your name
 * @Date: 2021-01-31 15:58:55
 * @LastEditTime: 2021-01-31 17:46:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/my-app/src/pages/index.tsx
 */
import * as React from 'react';
import Icon from '../components/Icon/icon';

export default class Index extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: '小彤彤'
        }
    }

    render() {
        return (
            <div>
                测试 ts
                <Icon type="notice"></Icon>
            </div>
        )
    }
}