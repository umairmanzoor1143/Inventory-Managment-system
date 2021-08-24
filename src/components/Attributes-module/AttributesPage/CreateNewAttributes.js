import { Form, Input,  Button, Select, Col, Row } from "antd";
import  {Card,}  from "antd";
const CreateNewAttribute = () => {
  

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

  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <Card
        title="Create a new Attributes"
        bordered={false}
        style={{ width: "90%", margin: 50, textAlign: "left" }}
      >
        <Row>
          <Form
            layout="vertical"
            style={{
              margin: "30px",
              background: "#fff",
              padding: "30px",
              width: "100%",
            }}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Col lg={24} md={24} sm={24}>
              <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            
              <Col lg={24} md={24} sm={24}>
                <Form.Item
                  name={["type", "type"]}
                  label="Type"
                  rules={[{ required: true }]}
                >
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
          
            <Col lg={24} sm={24} md={24}>
              <Form.Item label="Units">
              <Input />
              </Form.Item>
            </Col>
                <Form.Item>
                  <Button style={{marginRight : 20}} type="primary" htmlType="submit">
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
export default CreateNewAttribute;
