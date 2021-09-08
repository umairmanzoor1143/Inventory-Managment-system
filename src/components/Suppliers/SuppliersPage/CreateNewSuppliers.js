import { Form, Input, Button, Col, Row ,Select} from "antd";
import UploadImage from "./UploadImg";
import { Card } from "antd";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SUPPLIERS_DATA } from "../Services/constent";
import { SuppliersUpdateAction } from "../Services/Actions/action";
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
const CreateNewSuppliers = () => {
  const { Option } = Select;
  const Dispatch = useDispatch();
  const myparams = useParams()
  const history = useHistory();
  console.log(myparams);
  useEffect(() => {
    if(myparams.id){
      Dispatch(SuppliersUpdateAction(myparams.id));
    };
    return () => {
      Dispatch({
        type : SUPPLIERS_DATA.RESET_SUPPLIERS_STATE
      });
      form.resetFields();
    };
    
  }, []);
  
  const myState = useSelector((state) => state.SuppliersReduce.Supplier);
  console.log(myState); 

  useEffect(() => {
      form.setFieldsValue(myState);
  }, [myState]);
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultValue="92">
        <Option value="92">+92</Option>
        {/* <Option value="87">+87</Option> */}
      </Select>
    </Form.Item>
  );
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
                name="companyName"
                label="Company Name"
                rules={[{ required: true }]}
               
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24} md={24}>
              <Form.Item
                name="code"
                label="Supplier Code"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24} md={24}>
              <Form.Item label="Website" name="website">
              <Input />
              </Form.Item>
            </Col>
            <Col lg={24} sm={24} md={24}>
                <Form.Item label="Description" name='description'>
                  <TextArea showCount maxLength={100} />
                </Form.Item>
              </Col>
            <Card
              title="Contact Information"
              bordered={false}
              style={{ width: "90%", margin: 50, textAlign: "left" }}
            >
              <Col lg={24} sm={24} md={24}>
                <Form.Item label="Name" name='name'>
                <Input />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24} md={24}>
                <Form.Item label="Email" name='email'>
                <Input />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24} md={24}>
                <Form.Item label="Phone" name='phone'>
                <Input addonBefore={prefixSelector} />
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
              <Button onClick={()=>history.push("/suppliers")}>Cancel</Button>
            </Form.Item>
          </Form>
        </Row>
      </Card>
    </>
  );
};
export default CreateNewSuppliers;
