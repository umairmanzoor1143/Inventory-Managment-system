import { Form, Input, Button, Col, Row } from "antd";
import UploadImage from "./UploadImg";
import { Card } from "antd";
import AddTags from "./CreateTags";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { brandUpdateAction} from "../Services/Actions/action";
import { useEffect, useState } from "react";
import { BRANDS_DATA } from "../Services/constent";

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
const CreateNewBrand = () => {
  const Dispatch = useDispatch();
  const myparams = useParams()
  const history = useHistory();
  console.log(myparams);
  useEffect(() => {
    if(myparams.id){
      Dispatch(brandUpdateAction(myparams.id));
    };
    return () => {
      Dispatch({
        type : BRANDS_DATA.RESET_STATE
      });
      form.resetFields();
    };
    
  }, []);
  
  const myState = useSelector((state) => state.BrandsReduce.brand);
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
    
   
  }, [myState]);
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };
  const nameHandler = () => {
    const name = form.getFieldValue('name');
    if (name)
      form.setFieldsValue({
        slug: `${name.replace('-')}_${Math.floor(Math.random() * 100000)}`,
      });
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
            onFinish={onFinish}
            form={form}
            validateMessages={validateMessages}
          >
            <Col lg={24} sm={24} md={24}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true }]}
               
              >
                <Input  onBlur={nameHandler} />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24} md={24}>
              <Form.Item
                name="slug"
                label="Slug"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24} md={24}>
              <Form.Item label="Logo" name="logo">
                <UploadImage />
              </Form.Item>
            </Col>
            <Card
              title="Meta Information"
              bordered={false}
              style={{ width: "90%", margin: 50, textAlign: "left" }}
            >
              <Col lg={24} sm={24} md={24}>
                <Form.Item label="Meta Keywords" name='metaKeywords'>
                  <AddTags />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24} md={24}>
                <Form.Item label="Meta Title" name='metaTitle'>
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24} md={24}>
                <Form.Item label="Meta Discription" name='metaDescription'>
                  <TextArea showCount maxLength={100} />
                </Form.Item>
              </Col>
            </Card>
            <Card
              title="Meta Information"
              bordered={false}
              style={{ width: "90%", margin: 50, textAlign: "left" }}
            >
              <Col lg={24} sm={24} md={24}>
                <Form.Item label="Story Text" name='storyText'>
                  <TextArea showCount maxLength={100} />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24} md={24}>
                <Form.Item label="Story Cover" name='storyCover'>
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
              <Button onClick={()=>history.push("/brand")}>Cancel</Button>
            </Form.Item>
          </Form>
        </Row>
      </Card>
    </>
  );
};
export default CreateNewBrand;
