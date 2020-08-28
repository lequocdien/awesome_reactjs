import React from 'react';
import { Form, Input, Button } from 'antd';

const validateMessages = {
    required: '${label} là bắt buộc.',
    number: {
        max: '${label} phải nhỏ hơn ${max}'
    }
}

const MyForm = () => {
    return (
        <div>
            <Form
                validateMessages={validateMessages}
                onFinish={() => console.log('adfa')}
            >
                <Form.Item
                    label="Tên đăng nhập"
                    name="username"
                    rules={[
                        {
                            required: true,
                            max: 20
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">Click 1</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default MyForm;