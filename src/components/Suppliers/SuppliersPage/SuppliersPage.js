import React, { useEffect } from "react";
import { Form, Row, Col, Input, Button, Spin } from "antd";
import TwoInputs from "./SuppliersInputs";
import "./style.css";
import Tables from "../SuppliersTable/table";
import { SuppliersAction } from "../Services/Actions/action";
import { useDispatch } from "react-redux";
import { SUPPLIERS_DATA } from "../Services/constent";

const SuppliersPage = () => {
  const [form] = Form.useForm();
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(SuppliersAction());
    return () => {
      Dispatch({
        type : SUPPLIERS_DATA.RESET_SUPPLIERS_STATE
      });
      form.resetFields();
    }
  }, []);
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
export default SuppliersPage;
