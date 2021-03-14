/*
 * @Author: your name
 * @Date: 2021-03-03 11:23:25
 * @LastEditTime: 2021-03-03 11:30:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/tong/src/pages/test/index.tsx
 */
import * as React from 'react';

class Test extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }


    renderCreateElement = () => {
        const ul = React.createElement('ul');
        return (
            <div>
                {
                    ul
                }
            </div>
        )
    }

    render() {
        return (
            <div>
                {
                    this.renderCreateElement()
                }
            </div>
        );
    }
}