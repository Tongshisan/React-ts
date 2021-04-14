/*
 * @Author: your name
 * @Date: 2021-04-14 13:06:11
 * @LastEditTime: 2021-04-14 13:34:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/React-ts/tong/src/pages/Hooks/useMemo/index.tsx
 */
import * as React from 'react';


export const DemoUseMemo = (props: any) => {

    const renderDemoList: JSX.Element = React.useMemo(() => {
        return (
            <>
                {
                    props.lists.map((list: any) => (
                        <p>{list.name}</p>
                    ))
                }
            </>
        )
    }, [props.lists])
    return (
        <>
            <h1>DemoUseMemo</h1>
            {
                renderDemoList()
            }
        </>
    )
}