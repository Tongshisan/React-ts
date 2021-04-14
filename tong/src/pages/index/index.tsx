/* eslint-disable @typescript-eslint/no-useless-constructor */
/*
 * @Author: your name
 * @Date: 2021-01-31 19:02:09
 * @LastEditTime: 2021-04-14 13:30:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/tong/src/pages/index/index.tsx
 */
import * as React from 'react';
import Icon from '../../components/Icon';
import Caipiao from '../caipiao/index';
import DemoUseMemo from '../Hooks/useMemo'
// import Icon from '@src/components/Icon';

interface IIndexProps {}
interface IIndexStore {}

export default class Index extends React.Component<IIndexProps, IIndexStore> {
    constructor(props: IIndexProps) {
        super(props);
    }

    componentDidMount() {
        console.log('index');
    }

    render() {
        return (
            <div>
                <Icon type='notice' />
                <Caipiao />
                <DemoUseMemo />
            </div>
        )
    }
}