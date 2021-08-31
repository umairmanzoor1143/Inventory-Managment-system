import React, { useState , useEffect} from "react";
import { Form, Row, Col, Input, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import SevenInputs, { TwoInputs } from "./CreateBrandInputs";
import "./style.css";
import BrandTables from "../BrandTable/BrandTable";
import { brandsAction } from "../Services/Actions/action";
import { BRANDS_DATA } from "../Services/constent";
import { useDispatch } from "react-redux";

const CreateBrandPage = () => {
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(brandsAction());
    return () => {
      Dispatch({
        type : BRANDS_DATA.RESET_STATE
      });
    }
  }, []);
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
      <BrandTables />
    </>
  );
};
export default CreateBrandPage;
