/*
 * @Author: your name
 * @Date: 2021-01-31 15:58:55
 * @LastEditTime: 2021-06-13 18:26:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/my-app/src/pages/index.tsx
 */
import * as React from 'react';
import Icon from '../../components/Icon';
import {DemoUseReducer} from '../../components/UseReducer';
import CountDownBtn from '../../components/CountDownBtn';

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
            </div>
        )
    }
}
