import { Form, Input, Button, Col, Row } from "antd";
import UploadImage from "./UploadImg";
import { Card } from "antd";
import AddTags from "./CreateTags";

const CreateNewBrand = () => {
  const { TextArea } = Input;

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
            </Col>
            <Col lg={24} sm={24} md={24}>
              <Form.Item label="Logo">
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
              title="Meta Information"
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
export default CreateNewBrand;
