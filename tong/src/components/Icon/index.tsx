/*
 * @Author: your name
 * @Date: 2021-01-31 19:04:24
 * @LastEditTime: 2021-01-31 19:20:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/tong/src/components/Icon/index.tsx
 */
import * as React from 'react';
import '../../aseets/style/icon.css';
interface IIconProps {
    type: string;
}

export default class Icon extends React.PureComponent<IIconProps, any, any> {
    render() {
        console.log('type==', this.props)
        const {type} = this.props;
        return (
            <i className={`icon icon-${type}`}></i>
        )
    }
}