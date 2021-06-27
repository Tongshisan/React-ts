/*
 * @Author: your name
 * @Date: 2021-01-31 15:58:55
 * @LastEditTime: 2021-06-13 22:00:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/my-app/src/pages/index.tsx
 */
import * as React from 'react';

import {Icon, DemoUseReducer, CountDownBtn, HoverShowCard} from '@/components';
import './index.css';

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
