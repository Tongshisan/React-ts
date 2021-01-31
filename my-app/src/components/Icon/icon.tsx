/* eslint-disable @typescript-eslint/no-useless-constructor */
/*
 * @Author: your name
 * @Date: 2021-01-31 17:25:27
 * @LastEditTime: 2021-01-31 17:44:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/my-app/src/components/Icon/icon.tsx
 */
import * as React from 'react';
import '../../assets/style/icon.css';
interface IIconProps {
    type: string;
}
export default class Icon extends React.PureComponent<IIconProps, any, any> {
    constructor(props: IIconProps) {
        super(props);
    }
    render() {
        const {type} = this.props;
        return (
            <i className={`icon icon-${type}`}></i>
        )
    }
}