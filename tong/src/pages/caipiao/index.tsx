/* eslint-disable @typescript-eslint/no-useless-constructor */
/*
 * @Author: your name
 * @Date: 2021-02-14 17:47:12
 * @LastEditTime: 2021-02-14 20:14:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/tong/src/pages/caipiao/index.ts
 */

import * as React from 'react';
import Card from '../../components/card/index';
import Button from '../../components/Button/index';
import utils from '../../utils/index';
import {ICaipiaoProps, ICaipiaoState} from './define';
import './index.css';
class Caipiao extends React.Component<ICaipiaoProps, ICaipiaoState> {
    constructor(props: ICaipiaoProps) {
        super(props);
        this.state = {
            nums: [],
        }
    }

    buttonClick = () => {
        console.log('下一个');
        const {nums} = this.state;
        if (nums.length > 6) {
            return;
        }
        const type: number = nums.length < 6 ? 0 : 1;
        const num = utils.getRandomNum(type, nums);
        console.log(num)
        nums.push(num);
        this.setState({
            nums: nums
        })
    }

    renderNum = () => {
        const {nums} = this.state;
        return (
            <div className="nums-wrap">
                {
                    nums.map((num: number, index: number) => (
                        <Card
                            key={index}
                            background={index < 6 ? 'red' : 'blue'}
                            number={num}
                        ></Card>
                      )  
                    )
                }
            </div>
        )
    }

    render() {
        return (
            <div className="caipiao-wrap">
                <h2>欢迎来到小童彩票站</h2>
                <Button
                    type="normal"
                    text={`抽取下一个`}
                    onClick={this.buttonClick}
                ></Button>
                {
                    this.renderNum()
                }
            </div>
        )
    }
}

export default Caipiao;