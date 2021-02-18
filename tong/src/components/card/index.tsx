/* eslint-disable @typescript-eslint/no-useless-constructor */
/*
 * @Author: your name
 * @Date: 2021-02-14 17:54:50
 * @LastEditTime: 2021-02-14 18:42:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/tong/src/components/card/index.tsx
 */
import * as React from 'react';
// import classnames from 'classnames';
import {ICardProps, ICardState} from './define';
import './index.css';

class Card extends React.PureComponent<ICardProps, ICardState> {
    constructor(props: ICardProps) {
        super(props);
    }

    render() {
        const {background, number} = this.props;
        return (
            <div className={`card-wrap ${background}`}>
                <span>
                    {number}
                </span>
            </div>
        )
    }
}

export default Card;