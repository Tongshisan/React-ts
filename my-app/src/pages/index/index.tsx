/*
 * @Author: your name
 * @Date: 2021-01-31 15:58:55
 * @LastEditTime: 2021-10-29 17:17:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/my-app/src/pages/index.tsx
 */
import * as React from 'react';
import html2canvas from 'html2canvas';

import {Icon, DemoUseReducer, CountDownBtn, HoverShowCard} from '@/components';
import './index.css';

const options = {};
export default class Index extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: '小彤彤'
        }
    }

    // componentDidMount() {
    //     html2canvas(document.body, options).then((canvas) => {
    //         document.body.appendChild(canvas)
    //     })
    // }

    render() {
        return (
            <div>
                测试 ts
                <Icon type="notice"></Icon>

                <DemoUseReducer />
                {/* 调用相机 */}
                <input type="file" accept="image/*" capture='camera'/>
                {/* 调用录像机 */}
                <input type="file" id='video' accept="video/*" capture='camcorder' />
                {/* 调用相册 */}
                <input type="file" accept="image/*" /> 
                <input type="file" />
                <CountDownBtn initCount={30}/>
                <HoverShowCard title="测试">
                    <div className="children">
                        <span>我是孩子</span>
                    </div>
                </HoverShowCard>
            </div>
        )
    }
}
