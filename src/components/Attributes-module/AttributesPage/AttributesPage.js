import React, { useState } from "react";
import { Form, Row, Col, Input, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import TwoInputs from "./AttributesInputs";
import "./style.css";
import Tables from "../AttributesTable/table";
const AttributesPage = () => {
  const [expand, setExpand] = useState(true);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
    <Row>
      <Form
        style={{ margin: "30px" ,width: '100%'}}
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >  
        <TwoInputs />
        <Col span={25} style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{ margin: "0 8px" }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
        </Col>
      </Form>
      </Row>
      <Tables />
    </>
  );
};
export default AttributesPage;
