/*
 * @Author: your name
 * @Date: 2021-04-27 18:53:05
 * @LastEditTime: 2021-06-27 16:15:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/my-app/src/hooks/useFormData.tsx
 */
import * as React from 'react';
// import {IFormData} from './define';

export const useFormData = (initFormData: any) => {
    const formData: any = React.useRef({...initFormData});
    // 更新 state, 强制渲染组件
    const [, forceUpdate] = React.useState(+new Date());
    
    const handleForm = React.useMemo(() => {
        // 改变表单单元
        const setFormItem = (key: string, value: any) => {
            const form: any = formData.current;
            form[key] = value;
            forceUpdate(value);
        }

        // 重置表单
        const resetForm = () => {
            const form: any = formData.current;
            for (let key in form) {
                form[key] = initFormData[key];
            }
            forceUpdate(+new Date());
        }
        return [setFormItem, resetForm]
    }, [initFormData]);

    return [formData.current, ...handleForm]
}
