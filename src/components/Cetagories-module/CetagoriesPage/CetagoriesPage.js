import React, { useState } from "react";
import { Form, Row, Col, Input, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import SevenInputs, { TwoInputs } from "./CetagoriesInputs";
import "./style.css";
import CetagoriesTable from "../CetagoriesTable/CetagoriesTable";
const CetagoriesPage = () => {
  const [expand, setExpand] = useState(true);
  const [form] = Form.useForm();

  const getFields = (props) => {
    if (props === 2) {
      return <TwoInputs />;
    } else {
      return <SevenInputs />;
    }
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <Form
        style={{ margin: "30px" }}
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        {expand ? <Row>{getFields(2)}</Row> : <Row>{getFields(7)}</Row>}

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
          <a
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Form>
      <CetagoriesTable />
    </>
  );
};
export default CetagoriesPage;
