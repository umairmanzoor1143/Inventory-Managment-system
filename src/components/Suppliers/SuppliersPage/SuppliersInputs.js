import React, { useState } from 'react';
import {
  Form,
  Input,

  Select,

  Row,
  Col,
} from 'antd';

  export const TwoInputs = () => {
    return (
        <>
           <Form  style={{width:'100%'}}>
          <Row gutter={24}>
            <Col lg={12} md={12} sm={12}>
            <Form.Item  label="Name">
              <Input />
            </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={12}>
            <Form.Item label="Active">
              <Select >
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            </Col>
            </Row>
        </Form>
          
        </>
      );
    

  };
 export default TwoInputs;