import { Form, Input, Button, Select, Col, Row } from "antd";
import UploadImage from "./UploadImg";
import { Card } from "antd";
import AddTags from "./CetagoriesTags";
import { useEffect, useState } from "react";
import { CETAGORIES_DATA } from "../Services/constent";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CetagorieUpdateAction } from '../Services/Actions/action'


  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  /* eslint-enable no-template-curly-in-string */
const CreateNewCetagories = () => {
  const { TextArea } = Input;
  const [form] = Form.useForm();

  const Dispatch = useDispatch();
  const myparams = useParams()
  const history = useHistory();
  console.log(myparams);
  useEffect(() => {
    if(myparams.id){
      Dispatch(CetagorieUpdateAction(myparams.id));
    };
    return () => {
      Dispatch({
        type : CETAGORIES_DATA.RESET_STATE
      });
      form.resetFields();
    };
    
  }, []);

  const myState = useSelector((state) => state.CetagorieReduce.Cetagorie);
  console.log(myState); 

  useEffect(() => {
    if(myState){
      const values = {
        ...myState,
        logo : myState.logo ? [{ uid: 1, url: myState.logo }] : null,
        storyCover: myState.storyCover ? [{ uid: 1, url: myState.storyCover }] : null,
        metaKeywords: myState.metaKeywords?.split(','),
      };
      form.setFieldsValue(values);
    }
  },[myState]);
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <Card
        title="Basic Information"
        bordered={false}
        style={{ margin: 50, textAlign: "left" }}
      >
        <Row gutter={12}>
          <Form
            layout="horizontal"
            style={{ margin: "30px", background: "#fff", width: "100%" }}
            name="nest-messages"
            form={form}
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Col lg={24} sm={24} md={24}>
              <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24} md={24}>
              <Form.Item
                name={["slug", "slug"]}
                label="Slug"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Col lg={24} md={24} sm={24}>
            <Form.Item label="Parnet Cetagory">
              <Select >
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            </Col>
            </Col>
            <Col lg={24} sm={24} md={24}>
              <Form.Item label="Image">
                <UploadImage />
              </Form.Item>
            </Col>
            <Card
              title="Meta Information"
              bordered={false}
              style={{ width: "90%", margin: 50, textAlign: "left" }}
            >
              <Col lg={24} sm={24} md={24}>
                <Form.Item label="Meta Keywords">
                  <AddTags />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24} md={24}>
                <Form.Item label="Meta Title">
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24} md={24}>
                <Form.Item label="Meta Discription">
                  <TextArea showCount maxLength={100} />
                </Form.Item>
              </Col>
            </Card>
            <Card
              title="Seo Information"
              bordered={false}
              style={{ width: "90%", margin: 50, textAlign: "left" }}
            >
              <Col lg={24} sm={24} md={24}>
                <Form.Item label="Story Text">
                  <TextArea showCount maxLength={100} />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24} md={24}>
                <Form.Item label="Story Cover">
                  <UploadImage />
                </Form.Item>
              </Col>
            </Card>
            <Form.Item>
              <Button
                style={{ marginRight: 20 }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
              <Button>Cancel</Button>
            </Form.Item>
          </Form>
        </Row>
      </Card>
    </>
  );
};
export default CreateNewCetagories;
