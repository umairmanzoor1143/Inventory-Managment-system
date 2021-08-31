import React, { useState } from "react";
import { Form, Row, Col, Input, Button,Spin } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import SevenInputs, { TwoInputs } from "./CreateProductInputs";
import "./style.css";
import Tables from "../table/table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  suppliersAction,
  cetagorysAction,
} from "../../../Services/Actions/action";


const CreateProductPage = () => {
  const Dispatch = useDispatch();
  const [expand, setExpand] = useState(true);
  useEffect(() => {
    Dispatch(suppliersAction());
    Dispatch(cetagorysAction());
  }, []);
  const myState = useSelector((state) => state);
 
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
      <Tables />
      
    </>
  );
};
export default CreateProductPage;
