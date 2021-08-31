import React from "react";
import { Form, Row, Col, Button } from "antd";
import TwoInputs from "./OutletsInputs";
import "./style.css";
import Tables from "../OutletTable/table";
import { useDispatch } from "react-redux";
import {OUTLETS_DATA} from '../Services/constent'
import { useEffect } from "react";
import {outletsAction} from '../Services/Actions/action'

const OutletsPage = () => {
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(outletsAction());
    return () => {
      Dispatch({
        type : OUTLETS_DATA.RESET_STATE
      });
    }
  }, []);
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
export default OutletsPage;
