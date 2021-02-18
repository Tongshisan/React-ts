/* eslint-disable @typescript-eslint/no-useless-constructor */
/*
 * @Author: your name
 * @Date: 2021-02-14 18:11:50
 * @LastEditTime: 2021-02-14 18:46:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/tong/src/components/Button/index.tsx
 */
import * as React from 'react';
import {IButtonProps, IButtonState} from './define';
import './index.css';

class Button extends React.PureComponent<IButtonProps, IButtonState> {
    constructor(props: IButtonProps) {
        super(props);
    }

    render() {
        const {type, text, onClick} = this.props;
        return (
            <div
                className={`button ${type}`}
                onClick={onClick}
            >
                {text}
            </div>
        )
    }
}

export default Button;