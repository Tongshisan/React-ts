/*
 * @Author: your name
 * @Date: 2021-04-27 17:08:58
 * @LastEditTime: 2021-04-28 10:17:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/my-app/src/components/UseReducer/index.tsx
 */
import * as React from 'react';
import {
    Form,
    InputNumber,
    Input,
    Button,
    Radio,
    Select,
    Switch
} from 'antd'
import 'antd/dist/antd.css'
import {useFormData} from '../../hooks/useFormData';

export const DemoUseReducer = (props: any) => {
    const [formData, setFormItem, resetForm] = useFormData()

    const {name, age, sex} = formData;
    console.log(name, age, sex)
    React.useEffect(() => {
        resetForm()
        console.log('DemoUseReducer');
    }, [])


    const submitForm = () => {
        console.log(formData)
    }

    return (
        <>
            <Form
                onFinish={submitForm}
            >
                <Form.Item label="姓名">
                    <Input
                        value={name}
                        placeholder={'请输入姓名'}
                        onChange={(e) => setFormItem('name', e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="年龄">
                    <InputNumber 
                        value={age}
                        onChange={(value) => setFormItem('age', value)}
                    />
                </Form.Item>
                <Form.Item label="性别">
                    <Radio.Group
                        defaultValue={sex}
                        value={sex}
                        onChange={(e) => setFormItem('sex', e.target.value)}
                    >
                        <Radio value={0}>男</Radio>
                        <Radio value={1}>女</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="default"
                        onClick={() => resetForm()}
                    >
                        重置
                    </Button>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
};